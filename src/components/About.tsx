import profileImage from '@/assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-navy-medium/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end lg:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden border-2 border-neon-cyan/30 group-hover:border-neon-purple/50 transition-all duration-500">
                <img
                  src={profileImage}
                  alt="About Shyam"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 text-center lg:text-left lg:order-1">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                <span className="text-foreground">About </span>
                <span className="text-neon-cyan">Me</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto lg:mx-0 rounded-full"></div>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
              <p>
                I am a passionate Full Stack Developer with expertise in building responsive, scalable, and user-friendly web applications using React.js, Node.js, Express.js, MongoDB, JavaScript, HTML, and CSS.
              </p>
              <p>
                I focus on developing efficient solutions, writing clean and maintainable code, and creating seamless user experiences. Through hands-on projects and continuous learning, I strive to stay updated with modern web technologies and industry best practices.
              </p>
              <p>
                My goal is to contribute to innovative software solutions, solve real-world problems, and grow as a software developer while delivering impactful digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
