import { Library, Wifi, Home, Dumbbell, Utensils, Bus, FlaskConical, Presentation, ComputerIcon } from "lucide-react";
import libraryImg from "@/assets/library.jpg";
import hostelImg from "@/assets/hostel.jpg";
import transportImg from "@/assets/transport.jpg";
import laboratoryImg from "@/assets/laboratory.jpg";
import auditoriumImg from "@/assets/auditorium.jpg";

const facilities = [
  {
    icon: Library,
    title: "Library",
    description: "A well-established library supporting academic learning and research with a wide collection of books, journals, and digital resources",
    image: libraryImg,
  },
  {
    icon: ComputerIcon,
    title: "Laboratories",
    description: "State-of-the-art laboratories equipped with modern apparatus for practical learning and research experiments",
    image: laboratoryImg,
  },
  {
    icon: Home,
    title: "Hostel",
    description: "Separate hostels for boys and girls with a safe, comfortable, and student-friendly living environment",
    image: hostelImg,
  },
  {
    icon: Bus,
    title: "Transport",
    description: "A fleet of college buses ensures safe and convenient transportation for students and staff from various locations",
    image: transportImg,
  },
  {
    icon: Presentation,
    title: "Auditorium",
    description: "A spacious, well-equipped auditorium designed for seminars, conferences, cultural events, and academic programs",
    image: auditoriumImg,
  },
];

const FacilitiesSection = () => {
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h3 className="heading-primary mb-4">Campus Facilities</h3>
          <p className="mx-auto max-w-2xl text-lg text-white">
            Our campus is equipped with modern facilities to ensure a comfortable
            and enriching experience for all students.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="group overflow-hidden rounded-xl bg-background shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="mb-5 flex items-center gap-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <facility.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-muted-foreground">
                    {facility.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
