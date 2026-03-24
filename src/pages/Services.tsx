import { Link } from "react-router-dom";
import { Store, Gift, ShoppingBag, Award, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import caseShipping from "@/assets/case-shipping-swag.jpg";
import caseGifting from "@/assets/case-gifting.jpg";
import caseLiveEvent from "@/assets/case-live-event.jpg";
import caseAwardKitting from "@/assets/case-award-kitting.jpg";

const capabilities = [
  { icon: Store, title: "One Stop Shop", desc: "Promotional Products" },
  { icon: Gift, title: "Innovative & Creative", desc: "Custom branded solutions" },
  { icon: ShoppingBag, title: "Local In-House", desc: "Kitting & Fulfillment" },
  { icon: Users, title: "Proactive & Results-Driven", desc: "Strategic partnerships" },
  { icon: Award, title: "E-Commerce", desc: "Pop-Up Stores & platforms" },
];

const caseStudies = [
  {
    title: "Savings on Shipping Swag",
    client: "Event Swag Distribution",
    challenge:
      "Client needed an exciting "band swag" experience for an event, featuring unique bundles for each recipient to choose from.",
    solution:
      "Dovetail launched a seamless online ordering system with customizable options. We created unique collections by bundling items, along with the choice of a hat or tote. Dovetail facilitated distribution to approximately 1,200 attendees in three hours, saving the client money on distribution and shipping.",
    image: caseShipping,
  },
  {
    title: "Interactive Multi-Platform Gifting",
    client: "High-Level Donor Gifting",
    challenge:
      "Client needed a gifting drip-campaign for upcoming High Level Donors — meaningful items to create an immersive experience for each recipient.",
    solution:
      "Dovetail built an interactive experience with multiple gift categories supporting the mission. This included useful & adjacent items that prepared recipients for what to expect. The thoughtful gifting experience created loyal donors and strong ROI.",
    image: caseGifting,
  },
  {
    title: "Live Event Gear Shop",
    client: "In-Person Apparel Experience",
    challenge:
      "Client asked us to create an interactive "Shop" for users to choose their preferred items based on a touch, feel, and try experience.",
    solution:
      "Dovetail set up and hosted an in-person Apparel Shop staffed by our team. Staff provided answers on apparel and ensured each attendee's order was properly recorded. Attendees walked away with branded hard goods while custom apparel was fulfilled and shipped.",
    image: caseLiveEvent,
  },
  {
    title: "Award Custom Kitting",
    client: "Premium Award Boxes",
    challenge:
      "Client asked us to create a carefully curated award box elevated from packaging to contents.",
    solution:
      'Dovetail created a custom "wow" factor from start to finish. The box was a high-end custom wooden branded box made by a local Nashville artisan. Contents were curated to present "something for everyone" — apparel, work, play. Award boxes were assembled in-house for quality and accuracy.',
    image: caseAwardKitting,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background font-sans-clean">
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, hsl(215 25% 15%) 0%, hsl(215 20% 10%) 40%, hsl(0 0% 5%) 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p
            className="text-xs tracking-[0.35em] uppercase font-medium mb-6"
            style={{ color: "hsl(0 0% 50%)" }}
          >
            Our Capabilities
          </p>
          <h1
            className="font-display text-5xl md:text-7xl font-bold leading-[0.95] mb-8"
            style={{ color: "hsl(0 0% 95%)" }}
          >
            Swag Made
            <span className="block" style={{ color: "hsl(0 0% 55%)" }}>
              Easy
            </span>
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "hsl(0 0% 45%)" }}
          >
            We turn your ideas into impactful products that create memorable
            connections with your audience. With creativity, precision, and
            quality, we handle all the details — so you can focus on your
            business.
          </p>
        </div>
      </section>

      {/* Capabilities Strip */}
      <section
        className="border-y py-16"
        style={{
          background: "hsl(0 0% 96%)",
          borderColor: "hsl(0 0% 85%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            {capabilities.map((cap) => (
              <div key={cap.title} className="text-center">
                <cap.icon
                  className="w-8 h-8 mx-auto mb-3"
                  strokeWidth={1.5}
                  style={{ color: "hsl(0 0% 30%)" }}
                />
                <p
                  className="font-display text-sm font-semibold mb-1"
                  style={{ color: "hsl(0 0% 10%)" }}
                >
                  {cap.title}
                </p>
                <p
                  className="text-xs tracking-wide"
                  style={{ color: "hsl(0 0% 50%)" }}
                >
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p
              className="text-xs tracking-[0.3em] uppercase font-medium mb-4"
              style={{ color: "hsl(0 0% 50%)" }}
            >
              What We've Done
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Case Studies
            </h2>
          </div>
          <div className="space-y-24">
            {caseStudies.map((study, i) => (
              <div
                key={study.title}
                className={`flex flex-col ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full rounded-sm shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2">
                  <p
                    className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
                    style={{ color: "hsl(0 0% 50%)" }}
                  >
                    {study.client}
                  </p>
                  <h3 className="font-display text-3xl font-bold text-foreground mb-6">
                    {study.title}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p
                        className="text-xs tracking-widest uppercase font-semibold mb-2"
                        style={{ color: "hsl(0 0% 35%)" }}
                      >
                        Challenge
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "hsl(0 0% 40%)" }}
                      >
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <p
                        className="text-xs tracking-widest uppercase font-semibold mb-2"
                        style={{ color: "hsl(0 0% 35%)" }}
                      >
                        Solution
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "hsl(0 0% 40%)" }}
                      >
                        {study.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32" style={{ background: "hsl(0 0% 5%)" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <p
            className="text-xs tracking-[0.35em] uppercase font-medium mb-6"
            style={{ color: "hsl(0 0% 40%)" }}
          >
            Ready to Get Started?
          </p>
          <h2
            className="font-display text-4xl md:text-6xl font-bold mb-8"
            style={{ color: "hsl(0 0% 95%)" }}
          >
            Let's Create Something
            <span className="block" style={{ color: "hsl(0 0% 55%)" }}>
              Memorable
            </span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto mb-12 leading-relaxed"
            style={{ color: "hsl(0 0% 45%)" }}
          >
            From custom kitting to pop-up shops, we handle every detail so you
            don't have to.
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: "hsl(0 0% 95%)", color: "hsl(0 0% 5%)" }}
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t py-10"
        style={{
          background: "hsl(0 0% 88%)",
          borderColor: "hsl(0 0% 78%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: "hsl(0 0% 45%)" }}
          >
            © {new Date().getFullYear()} Dovetail Strategic. All rights
            reserved.
          </p>
          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: "hsl(0 0% 40%)" }}
          >
            Building Legacies. Driving Results.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Services;
