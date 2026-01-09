import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Building } from "lucide-react";

const stats = [
  { value: "₹15 LPA", label: "Highest Package", icon: TrendingUp },
  { value: "₹5.5 LPA", label: "Average Package", icon: TrendingUp },
  { value: "90%", label: "Placement Rate", icon: Users },
  { value: "50+", label: "Companies Visit", icon: Building },
];

const companies = [
  "TCS",
  "Infosys",
  "Wipro",
  "Cognizant",
  "Capgemini",
  "HCL",
  "Tech Mahindra",
  "Accenture",
  "IBM",
  "Hinduja Global Services",
  "Accurate Steel Forging",
  "4W TECHNOLOGIES",
  "CSS Corp",
  "Microsoft",
];

const PlacementsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Content Side */}
          <div className="text-center lg:text-left">
            <h5 className="heading-primary mb-5 text-center lg:text-left">
              Exceptional Placement Records
            </h5>
            <p className="mb-8 text-lg text-muted-foreground text-center lg:text-left">
              A strong placement support system connecting students with leading companies and career opportunities.
            </p>

            {/* Stats Grid */}
            <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg bg-secondary p-4 text-center"
                >
                  <div className="mb-1 text-2xl font-bold text-primary md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Companies Grid */}
            <div className="rounded-2xl bg-secondary p-8">
              <h3 className="mb-6 text-center text-xl font-semibold text-foreground">
                Our Recruiting Partners
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {companies.slice(0, 5).map((company) => (
                  <div
                    key={company}
                    className="flex h-16 w-40 items-center justify-center rounded-lg bg-background p-3 text-sm font-medium text-muted-foreground shadow-sm transition-all hover:shadow-md hover:text-primary"
                  >
                    {company}
                  </div>
                ))}
                <div className="flex h-16 w-40 items-center justify-center rounded-lg bg-background/50 p-3 text-sm font-medium text-muted-foreground hover:bg-background hover:text-primary transition-all">
                  <Link to="/placements" className="flex items-center gap-2">
                    More...
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementsSection;
