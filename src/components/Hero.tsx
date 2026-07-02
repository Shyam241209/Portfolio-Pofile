import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip';
import { Download, MessageCircle, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const Hero = () => {
  const [isGlowing, setIsGlowing] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'Full Stack Developer';

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 60;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(fullText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-medium text-foreground/80">Hello, It's Me</h3>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">
                <span className="text-foreground">Shyam Sundar </span>
                <span className="text-gradient">V</span>
              </h1>
            </div>

            <div className="space-y-4">
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold flex items-center gap-3 justify-center lg:justify-start flex-wrap">
                <span className="text-foreground">I'm a</span>
                <span className="text-neon-cyan min-w-[200px] inline-block">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                I am passionate about building modern, responsive, and scalable web applications. With expertise in React.js, Node.js, Express.js, and MongoDB, I create efficient solutions that deliver seamless user experiences and solve real-world problems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-neon-cyan to-neon-purple text-navy-dark font-semibold hover:scale-105 transition-transform duration-300 glow-cyan"
                asChild
              >
                <a href="#contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Hire Me
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-navy-dark font-semibold transition-all duration-300"
                asChild
              >
                <a href="/Shyam_Resume.pdf" download="Shyam_Resume.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 justify-center lg:justify-start">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://github.com/Shyam241209/Portfolio-Pofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="social-icon github-pop text-foreground"
                  >
                    <Github />
                  </a>
                </TooltipTrigger>
                <TooltipContent>GitHub</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.linkedin.com/in/Shyam241209"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="social-icon linkedin-glow text-foreground"
                  >
                    <Linkedin />
                  </a>
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://instagram.com/Shyam241209"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="social-icon instagram-bloom text-foreground"
                  >
                    <Instagram />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Instagram</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://twitter.com/Shyam241209"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="social-icon twitter-fly text-foreground"
                  >
                    <Twitter />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Twitter</TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative group">
              <div
                className={`relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 cursor-pointer transition-all duration-500 ${
                  isGlowing
                    ? 'border-neon-purple glow-purple scale-105'
                    : 'border-neon-cyan glow-cyan'
                } animate-float`}
                onClick={() => setIsGlowing(!isGlowing)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 animate-gradient-shift"></div>
                <img
                  src={profileImage}
                  alt="Shyam Sundar V"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Pulse Rings on Click */}
              {isGlowing && (
                <>
                  <div className="absolute inset-0 rounded-full border-4 border-neon-purple animate-ping opacity-75"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-neon-cyan animate-ping opacity-50" style={{ animationDelay: '0.3s' }}></div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
