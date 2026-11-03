import { jsPDF } from "jspdf";
import type { Invoice, SectionSpacing } from "./invoices";
import { formatInvoiceMoney, getCurrencySymbol, DEFAULT_SECTION_ORDER } from "./invoices";

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace("#", "");
  if (clean.length === 3) {
    const r = parseInt(clean[0] + clean[0], 16);
    const g = parseInt(clean[1] + clean[1], 16);
    const b = parseInt(clean[2] + clean[2], 16);
    return [r, g, b];
  }
  if (clean.length === 6) {
    const r = parseInt(clean.substring(0, 2), 16);
    const g = parseInt(clean.substring(2, 4), 16);
    const b = parseInt(clean.substring(4, 6), 16);
    return [r, g, b];
  }
  return [23, 53, 92]; // fallback navy
}

const PX_TO_MM = 0.264583;

export async function downloadInvoiceAsPdf(invoice: Partial<Invoice>, targetElementId?: string) {
  const safeNumber = (invoice.invoice_number || "INV-2026-001")
    .replace(/[/\\?%*:|"<>]/g, "-")
    .trim();
  const filename = `${safeNumber}.pdf`;

  // 1. Primary: Capture the EXACT on-screen preview DOM element for 100% WYSIWYG identity!
  if (typeof window !== "undefined") {
    const el =
      (targetElementId ? document.getElementById(targetElementId) : null) ||
      document.getElementById("exact-preview-paper-export") ||
      document.getElementById("exact-preview-paper") ||
      document.getElementById("invoice-paper");

    if (el) {
      try {
        const html2canvasModule = await import("html2canvas-pro");
        const html2canvas = html2canvasModule.default || html2canvasModule;

        const canvas = await html2canvas(el, {
          scale: 2.5,
          useCORS: true,
          logging: false,
          scrollX: 0,
          scrollY: 0,
          onclone: (clonedDoc: Document) => {
            const target =
              (targetElementId ? clonedDoc.getElementById(targetElementId) : null) ||
              clonedDoc.getElementById("exact-preview-paper-export") ||
              clonedDoc.getElementById("exact-preview-paper") ||
              clonedDoc.getElementById("invoice-paper");
            if (target) {
              target.style.borderRadius = "0px";
              target.style.border = "none";
              target.style.boxShadow = "none";
            }
          },
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.98);
        const doc = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
        });

        const pdfWidth = 210;
        const pageHeight = 297;
        const imgHeight = (canvas.height * pdfWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        doc.addImage(imgData, "JPEG", 0, position, pdfWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(imgData, "JPEG", 0, position, pdfWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        try {
          doc.save(filename);
        } catch {
          const blob = doc.output("blob");
          const blobUrl = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = blobUrl;
          link.download = filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setTimeout(() => URL.revokeObjectURL(blobUrl), 3000);
        }
        return;
      } catch (domErr) {
        console.warn("DOM-based PDF export error, falling back to vector:", domErr);
      }
    }
  }

  // 2. Fallback: Vector jsPDF engine
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = 210;
  const leftMargin = 18;
  const rightMargin = 192;
  const contentWidth = rightMargin - leftMargin;

  const [themeR, themeG, themeB] = hexToRgb(invoice.theme_color || "#17355c");
  const currency = invoice.currency || "USD";
  const currencySymbol = getCurrencySymbol(currency);
  const items = invoice.items || [];
  const status = invoice.status || "sent";
  const invoiceNumber = invoice.invoice_number?.trim() || "INV-2026-001";
  const invoiceTitle = (invoice.invoice_title || "INVOICE").toUpperCase();

  const layout = invoice.layout || {};
  const sectionOrder = layout.section_order && layout.section_order.length > 0
    ? layout.section_order
    : DEFAULT_SECTION_ORDER;
  const alignments = layout.section_alignments || {};
  const spacingMap = layout.section_spacing || {};
  const spacers = layout.spacers || {};

  // Track vertical position
  let y = 20;

  // Render individual sections
  for (const sectionId of sectionOrder) {
    // Spacer block
    if (sectionId.startsWith("spacer-")) {
      const spacerPx = spacers[sectionId] ?? 28;
      y += spacerPx * PX_TO_MM;
      continue;
    }

    const spacing: SectionSpacing = spacingMap[sectionId] || {
      marginTop: 12,
      marginBottom: 16,
      offsetX: 0,
    };

    // Apply empty space above (marginTop)
    y += (spacing.marginTop ?? 12) * PX_TO_MM;

    const offsetMm = (spacing.offsetX ?? 0) * PX_TO_MM;

    if (sectionId === "header") {
      const headerAlign = alignments.header || (layout.header_layout === "sender_right" ? "right" : (layout.header_layout === "centered" ? "center" : "left"));
      
      const senderX = (headerAlign === "right" ? rightMargin : (headerAlign === "center" ? pageWidth / 2 : leftMargin)) + offsetMm;
      const senderAlign: "left" | "right" | "center" = headerAlign === "right" ? "right" : (headerAlign === "center" ? "center" : "left");

      const metaX = (headerAlign === "right" ? leftMargin : (headerAlign === "center" ? pageWidth / 2 : rightMargin)) + offsetMm;
      const metaAlign: "left" | "right" | "center" = headerAlign === "right" ? "left" : (headerAlign === "center" ? "center" : "right");

      doc.setFont("helvetica", "bold");
      doc.setFontSize(20);
      doc.setTextColor(themeR, themeG, themeB);
      doc.text(invoice.from_name || "Chanuka Jeewantha", senderX, y, { align: senderAlign });

      // Document Title
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.text(invoiceTitle, metaX, y, { align: metaAlign });

      y += 6;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(100, 116, 139);
      doc.text(invoice.from_title || "CV & Career Branding Specialist", senderX, y, { align: senderAlign });

      // Invoice Number
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(15, 23, 42);
      doc.text(`Invoice #: ${invoiceNumber}`, metaX, y, { align: metaAlign });

      y += 5;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(100, 116, 139);
      doc.text(invoice.from_email || "info@chanukajeewantha.com", senderX, y, { align: senderAlign });

      // Date
      doc.text(`Date: ${invoice.issue_date || new Date().toISOString().split("T")[0]}`, metaX, y, {
        align: metaAlign,
      });

      y += 4.5;
      doc.text(invoice.from_phone || "+94 77 123 4567", senderX, y, { align: senderAlign });

      if (invoice.due_date) {
        doc.setFont("helvetica", "bold");
        doc.setTextColor(180, 83, 9);
        doc.text(`Due Date: ${invoice.due_date}`, metaX, y, { align: metaAlign });
        doc.setFont("helvetica", "normal");
        doc.setTextColor(100, 116, 139);
      }

      y += 4.5;
      doc.text(invoice.from_address || "Colombo, Sri Lanka", senderX, y, { align: senderAlign });

      // Status Badge (clean rounded pill matching preview)
      const statusLabel = status === "paid" ? "PAID" : "PAYMENT DUE";
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      const badgeW = status === "paid" ? 18 : 28;
      const badgeH = 5.2;
      const badgeX = metaAlign === "right" ? metaX - badgeW : (metaAlign === "center" ? metaX - badgeW / 2 : metaX);
      if (status === "paid") {
        doc.setFillColor(236, 253, 245);
        doc.setDrawColor(167, 243, 208);
        doc.roundedRect(badgeX, y - 3.8, badgeW, badgeH, 1.2, 1.2, "FD");
        doc.setTextColor(6, 95, 70);
      } else {
        doc.setFillColor(241, 245, 249);
        doc.setDrawColor(226, 232, 240);
        doc.roundedRect(badgeX, y - 3.8, badgeW, badgeH, 1.2, 1.2, "FD");
        doc.setTextColor(51, 65, 85);
      }
      doc.text(statusLabel, badgeX + badgeW / 2, y - 0.2, { align: "center" });

      // Divider Line
      y += 8;
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.4);
      doc.line(leftMargin + offsetMm, y, rightMargin + offsetMm, y);

    } else if (sectionId === "bill_to") {
      const billToAlign = alignments.bill_to || (layout.client_layout === "client_right" ? "right" : (layout.client_layout === "centered" ? "center" : "left"));
      const billX = (billToAlign === "right" ? rightMargin : (billToAlign === "center" ? pageWidth / 2 : leftMargin)) + offsetMm;
      const billAlign: "left" | "right" | "center" = billToAlign === "right" ? "right" : (billToAlign === "center" ? "center" : "left");

      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(148, 163, 184);
      doc.text("BILLED TO", billX, y, { align: billAlign });

      y += 5;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(15, 23, 42);
      doc.text(invoice.to_name || "Client", billX, y, { align: billAlign });

      if (invoice.to_company) {
        y += 4.5;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.5);
        doc.setTextColor(71, 85, 105);
        doc.text(invoice.to_company, billX, y, { align: billAlign });
      }

      if (invoice.to_email) {
        y += 4.5;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(100, 116, 139);
        doc.text(invoice.to_email, billX, y, { align: billAlign });
      }

      if (invoice.to_address) {
        y += 4.5;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(100, 116, 139);
        doc.text(invoice.to_address, billX, y, { align: billAlign });
      }

    } else if (sectionId === "items") {
      const itemsLeft = leftMargin + offsetMm;
      const itemsRight = rightMargin + offsetMm;

      // Table Column Titles (clean, matching on-screen preview)
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(148, 163, 184);
      doc.text("DESCRIPTION", itemsLeft, y + 4.8);
      doc.text("QTY", itemsLeft + 107, y + 4.8, { align: "center" });
      doc.text(`RATE (${currencySymbol.trim()})`, itemsLeft + 137, y + 4.8, { align: "right" });
      doc.text("AMOUNT", itemsRight, y + 4.8, { align: "right" });

      y += 6.5;
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.35);
      doc.line(itemsLeft, y, itemsRight, y);

      // Table Rows
      items.forEach((item) => {
        const descLines = doc.splitTextToSize(item.description || "Service", 95);
        const rowHeight = Math.max(7.5, descLines.length * 4.5 + 3);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.5);
        doc.setTextColor(30, 41, 59);
        doc.text(descLines, itemsLeft + 3, y + 5);

        doc.setFont("helvetica", "normal");
        doc.text(String(item.quantity || 1), itemsLeft + 107, y + 5, { align: "center" });

        doc.text(
          Number(item.unit_price || 0).toLocaleString("en-US", { minimumFractionDigits: 2 }),
          itemsLeft + 137,
          y + 5,
          { align: "right" }
        );

        doc.setFont("helvetica", "bold");
        doc.setTextColor(15, 23, 42);
        doc.text(
          `${currencySymbol}${Number(item.total || 0).toLocaleString("en-US", {
            minimumFractionDigits: 2,
          })}`,
          itemsRight - 3,
          y + 5,
          { align: "right" }
        );

        y += rowHeight;

        // Row separator line
        doc.setDrawColor(241, 245, 249);
        doc.setLineWidth(0.2);
        doc.line(itemsLeft, y, itemsRight, y);
      });

    } else if (sectionId === "totals") {
      const totalsAlign = alignments.totals || layout.totals_align || "right";
      const isTotalsLeft = totalsAlign === "left";
      const isTotalsCenter = totalsAlign === "center";

      const totalsLeft = (isTotalsLeft ? leftMargin : (isTotalsCenter ? (pageWidth - 70) / 2 : 125)) + offsetMm;
      const totalsRight = (isTotalsLeft ? leftMargin + 65 : (isTotalsCenter ? (pageWidth + 70) / 2 : rightMargin - 3)) + offsetMm;

      // Subtotal
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(100, 116, 139);
      doc.text("Subtotal", totalsLeft, y);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(30, 41, 59);
      doc.text(formatInvoiceMoney(invoice.subtotal || 0, currency), totalsRight, y, {
        align: "right",
      });

      // Discount (if any)
      if ((invoice.discount_amount || 0) > 0) {
        y += 5;
        doc.setFont("helvetica", "normal");
        doc.setTextColor(5, 150, 105);
        const discLabel =
          invoice.discount_type === "percentage"
            ? `Discount (${invoice.discount_value}%)`
            : "Discount";
        doc.text(discLabel, totalsLeft, y);
        doc.setFont("helvetica", "bold");
        doc.text(`-${formatInvoiceMoney(invoice.discount_amount || 0, currency)}`, totalsRight, y, {
          align: "right",
        });
      }

      // Tax (if any)
      if ((invoice.tax_amount || 0) > 0) {
        y += 5;
        doc.setFont("helvetica", "normal");
        doc.setTextColor(100, 116, 139);
        doc.text(`Tax (${invoice.tax_rate}%)`, totalsLeft, y);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(30, 41, 59);
        doc.text(`+${formatInvoiceMoney(invoice.tax_amount || 0, currency)}`, totalsRight, y, {
          align: "right",
        });
      }

      // Total divider
      y += 3;
      doc.setDrawColor(203, 213, 225);
      doc.setLineWidth(0.5);
      doc.line(totalsLeft, y, totalsRight, y);

      // Grand Total
      y += 5.5;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42);
      doc.text("TOTAL DUE", totalsLeft, y);
      doc.setFontSize(13);
      doc.setTextColor(themeR, themeG, themeB);
      doc.text(formatInvoiceMoney(invoice.total || 0, currency), totalsRight, y, {
        align: "right",
      });

    } else if (sectionId === "payment_and_notes") {
      const payNotesAlign = alignments.payment_and_notes || (layout.payment_layout === "payment_right" ? "right" : "left");
      
      const payNotesLeft = leftMargin + offsetMm;
      const payNotesRight = rightMargin + offsetMm;

      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.4);
      doc.line(payNotesLeft, y, payNotesRight, y);

      y += 7;

      const colWidth = 82;
      const payLeft = (payNotesAlign === "right" ? leftMargin + colWidth + 10 : leftMargin) + offsetMm;
      const notesLeft = (payNotesAlign === "right" ? leftMargin : leftMargin + colWidth + 10) + offsetMm;

      // Payment Details
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      doc.text("PAYMENT DETAILS", payLeft, y);

      let payY = y + 5.5;
      const pm = invoice.payment_methods || {};

      doc.setFontSize(9);
      if (pm.bank_name) {
        doc.setFont("helvetica", "normal");
        doc.setTextColor(100, 116, 139);
        doc.text("Bank Name:", payLeft, payY);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(15, 23, 42);
        doc.text(pm.bank_name, payLeft + 30, payY);
        payY += 5;
      }

      if (pm.account_name) {
        doc.setFont("helvetica", "normal");
        doc.setTextColor(100, 116, 139);
        doc.text("Account Name:", payLeft, payY);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(15, 23, 42);
        doc.text(pm.account_name, payLeft + 30, payY);
        payY += 5;
      }

      if (pm.account_number) {
        doc.setFont("helvetica", "normal");
        doc.setTextColor(100, 116, 139);
        doc.text("Account Number:", payLeft, payY);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(2, 6, 23);
        doc.text(pm.account_number, payLeft + 30, payY);
        doc.setFontSize(9);
        payY += 5.5;
      }

      if (pm.swift_code) {
        doc.setFont("helvetica", "normal");
        doc.setTextColor(100, 116, 139);
        doc.text("SWIFT / BIC:", payLeft, payY);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(15, 23, 42);
        doc.text(pm.swift_code, payLeft + 30, payY);
        payY += 5;
      }

      // Notes
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      doc.text("NOTES & TERMS", notesLeft, y);

      let notesY = y + 5.5;
      if (invoice.notes) {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(51, 65, 85);
        const noteLines = doc.splitTextToSize(invoice.notes, colWidth);
        doc.text(noteLines, notesLeft, notesY);
        notesY += noteLines.length * 4.8;
      }

      y = Math.max(payY, notesY);

    } else if (sectionId === "footer") {
      const footerAlign = alignments.footer || layout.footer_align || "center";
      const footerX = (footerAlign === "left" ? leftMargin : (footerAlign === "right" ? rightMargin : pageWidth / 2)) + offsetMm;
      const footerTextPosition: "left" | "right" | "center" = footerAlign === "left" ? "left" : (footerAlign === "right" ? "right" : "center");

      // Flow footer naturally matching preview
      const footerTargetY = y + 8;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(148, 163, 184);
      doc.text(
        `${invoice.from_name || "Chanuka Jeewantha"} · ${invoice.from_title || "CV & Career Narrative Specialist"} · ${
          invoice.from_website || "chanukajeewantha.com"
        }`,
        footerX,
        footerTargetY,
        { align: footerTextPosition }
      );

      y = footerTargetY + 5;
    }

    // Apply empty space below (marginBottom)
    y += (spacing.marginBottom ?? 16) * PX_TO_MM;
  }

  // Trigger immediate direct file download into the user's Downloads folder!
  try {
    doc.save(filename);
  } catch (saveErr) {
    console.warn("doc.save failed, falling back to anchor blob download:", saveErr);
    const blob = doc.output("blob");
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 3000);
  }
}
