import { Palette, Globe, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually stunning interfaces that enhance user experience and engagement.',
  },
  {
    icon: Globe,
    title: 'Web Design',
    description: 'Building responsive, modern websites with cutting-edge technologies and best practices.',
  },
  {
    icon: Smartphone,
    title: 'App Design',
    description: 'Developing mobile-first applications with seamless functionality and beautiful design.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">My </span>
            <span className="text-neon-cyan">Services</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border-2 border-neon-cyan/20 hover:border-neon-cyan transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-cyan"></div>

              <div className="relative z-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-navy-dark" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-neon-cyan transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-muted-foreground">
                  {service.description}
                </p>

                <div className="pt-2">
                  <span className="text-neon-cyan font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    Learn More
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </span>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-neon-purple to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
