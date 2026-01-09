import { GraduationCap, Users, FlaskConical, Briefcase, Award, BookOpen } from "lucide-react";

import nbaLogo from "@/assets/nba-badge.png";


const highlights = [
  {
    image: nbaLogo,
    title: "NBA Accredited",
    description: "Selected programs are NBA accredited, ensuring quality education and industry relevance.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "50+ highly qualified professors with strong academic and industry experience.",
  },
  {
    icon: FlaskConical,
    title: "Smart Learning Labs",
    description: "Hands-on learning with advanced tools and modern equipment.",
  },
  {
    icon: Briefcase,
    title: "95% Placement Record",
    description: "Consistent placement success across leading companies and industries.",
  },
  {
    icon: BookOpen,
    title: "Library",
    description: "Well-established library supporting learning since 2001.",
  },
  {
    icon: GraduationCap,
    title: "Alumni Achievements",
    description: "500+ alumni contributing to innovation and leadership in their fields.",
  },
];

const HighlightsSection = () => {
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="heading-primary">Our Campus Highlights</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl bg-background p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {/* @ts-ignore - Conditional rendering of image or icon */}
                {item.image ? (
                  <div
                    className="h-8 w-8 bg-current"
                    style={{
                      maskImage: `url(${item.image})`,
                      WebkitMaskImage: `url(${item.image})`,
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                    }}
                  />
                ) : (
                  /* @ts-ignore */
                  <item.icon className="h-6 w-6" />
                )}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
