import Navbar from "@/components/Navbar";
import TeamCard from "@/components/TeamCard";

import andrewImg from "@/assets/team-1-andrew.png";
import michaelImg from "@/assets/team-2-michael.png";
import carolineImg from "@/assets/team-3-caroline.png";
import karolImg from "@/assets/team-4-karol.png";
import melissaImg from "@/assets/team-5-melissa.png";
import anaImg from "@/assets/team-6-ana.png";
import jcImg from "@/assets/team-7-jc.png";
import archieImg from "@/assets/team-8-archie.png";
import michelleImg from "@/assets/team-9-michelle.png";
import rogerickImg from "@/assets/team-10-rogerick.png";
import sharmaineImg from "@/assets/team-11-sharmaine.png";
import tylerImg from "@/assets/team-12-tyler.png";
import cristineImg from "@/assets/team-13-cristine.png";
import erinImg from "@/assets/team-14-erin.png";
import jessImg from "@/assets/team-15-jess.png";
import loryImg from "@/assets/team-16-lory.png";

const teamMembers = [
  {
    name: "Andrew Lell",
    title: "CEO & Founder",
    image: andrewImg,
    bio: "Andrew Lell is not your typical CEO — he's a force of nature. With 22 years in the branding and marketing game, he's transformed the brand experience landscape, collaborating with Fortune 500 heavyweights like Bridgestone, AT&T, and Southwest Airlines. Dovetail's transformation from a $40k startup in 2022 to a seven-figure powerhouse in 2023 is a testament to his hustle and vision. He's on a mission to guide businesses to seven figures and beyond — building a legacy of relentless prosperity.",
  },
  {
    name: "Michael Conaty",
    title: "President",
    image: michaelImg,
    bio: "Michael is not just a president — he's a visionary disruptor in the sales game and a culture-building guru. He's fostering a tribe where everyone's got a unique journey, and authenticity isn't just a buzzword — it's the backbone. Michael is steering the ship towards an exciting destination, blending success, innovation, and an unshakable commitment to guiding principles. It's not just sales; it's a revolution.",
  },
  {
    name: "Caroline",
    title: "Chief Operating Officer",
    image: carolineImg,
    bio: "Caroline is the unstoppable force behind Dovetail. On a mission to propel the company into unprecedented success, authenticity is not just a buzzword for her — it's the very backbone of what makes Dovetail stand out. She's not interested in mere transactions; she's forging enduring partnerships that withstand the test of time. Caroline is charting the course to a destination where success and impact collide in the most extraordinary way.",
  },
  {
    name: "Karol",
    title: "Sr Account Manager",
    image: karolImg,
    bio: "Karol is a perpetually energetic individual with an unmistakable passion for life. A self-professed workaholic, she finds fulfillment in pushing the boundaries of what's possible. At home, she loves her husband Ender and is a proud mommy to two incredible girls. She's also a proud parent to her two beloved huskies, Ghost and Nymeria. Outside of home life, Karol can often be found exploring the great outdoors or diving headfirst into a thrilling book or movie.",
  },
  {
    name: "Melissa",
    title: "Sr Account Manager",
    image: melissaImg,
    bio: "Melissa has proven herself to be an exceptional talent, driven by unwavering commitment to meeting and exceeding customer needs. With remarkable proficiency in promotional marketing, she consistently exceeds sales targets — showcasing her innate ability to drive results. Beyond her professional accomplishments, Melissa is a devoted wife and mother of three boys who treasures her time outdoors, fishing, enjoying the beach, and spending quality moments with family and friends.",
  },
  {
    name: "Ana Dy",
    title: "Account Manager",
    image: anaImg,
    bio: "Ana Dy is an exceptional Account Manager with a stellar reputation for exemplary client relations. She exudes genuine care and empathy towards clients, fostering strong, trust-based relationships. Her innate ability to listen attentively, understand client needs, and provide tailored solutions sets her apart. Ana's proactive approach ensures that client expectations are not only met but exceeded — earning her praise from colleagues and clients alike.",
  },
  {
    name: "JC Dy",
    title: "Account Manager",
    image: jcImg,
    bio: "JC epitomizes excellence in client relations. His innate ability to understand and anticipate client needs ensures that each interaction is not just a transaction but a meaningful and fruitful partnership. JC's exceptional communication skills and genuine empathy forge strong connections, building trust and loyalty. At Dovetail Strategic, JC is not just an Account Manager — he's a trusted advisor and ally, dedicated to helping clients achieve their goals and surpass their expectations.",
  },
  {
    name: "Archie",
    title: "Account Manager",
    image: archieImg,
    bio: "Archie is a dedicated professional with a passion for providing exceptional customer service. With a proven track record as a customer service expert, team leader, and subject matter expert, he brings enthusiasm to every interaction. He thrives on delivering solutions that leave customers satisfied and is recognized for in-depth knowledge that enriches every customer interaction. Beyond professional accomplishments, Archie is deeply passionate about making a positive impact on the lives of others.",
  },
  {
    name: "Michelle Honra",
    title: "Graphic Designer",
    image: michelleImg,
    bio: "",
  },
  {
    name: "Rogerick Ambait",
    title: "Account Manager",
    image: rogerickImg,
    bio: "",
  },
  {
    name: "Sharmaine Gayanes",
    title: "Accounting Manager",
    image: sharmaineImg,
    bio: "",
  },
  {
    name: "Tyeler Hess",
    title: "Sr Account Manager",
    image: tylerImg,
    bio: "",
  },
  {
    name: "Cristine Bulgariu",
    title: "Account Manager",
    image: cristineImg,
    bio: "",
  },
  {
    name: "Erin Mccormick",
    title: "Sr Account Manager",
    image: erinImg,
    bio: "",
  },
  {
    name: "Jess Irish Domingo",
    title: "Executive Assistant To CEO",
    image: jessImg,
    bio: "",
  },
  {
    name: "Lory Tuazon",
    title: "Accounting Associate",
    image: loryImg,
    bio: "",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background font-sans-clean">
      <Navbar />

      {/* Hero Section — dark gradient */}
      <section className="relative overflow-hidden pt-32 pb-24" style={{ background: "linear-gradient(180deg, hsl(215 25% 15%) 0%, hsl(215 20% 10%) 40%, hsl(0 0% 5%) 100%)" }}>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase font-medium mb-6" style={{ color: "hsl(0 0% 55%)" }}>
            Who We Are
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-8" style={{ color: "hsl(0 0% 98%)" }}>
            Meet the Team
            <span className="block mt-2" style={{ color: "hsl(0 0% 55%)" }}>Behind the Strategy</span>
          </h1>
          <div className="w-16 h-px mx-auto mb-8" style={{ background: "hsl(0 0% 40%)" }} />
          <p className="text-lg max-w-2xl mx-auto leading-relaxed font-sans-clean" style={{ color: "hsl(0 0% 60%)" }}>
            A collective of relentless strategists, visionaries, and execution experts — united by one mission: to build brands that last and businesses that thrive.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      {/* Mission Strip — white background, separating from black hero */}
      <section className="bg-background py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { label: "Founded", value: "2022" },
              { label: "Revenue Growth", value: "7 - Figure" },
              { label: "Years of Combined Experience", value: "50+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <p className="font-display text-4xl font-bold text-foreground mb-2 transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm tracking-widest uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid — light background */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-silver text-xs tracking-[0.3em] uppercase font-medium mb-4" style={{ color: "hsl(0 0% 55%)" }}>
              Our People
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Leadership & Team
            </h2>
            <p className="text-muted-foreground text-sm mt-4 font-sans-clean">
              Click any card to learn more.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section — light gray, contrasts with white team section above */}
      <section className="py-24" style={{ background: "hsl(0 0% 93%)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase font-medium mb-4" style={{ color: "hsl(0 0% 40%)" }}>
              What Drives Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "hsl(0 0% 8%)" }}>
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                desc: "We don't chase transactions — we forge genuine partnerships built on trust, transparency, and shared purpose.",
              },
              {
                title: "Relentless Drive",
                desc: "We push past limits, exceed expectations, and never settle for anything less than extraordinary results.",
              },
              {
                title: "Lasting Impact",
                desc: "Every strategy we craft is designed to leave a legacy — for our clients, their teams, and the communities they serve.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="border p-8 group hover:border-black/20 transition-all duration-300 hover:bg-black/[0.03]"
                style={{ borderColor: "hsl(0 0% 78%)" }}
              >
                <div className="w-8 h-px mb-6 transition-all duration-300 group-hover:w-14" style={{ background: "hsl(0 0% 40%)" }} />
                <h3 className="font-display text-xl font-semibold mb-4" style={{ color: "hsl(0 0% 8%)" }}>
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed font-sans-clean transition-colors duration-300" style={{ color: "hsl(0 0% 45%)" }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer — slightly lighter than section above so it reads as separate */}
      <footer className="border-t py-10" style={{ background: "hsl(0 0% 88%)", borderColor: "hsl(0 0% 78%)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs tracking-widest uppercase font-sans-clean" style={{ color: "hsl(0 0% 45%)" }}>
            © {new Date().getFullYear()} Dovetail Strategic. All rights reserved.
          </p>
          <p className="text-xs tracking-widest uppercase font-sans-clean" style={{ color: "hsl(0 0% 40%)" }}>
            Building Legacies. Driving Results.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
