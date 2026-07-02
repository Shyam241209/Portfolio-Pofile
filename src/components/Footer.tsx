import { Heart, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip';

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-neon-cyan/20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="https://github.com/Shyam241209" target="_blank" rel="noopener noreferrer" className="social-icon github-pop text-foreground" aria-label="GitHub">
                  <Github />
                </a>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a href="https://www.linkedin.com/in/Shyam241209" target="_blank" rel="noopener noreferrer" className="social-icon linkedin-glow text-foreground" aria-label="LinkedIn">
                  <Linkedin />
                </a>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a href="https://instagram.com/Shyam241209" target="_blank" rel="noopener noreferrer" className="social-icon instagram-bloom text-foreground" aria-label="Instagram">
                  <Instagram />
                </a>
              </TooltipTrigger>
              <TooltipContent>Instagram</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a href="https://twitter.com/Shyam241209" target="_blank" rel="noopener noreferrer" className="social-icon twitter-fly text-foreground" aria-label="Twitter">
                  <Twitter />
                </a>
              </TooltipTrigger>
              <TooltipContent>Twitter</TooltipContent>
            </Tooltip>
          </div>

          <p className="text-sm text-muted-foreground">© 2025 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
