import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Policies",
  description:
    "Booking policies, cancellation policy, and treatment guidelines at Skin Reboot Spa Clinic in Cary, NC.",
};

const policies = [
  {
    title: "Booking Your Appointment",
    content:
      "All treatments must be booked in advance. We are unable to accommodate walk-ins at this time. Appointments can be booked online through our booking system.",
  },
  {
    title: "Arriving for Your Appointment",
    content:
      "Please arrive at your scheduled appointment time. We are unable to accommodate early arrivals, as this allows us to maintain a smooth schedule and provide uninterrupted service to each client. If you arrive early, we kindly ask that you remain in your car until your appointment time.",
  },
  {
    title: "Late Arrivals",
    content:
      "Please arrive on time so you can receive the full benefits of your session. Late arrivals may result in a shortened appointment or loss of the appointment entirely.",
  },
  {
    title: "Rescheduling & No-Shows",
    content:
      "Your appointment time has been set aside especially for you, and we look forward to seeing you. A 30% cancellation fee applies to any no-shows or cancellations made within 24 hours of the scheduled appointment.",
  },
  {
    title: "Treatment Packages",
    content:
      "All packages are valid for 1 year unless otherwise stated. Packages are non-refundable. Unused portions may be transferred to other comparable services, provided the unused portion matches the after-discount price. Packages contain services at a discounted price. Once a service is removed from the package, the unused service reverts to regular pricing. We strongly recommend transferring to other services to retain your promotional value.",
  },
  {
    title: "Product Sales",
    content: "All product sales are non-refundable.",
  },
  {
    title: "Gift Certificates",
    content:
      "Gift certificates not used by their expiration date will be forfeited with no entitlement to refund or exchange. In case of loss or damage, no replacement will be offered. Advance reservation is required to redeem a certificate, and the gift certificate number must be provided at the time of booking. Skin Reboot Spa Clinic reserves the right of final decision in case of dispute.",
  },
  {
    title: "Children & Pets",
    content:
      "We offer treatments for children ages 10 to 16 years old when accompanied by a parent or guardian. Unsupervised minors and pets are not permitted in the treatment room and cannot be left unattended in the lobby area. If you are receiving a treatment, children or pets must be accompanied by another adult who is not receiving treatment.",
  },
  {
    title: "Dispute Resolution",
    content:
      "Skin Reboot Spa Clinic reserves the right of final decision in case of any dispute.",
  },
];

export default function PoliciesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center">
        <div className="absolute inset-0">
          <Image src="/front-office.png" alt="Skin Reboot Spa Clinic" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1510]/80 via-[#1a1510]/50 to-[#1a1510]/30" />
        </div>
        <div className="container-premium text-center relative z-10">
          <p className="overline !text-champagne-light mb-4">
            Your Visit
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl text-white">
            Our Policies
          </h1>
          <p className="text-lg text-white/70 mt-4 max-w-xl mx-auto">
            To serve you better and continue offering the best skincare in Cary,
            we maintain the following policies
          </p>
        </div>
      </section>

      {/* Policies */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto space-y-8">
            {policies.map((policy) => (
              <div
                key={policy.title}
                className="bg-white rounded-xl p-6 md:p-8"
              >
                <h3 className="font-[family-name:var(--font-heading)] text-xl mb-3">
                  {policy.title}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {policy.content}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-warm-gray mb-6">
              Have questions about our policies? We are happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+19199456068" className="btn-secondary text-center">
                Call (919) 945-6068
              </a>
              <a href="mailto:mayra@skinrebootbymayra.com" className="btn-secondary text-center">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
