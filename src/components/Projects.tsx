import { ExternalLink, Github, Folder, Sparkles } from 'lucide-react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectCivic from '@/assets/project-civic.jpg';
import projectPortfolio from '@/assets/project-portfolio.jpg';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Developed a full-stack e-commerce application featuring secure authentication, product management, shopping cart functionality, Stripe payments, and a polished responsive interface.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe'],
    image: projectEcommerce,
    github: 'https://github.com/Shyam241209/ecommerce',
    live: 'https://example.com/ecommerce',
  },
  {
    title: 'Civic Crowdsourcing Platform',
    description:
      'Built a civic engagement platform that allows citizens to report issues, share feedback, and connect with local government through a modern, intuitive experience.',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    image: projectCivic,
    github: 'https://github.com/Shyam241209/civic',
    live: 'https://example.com/civic',
  },
  {
    title: 'Portfolio Website',
    description:
      'Designed and developed a modern, fully responsive Full Stack Developer portfolio showcasing my skills, projects, and experience. Built with React, TypeScript, Tailwind CSS, and Vite, featuring smooth animations, a polished dark-mode UI, and a functional MERN contact form integrated with Node.js, Express.js, MongoDB Atlas, and Nodemailer.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Nodemailer'],
    image: projectPortfolio,
    github: 'https://github.com/Shyam241209/Portfolio-Pofile',
    live: 'https://YOUR-VERCEL-DOMAIN.vercel.app',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`glass-card group relative flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(0,217,255,0.18)] ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-background/40 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-neon-cyan/40 bg-background/70 text-neon-cyan transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan hover:bg-neon-cyan/10"
            aria-label={`View GitHub repository for ${project.title}`}
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-neon-cyan/40 bg-background/70 text-neon-cyan transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan hover:bg-neon-cyan/10"
            aria-label={`View live demo for ${project.title}`}
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
        <div className="absolute left-4 top-4 rounded-full border border-neon-cyan/30 bg-background/60 p-2 backdrop-blur-sm">
          <Folder className="h-5 w-5 text-neon-cyan/80" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-neon-cyan" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Featured Work</span>
        </div>
        <h3 className="mb-3 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-neon-cyan">
          {project.title}
        </h3>
        <p className="mb-5 flex-1 text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-3 py-1 text-xs font-medium text-neon-cyan transition-all duration-300 hover:-translate-y-0.5 hover:bg-neon-cyan/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3 sm:flex-row">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-4 py-2.5 text-sm font-semibold text-neon-cyan transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan hover:bg-neon-cyan/20"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-neon-cyan/40 bg-background/70 px-4 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan hover:bg-neon-cyan/10"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-neon-cyan to-neon-purple transition-transform duration-500 group-hover:scale-x-100" />
    </div>
  );
};

const Projects = () => {
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver();

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.25em] text-neon-cyan">
            <Sparkles className="h-4 w-4" />
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">My </span>
            <span className="text-primary neon-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
            A collection of full-stack projects showcasing my skills in building responsive, scalable, and user-focused web applications using modern technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Shyam241209/Portfolio-Pofile"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-purple inline-flex items-center gap-2 transition-all duration-300 hover:scale-[1.02]"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;