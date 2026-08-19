import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

const items = [
  {
    label: 'Email',
    value: 'iamsaadrandhawa@gmail.com',
    href: 'mailto:saadrandhawa03@gmail.com',
    icon: <Mail className="w-5 h-5" />,
  },
  {
    label: 'Phone',
    value: '+92 345 0450266',
    href: 'tel:+923450450266',
    icon: <Phone className="w-5 h-5" />,
  },
  {
    label: 'Location',
    value: 'Tehsil Shahkot, Punjab, Pakistan',
    href: null,
    icon: <MapPin className="w-5 h-5" />,
  },
];

const ContactInfo = () => {
  return (
    <div className="space-y-5">
      <h3 className="text-lg font-semibold text-white">Contact details</h3>
      <p className="text-sm text-slate-400 -mt-2">
        Available for freelance projects and full-time opportunities.
      </p>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-accent/30 transition-colors duration-200"
          >
            <div className="shrink-0 w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-accent">
              {item.icon}
            </div>
            <div className="min-w-0">
              <p className="text-xs text-slate-500">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm text-slate-200 hover:text-accent transition-colors duration-200 inline-flex items-center group"
                >
                  {item.value}
                  <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ) : (
                <p className="text-sm text-slate-200">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-5 border-t border-white/[0.06]">
        <p className="text-xs text-slate-500 mb-3">Connect with me</p>
        <div className="flex gap-3">
          <a
            href="https://github.com/iamsaadrandhawa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-300 hover:border-accent/40 hover:text-accent transition-colors duration-200"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/iamsaadrandhawa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-300 hover:border-accent/40 hover:text-accent transition-colors duration-200"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
