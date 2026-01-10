import Layout from "@/components/layout/Layout";
import { Award, Users, Calendar, MapPin, CheckCircle, Target, Eye, Heart, BookOpen, icons } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    { icon: Target, title: "Excellence", description: "Striving for the highest standards in education and research." },
    { icon: Heart, title: "Integrity", description: "Upholding ethical practices and academic honesty in all endeavors." },
    { icon: CheckCircle, title: "Innovation", description: "Fostering creativity and entrepreneurial thinking to solve real-world problems." },
    { icon: Eye, title: "Inclusivity", description: "Creating a welcoming environment where every student can thrive." },
  ];

  const facilities = [
    { title: "Advanced Laboratories", description: "State-of-the-art labs for practical hands-on learning.", icon: "FlaskConical", image: "/images/gallery/computer-lab.jpg" },
    { title: "Central Library", description: "Extensive collection of books, journals, and digital resources.", icon: "BookOpen", image: "/images/gallery/library.jpg" },
    { title: "Sports Complex", description: "Excellent facilities for indoor and outdoor sports.", icon: "Trophy", image: "/images/about-sports.jpg" },
    { title: "Modern Hostels", description: "Safe and comfortable residential facilities for students.", icon: "Home", image: "/images/gallery/main-block.jpg" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-90 z-10" />
        {/* Visual Suggestion: Background Image */}
        <div className="absolute inset-0 bg-[url('/images/campus-hero-placeholder.jpg')] bg-cover bg-center opacity-30 grayscale" />

        <div className="container-custom relative z-20 text-center">
          <h1 className="heading-primary text-primary-foreground mb-6">
            Shaping Engineering Excellence
          </h1>
          <p className="mx-auto max-w-2xl text-lg opacity-90 text-balance">
            Bhajarang Engineering College stands as a beacon of quality education, nurturing future-ready engineers specifically designed for the global industry.
          </p>
        </div>
      </section>

      {/* Legacy & Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="heading-secondary text-primary">A Legacy of Innovation</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Established in 2001, Bhajarang Engineering College has evolved into a premier institution for technical education. Our journey is defined by a relentless commitment to academic rigor and holistic development.
                </p>
                <p>
                  We believe in empowering students not just with theoretical knowledge, but with the practical skills and ethical grounding needed to excel in a rapidly changing world. Our continued growth is a testament to our dedication to excellence.
                </p>
              </div>

              {/* Affiliations Bar */}
              <div className="pt-6 border-t mt-8">
                <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Accredited & Affiliated With</p>
                <div className="flex flex-wrap gap-6 items-center text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="font-medium">AICTE Approved</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-accent" />
                    <span className="font-medium">Anna University Affiliated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="font-medium">NBA Accredited</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Suggestion: Main Administration Block / Iconic Building */}
            <div className="relative h-[400px] overflow-hidden rounded-2xl bg-muted shadow-xl border border-border/50 group">
              <img src="/images/about-main.jpg" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Bhajarang Engineering College Campus" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 text-white text-lg font-semibold">
                Our Sprawling Green Campus
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-16 text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { icon: Calendar, value: "20+", label: "Years of Excellence" },
              { icon: Users, value: "500+", label: "Students Enrolled" },
              { icon: Award, value: "Top Tier", label: "NBA Accredited" },
              { icon: MapPin, value: "25 Acres", label: "Green Campus" },
            ].map((s) => (
              <div key={s.label} className="text-center group p-4 rounded-xl transition-colors hover:bg-white/5">
                <s.icon className="mx-auto mb-4 h-10 w-10 text-accent transition-transform group-hover:scale-110" />
                <div className="text-3xl font-bold mb-1">{s.value}</div>
                <div className="text-sm opacity-80 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-t-4 border-t-primary shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 md:p-10 text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  "To be a globally recognized center of excellence in engineering and management education, nurturing innovative professionals who contribute to sustainable development and societal progress."
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-secondary shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 md:p-10 text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  "To provide high-quality technical education through a robust academic framework. We are committed to fostering a culture of research, ethical leadership, and continuous learning to prepare students for the specialized challenges of the future."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Campus Highlights (Infrastructure) */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/campus-life-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70" /> {/* Dark overlay for readability */}

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4 text-white">Campus Life & Facilities</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              A holistic learning environment featuring top-tier infrastructure designed to enhance the academic and personal growth of every student.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {facilities.map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl bg-background border shadow-sm hover:shadow-md transition-all">
                {/* Image or Placeholder */}
                <div className="h-48 bg-muted flex items-center justify-center text-center border-b relative overflow-hidden">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <>
                      <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold z-10 p-4">
                        Image: {item.title}
                      </span>
                      <div className="absolute inset-0 bg-secondary/5 group-hover:bg-secondary/10 transition-colors" />
                    </>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <h2 className="heading-secondary mb-12 text-center text-white">Our Core Values</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <v.icon className="mx-auto h-12 w-12 text-accent mb-6" />
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
