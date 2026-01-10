import Layout from "@/components/layout/Layout";
import { TrendingUp, Users, Building, Award } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "₹24 LPA", label: "Highest Package" },
  { icon: TrendingUp, value: "₹6.5 LPA", label: "Average Package" },
  { icon: Users, value: "95%", label: "Placement Rate" },
  { icon: Building, value: "200+", label: "Companies" },
];

const companies = [
  { name: "TCS", logo: "/images/recruiters/tcs-logo.png" },
  { name: "Infosys", logo: "/images/recruiters/infosys-logo.png" },
  { name: "Wipro", logo: "/images/recruiters/wipro-logo.png" },
  { name: "Cognizant", logo: "/images/recruiters/cognizant-logo.png" },
  { name: "Capgemini", logo: "/images/recruiters/capgemini-logo-v3.jpg" },
  { name: "HCL", logo: "/images/recruiters/hcl-logo-v2.png" },
  { name: "Tech Mahindra", logo: "/images/recruiters/tech-mahindra-logo-v2.png" },
  { name: "Accenture", logo: "/images/recruiters/accenture-logo.jpg" },
  { name: "IBM", logo: "/images/recruiters/ibm-logo.png" },
  { name: "Hinduja Global Services", logo: "/images/recruiters/hgs-logo-v2.png" },
  { name: "Accurate Steel Forging", logo: "/images/recruiters/accurate-steel-logo.jpg" },
  { name: "4W TECHNOLOGIES", logo: "/images/recruiters/4w-logo.png" },
  { name: "Microsoft", logo: "/images/recruiters/microsoft-logo-v2.png" },
];

const Placements = () => (
  <Layout>
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container-custom text-center">
        <h1 className="heading-primary text-primary-foreground">Placements</h1>
        <p className="mt-4 text-lg opacity-80">Exceptional career opportunities for our campus Students</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-secondary p-6 text-center">
              <s.icon className="mx-auto mb-2 h-8 w-8 text-accent" />
              <div className="text-3xl font-bold text-primary">{s.value}</div>
              <div className="text-sm text-white">{s.label}</div>
            </div>
          ))}
        </div>

        <h2 className="heading-secondary mb-8 text-center">Our Recruiters</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {companies.map((company) => (
            <div
              key={company.name}
              className="group flex h-32 items-center justify-center rounded-xl p-4 transition-all hover:-translate-y-1 relative overflow-hidden"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-20 max-w-full object-contain filter grayscale transition-all duration-300 group-hover:filter-none opacity-100"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  e.currentTarget.nextElementSibling?.classList.add('flex');
                }}
              />
              <span className="hidden h-full w-full items-center justify-center text-center text-sm font-bold text-primary">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Placements;
