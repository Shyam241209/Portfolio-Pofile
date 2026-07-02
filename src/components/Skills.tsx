import { useEffect, useRef, useState } from 'react';
import {
  Monitor,
  Server,
  Database,
  Cloud,
  Wrench,
  BookOpen,
  ShieldCheck,
  GitBranch,
  Terminal,
  Rocket,
  Box,
  FileText,
  Layers,
  ArrowRight,
  Code2,
  Sparkles,
  Send,
  Zap,
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: { name: string; icon: React.ElementType }[];
  accent: string;
  borderAccent: string;
  textAccent: string;
  glowAccent: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Monitor,
    skills: [
      { name: 'HTML5', icon: Zap },
      { name: 'CSS3', icon: Zap },
      { name: 'JavaScript (ES6+)', icon: Zap },
      { name: 'React.js', icon: Zap },
      { name: 'Tailwind CSS', icon: Sparkles },
    ],
    accent: 'bg-cyan-500/10',
    borderAccent: 'border-cyan-500/20',
    textAccent: 'text-cyan-300',
    glowAccent: 'hover:shadow-cyan-500/20',
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: Terminal },
      { name: 'Express.js', icon: ArrowRight },
      { name: 'RESTful APIs', icon: Rocket },
      { name: 'JWT Authentication', icon: ShieldCheck },
    ],
    accent: 'bg-blue-500/10',
    borderAccent: 'border-blue-500/20',
    textAccent: 'text-blue-300',
    glowAccent: 'hover:shadow-blue-500/20',
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'MongoDB', icon: Layers },
      { name: 'Mongoose', icon: FileText },
      { name: 'MySQL (Basic)', icon: Database },
    ],
    accent: 'bg-emerald-500/10',
    borderAccent: 'border-emerald-500/20',
    textAccent: 'text-emerald-300',
    glowAccent: 'hover:shadow-emerald-500/20',
  },
  {
    title: 'Deployment',
    icon: Cloud,
    skills: [
      { name: 'Vercel', icon: Rocket },
      { name: 'Render', icon: Box },
    ],
    accent: 'bg-violet-500/10',
    borderAccent: 'border-violet-500/20',
    textAccent: 'text-violet-300',
    glowAccent: 'hover:shadow-violet-500/20',
  },
  {
    title: 'Tools & Workflow',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: GitBranch },
      { name: 'VS Code', icon: Code2 },
      { name: 'Postman', icon: Send },
      { name: 'Figma (Basic)', icon: Sparkles },
    ],
    accent: 'bg-sky-500/10',
    borderAccent: 'border-sky-500/20',
    textAccent: 'text-sky-300',
    glowAccent: 'hover:shadow-sky-500/20',
  },
  {
    title: 'Currently Learning',
    icon: BookOpen,
    skills: [
      { name: 'TypeScript', icon: Code2 },
      { name: 'Next.js', icon: Zap },
      { name: 'Docker', icon: Cloud },
    ],
    accent: 'bg-amber-500/10',
    borderAccent: 'border-amber-500/20 border-dashed',
    textAccent: 'text-amber-300',
    glowAccent: 'hover:shadow-amber-500/20',
  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-transparent via-navy-medium/20 to-navy-medium/50 border-t border-slate-700/30"
    >
      {/* Primary theme glow */}
      <div
        className="absolute inset-x-0 top-0 h-64 opacity-50 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle at top, rgba(56,189,248,0.16), transparent 55%)' }}
      />
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 20% 80%, rgba(168,85,247,0.12), transparent 28%), radial-gradient(circle at 85% 15%, rgba(14,165,233,0.08), transparent 22%)' }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-block text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Technologies, frameworks, and tools I use to build modern, responsive, and scalable web applications.
          </p>
          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-md p-7 transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-xl ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${catIndex * 100}ms` }}
              >
                {/* Card glow on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  style={{
                    boxShadow: `0 0 40px -10px ${category.accent.includes('cyan') ? 'rgba(6,182,212,0.15)' : category.accent.includes('blue') ? 'rgba(59,130,246,0.15)' : category.accent.includes('emerald') ? 'rgba(16,185,129,0.15)' : category.accent.includes('violet') ? 'rgba(139,92,246,0.15)' : category.accent.includes('sky') ? 'rgba(14,165,233,0.15)' : 'rgba(245,158,11,0.15)'}`,
                  }}
                />

                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-xl ${category.accent} ${category.borderAccent} border`}
                  >
                    <Icon className={`w-5 h-5 ${category.textAccent}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-medium ${category.accent} ${category.borderAccent} border ${category.textAccent} transition-all duration-300 hover:scale-105 hover:brightness-110 cursor-default`}
                    >
                      <skill.icon className="w-4 h-4" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p
          className={`text-center text-slate-500 text-sm mt-14 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Committed to continuous learning and improving my skills to build modern, efficient, and scalable web applications.
        </p>
      </div>
    </section>
  );
};

export default Skills;