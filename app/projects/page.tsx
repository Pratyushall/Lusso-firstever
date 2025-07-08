import Image from "next/image";
import Button from "../../components/button";
import { MapPin, Calendar } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Mayfair Penthouse",
      location: "Hyderabad, India",
      year: "2024",
      description:
        "A sophisticated penthouse transformation in Hyderabad featuring bespoke millwork, Italian marble, and curated art pieces. This project exemplifies modern luxury with classical undertones in India's dynamic tech capital.",
      materials: [
        "Carrara Marble",
        "Walnut Veneer",
        "Brass Fixtures",
        "Silk Wallcoverings",
        "Custom Millwork",
      ],
      images: [
        "/images/luxury-living-room.jpg",
        "/images/blue-kitchen.jpg",
        "/images/modern-living-room.jpg",
        "/images/luxury-bedroom.jpg",
        "/images/contemporary-living.jpg",
        "/images/modern-kitchen.jpg",
      ],
    },
  ];

  const project = projects[0];

  return (
    <div className="min-h-screen pt-20">
      {/* Project Header */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-light text-slate-800 mb-6">
            {project.title}
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-600 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{project.year}</span>
            </div>
          </div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main large image */}
            <div className="md:col-span-2 relative aspect-[16/9]">
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={`${project.title} main view - elegant living room with sophisticated furniture`}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Secondary images */}
            {project.images.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] group cursor-pointer"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} view ${index + 2}`}
                  fill
                  className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-3xl font-light text-slate-800 mb-6">
                Materials & Finishes
              </h3>
              <ul className="space-y-3">
                {project.materials.map((material, index) => (
                  <li
                    key={index}
                    className="text-slate-600 text-lg flex items-center"
                  >
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-4"></span>
                    {material}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-3xl font-light text-slate-800 mb-6">
                Project Details
              </h3>
              <div className="space-y-4 text-slate-600">
                <div>
                  <span className="font-medium">Duration:</span> 8 months
                </div>
                <div>
                  <span className="font-medium">Size:</span> 3,500 sq ft
                </div>
                <div>
                  <span className="font-medium">Style:</span> Contemporary
                  Luxury
                </div>
                <div>
                  <span className="font-medium">Completion:</span>{" "}
                  {project.year}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Designer */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <Image
                src="/images/minimalist-kitchen.jpg"
                alt="Interior Designer workspace - modern minimalist design"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="space-y-8">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-slate-800">
                Meet the Designer
              </h2>
              <blockquote className="text-xl text-slate-600 leading-relaxed italic">
                "Every space has a story waiting to be told. My role is to
                listen, understand, and translate dreams into tangible beauty.
                This Mayfair project represents the perfect synthesis of
                classical elegance and contemporary living—a testament to
                timeless design principles."
              </blockquote>
              <div className="pt-4">
                <p className="font-medium text-slate-800 text-lg">
                  Isabella Rossi
                </p>
                <p className="text-slate-600">Principal Designer & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-3xl md:text-4xl font-light mb-6">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how we can transform your space into something
            extraordinary.
          </p>
          <Button
            size="lg"
            className="bg-white text-slate-900 hover:bg-stone-100 transition-colors duration-300"
          >
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}
