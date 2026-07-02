import { useMemo, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Instagram, Sparkles, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

type FormState = typeof initialForm;

const Contact = () => {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = (values: FormState) => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!values.name.trim()) nextErrors.name = 'Full name is required.';
    if (!values.email.trim()) nextErrors.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = 'Please enter a valid email address.';
    if (!values.subject.trim()) nextErrors.subject = 'A subject is required.';
    if (!values.message.trim()) nextErrors.message = 'Please include a short message.';

    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      toast.error('Please fix the highlighted fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const { data } = await axios.post('http://localhost:5000/api/contact', {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });

      if (!data?.ok) throw new Error(data?.error || 'Failed to send message');

      toast.success('Message sent successfully!', {
        description: 'Thanks for reaching out. I will get back to you soon.',
      });
      setFormData(initialForm);
      setErrors({});
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error('Contact submit error:', err);
      toast.error('Failed to send message', { description: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const contactItems = useMemo(
    () => [
      {
        href: 'mailto:shyamsundar24007@gmail.com',
        label: 'Email',
        value: 'shyamsundar24007@gmail.com',
        icon: Mail,
      },
      {
        href: 'tel:+919342761272',
        label: 'Phone',
        value: '+91 93427 61272',
        icon: Phone,
      },
      {
        label: 'Location',
        value: 'Hosur, India',
        icon: MapPin,
      },
    ],
    []
  );

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-navy-medium/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Contact </span>
            <span className="text-neon-cyan">Me</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
          <p className="text-lg sm:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            I&apos;m open to internships, full-time opportunities, and freelance projects. Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-card border-2 border-neon-cyan/20 hover:border-neon-cyan transition-all duration-300 space-y-6 shadow-[0_0_30px_rgba(0,217,255,0.08)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple text-navy-dark">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Let&apos;s Connect</h3>
                  <p className="text-sm text-muted-foreground">Recruiters, teams, and founders are welcome.</p>
                </div>
              </div>

              <div className="space-y-3">
                {contactItems.map(({ href, label, value, icon: Icon }) => {
                  const content = (
                    <div className="flex items-center gap-4 rounded-xl bg-navy-light/50 p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-navy-light">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple text-navy-dark transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
                        <div className="text-sm font-medium text-foreground">{value}</div>
                      </div>
                    </div>
                  );

                  if (href) {
                    return (
                      <a
                        key={label}
                        href={href}
                        className="group block rounded-xl border border-transparent transition-all duration-300 hover:border-neon-cyan/40 hover:shadow-[0_0_25px_rgba(0,217,255,0.12)]"
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div key={label} className="rounded-xl border border-transparent transition-all duration-300">
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-neon-cyan/20 pt-6">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-foreground">Social Profiles</h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/shyamsundarv2412"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit LinkedIn profile"
                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-neon-cyan/50 text-neon-cyan transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan hover:bg-neon-cyan/10 glow-cyan"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/Shyam241209/Portfolio-Pofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit GitHub profile"
                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-neon-cyan/50 text-neon-cyan transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan hover:bg-neon-cyan/10 glow-cyan"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/_._.shyam._.24___/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Instagram profile"
                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-neon-cyan/50 text-neon-cyan transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan hover:bg-neon-cyan/10 glow-cyan"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border-2 border-neon-cyan/20 bg-card p-6 sm:p-8 shadow-[0_0_30px_rgba(0,217,255,0.08)]" noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Johnson"
                    required
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className="border-neon-cyan/30 bg-navy-light text-foreground focus:border-neon-cyan"
                  />
                  {errors.name && <p id="name-error" className="text-sm text-rose-400">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    required
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className="border-neon-cyan/30 bg-navy-light text-foreground focus:border-neon-cyan"
                  />
                  {errors.email && <p id="email-error" className="text-sm text-rose-400">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project collaboration / Internship / Freelance"
                  required
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  className="border-neon-cyan/30 bg-navy-light text-foreground focus:border-neon-cyan"
                />
                {errors.subject && <p id="subject-error" className="text-sm text-rose-400">{errors.subject}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your idea, role, or project requirements..."
                  rows={6}
                  required
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="resize-none border-neon-cyan/30 bg-navy-light text-foreground focus:border-neon-cyan"
                />
                {errors.message && <p id="message-error" className="text-sm text-rose-400">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple text-navy-dark font-semibold transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(0,217,255,0.22)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="h-5 w-5" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
