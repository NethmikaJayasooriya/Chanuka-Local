import type { Metadata } from "next";
import { OrderWizard } from "@/components/OrderWizard";
import { PageHeader } from "@/components/PageHeader";
import { deliveries, levels, packages, type DeliveryId, type LevelId } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Start your order",
  description: "Confirm your package, share your details and career brief, then continue to checkout.",
  robots: { index: false, follow: true },
};

export default async function OrderPage({
  searchParams,
}: {
  searchParams: Promise<{
    package?: string;
    level?: string;
    delivery?: string;
    country?: string;
    role?: string;
  }>;
}) {
  const params = await searchParams;

  // Did the visitor arrive with a package already chosen (from the home
  // configurator or a country CTA)? If so, the wizard skips the re-selection
  // step and opens on "Your details".
  const preconfigured = packages.some((p) => p.id === params.package);
  const initialPackage = preconfigured ? (params.package as string) : "cv-linkedin";
  const initialLevel = levels.some((l) => l.id === params.level)
    ? (params.level as LevelId)
    : "3-to-9";
  const initialDelivery = deliveries.some((d) => d.id === params.delivery)
    ? (params.delivery as DeliveryId)
    : "normal";
  const initialCountry = params.country || "";
  const initialRole = params.role || "";

  return (
    <>
      <PageHeader
        eyebrow="Order"
        title="Four steps and your order is placed."
        lead="Nothing is added after this point. The total you see is the total you pay."
        crumbs={[{ label: "Order" }]}
      />

      <section className="py-12 lg:py-16">
        <div className="container-page">
          <OrderWizard
            initialPackage={initialPackage}
            initialLevel={initialLevel}
            initialDelivery={initialDelivery}
            initialCountry={initialCountry}
            initialRole={initialRole}
            preconfigured={preconfigured}
          />
        </div>
      </section>
    </>
  );
}
