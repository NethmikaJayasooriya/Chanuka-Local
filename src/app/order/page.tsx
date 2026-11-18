import type { Metadata } from "next";
import { OrderWizard } from "@/components/OrderWizard";
import { PageHeader } from "@/components/PageHeader";
import { deliveries, levels, resolvePackage, type DeliveryId, type LevelId } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Start your order",
  description: "Confirm your package, share your details and career brief, then continue to checkout.",
  robots: { index: false, follow: true },
};

export default async function OrderPage({
  searchParams,
}: {
  searchParams: Promise<{
    tier?: string;
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
  const pkgObj = resolvePackage(params.package);
  const preconfigured = !!pkgObj;
  const initialPackage = pkgObj ? pkgObj.id : "cv-linkedin";
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
      <div className={preconfigured ? "hidden lg:block" : ""}>
        <PageHeader
          eyebrow="Order"
          title="Four steps and your order is placed."
          lead="Nothing is added after this point. The total you see is the total you pay."
          crumbs={[{ label: "Order" }]}
        />
      </div>

      <section className={`py-6 sm:py-10 lg:py-16 ${preconfigured ? "pt-3 sm:pt-6" : ""}`}>
        <div className="container-page">
          <OrderWizard
            initialTier={params.tier === "signature" ? "signature" : "essential"}
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
