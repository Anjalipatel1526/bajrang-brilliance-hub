import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Cpu, Cog, Building2, Zap, Radio, Wrench, type LucideIcon } from "lucide-react";

interface Program {
  icon: LucideIcon;
  title: string;
  description: string;
}

const programs: Program[] = [
  {
    icon: Cpu,
    title: "Computer Science & Engineering",
    description: "Learn computing, programming, and emerging technologies with hands-on projects to become industry-ready professionals",
  },
  {
    icon: Cog,
    title: "Mechanical Engineering",
    description: "Gain in-depth knowledge of mechanics, design, and manufacturing, with hands-on projects that prepare you for industry challenges",
  },
  {
    icon: Building2,
    title: "Civil Engineering",
    description: "Learn to design, construct, and manage infrastructure projects with practical training and industry-focused skills",
  },
  {
    icon: Zap,
    title: "Electrical and Electronics Engineering",
    description: "Develop expertise in electrical systems, electronics, and power technology through hands-on labs and industry-oriented learning",
  },
  {
    icon: Radio,
    title: "Electronics & Communication Engineering",
    description: "Learn to design and develop electronic systems, communication networks, and embedded technologies with practical, hands-on training",
  },
  {
    icon: Wrench,
    title: "Information Technology",
    description: "Master software development, networking, and emerging technologies with practical projects to become industry-ready professionals",
  },
  {
    icon: Wrench,
    title: "Artificial Intelligence and Data Science",
    description: "Learn to develop intelligent systems, analyze data, and apply AI & machine learning techniques through hands-on projects and real-world applications",
  },
  {
    icon: Wrench,
    title: "Master of Business Administration",
    description: "Develop leadership, management, and strategic skills through industry-focused learning and real-world business exposure",
  },
];

const ProgramsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h5 className="heading-primary mb-4">Our Academic Courses</h5>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore courses that combine learning, innovation, and real-world experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.slice(0, 6).map((program) => (
            <Card
              key={program.title}
              className="group overflow-hidden transition-all hover:shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <program.icon className="h-6 w-6" />
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {program.title}
                </CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="mb-4 flex gap-4 text-sm text-muted-foreground">
                </div>
                <Link
                  to={`/courses#${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/courses">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
