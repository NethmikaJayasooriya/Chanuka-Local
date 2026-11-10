export function GlobeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

export function UkFlag({ className = "h-3.5 w-5" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center overflow-hidden rounded-[3px] shadow-2xs shrink-0 ring-1 ring-black/10 ${className}`}>
      <svg viewBox="0 0 60 36" className="h-full w-full">
        <clipPath id="uk-clip">
          <rect width="60" height="36" />
        </clipPath>
        <g clipPath="url(#uk-clip)">
          <path d="M0 0h60v36H0z" fill="#012169" />
          <path d="m0 0 60 36m0-36L0 36" stroke="#fff" strokeWidth="6" />
          <path d="m0 0 60 36m0-36L0 36" stroke="#C8102E" strokeWidth="3.6" />
          <path d="M30 0v36M0 18h60" stroke="#fff" strokeWidth="10" />
          <path d="M30 0v36M0 18h60" stroke="#C8102E" strokeWidth="6" />
        </g>
      </svg>
    </span>
  );
}

export function UsFlag({ className = "h-3.5 w-5" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center overflow-hidden rounded-[3px] shadow-2xs shrink-0 ring-1 ring-black/10 ${className}`}>
      <svg viewBox="0 0 60 36" className="h-full w-full">
        <rect width="60" height="36" fill="#B22234" />
        <path d="M0 5.5h60M0 11.1h60M0 16.6h60M0 22.2h60M0 27.7h60M0 33.2h60" stroke="#fff" strokeWidth="2.7" />
        <rect width="24" height="19.4" fill="#3C3B6E" />
        <circle cx="6" cy="5" r="1.2" fill="#fff" />
        <circle cx="12" cy="5" r="1.2" fill="#fff" />
        <circle cx="18" cy="5" r="1.2" fill="#fff" />
        <circle cx="9" cy="9.7" r="1.2" fill="#fff" />
        <circle cx="15" cy="9.7" r="1.2" fill="#fff" />
        <circle cx="6" cy="14.4" r="1.2" fill="#fff" />
        <circle cx="12" cy="14.4" r="1.2" fill="#fff" />
        <circle cx="18" cy="14.4" r="1.2" fill="#fff" />
      </svg>
    </span>
  );
}

export function AusFlag({ className = "h-3.5 w-5" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center overflow-hidden rounded-[3px] shadow-2xs shrink-0 ring-1 ring-black/10 ${className}`}>
      <svg viewBox="0 0 60 36" className="h-full w-full">
        <rect width="60" height="36" fill="#00008B" />
        {/* Canton UK */}
        <g transform="scale(0.5)">
          <path d="M0 0h60v36H0z" fill="#012169" />
          <path d="m0 0 60 36m0-36L0 36" stroke="#fff" strokeWidth="6" />
          <path d="m0 0 60 36m0-36L0 36" stroke="#C8102E" strokeWidth="3.6" />
          <path d="M30 0v36M0 18h60" stroke="#fff" strokeWidth="10" />
          <path d="M30 0v36M0 18h60" stroke="#C8102E" strokeWidth="6" />
        </g>
        {/* Southern Cross stars */}
        <circle cx="45" cy="8" r="1.8" fill="#fff" />
        <circle cx="52" cy="14" r="1.8" fill="#fff" />
        <circle cx="45" cy="27" r="2.2" fill="#fff" />
        <circle cx="39" cy="18" r="1.8" fill="#fff" />
        <circle cx="48" cy="20" r="1.2" fill="#fff" />
        {/* Commonwealth star */}
        <circle cx="15" cy="27" r="3.2" fill="#fff" />
      </svg>
    </span>
  );
}

export function CanadaFlag({ className = "h-3.5 w-5" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center overflow-hidden rounded-[3px] shadow-2xs shrink-0 ring-1 ring-black/10 ${className}`}>
      <svg viewBox="0 0 60 36" className="h-full w-full">
        <rect width="15" height="36" fill="#FF0000" />
        <rect x="15" width="30" height="36" fill="#FFFFFF" />
        <rect x="45" width="15" height="36" fill="#FF0000" />
        {/* Stylized Maple leaf */}
        <path
          d="M30 7l1.8 4.2 3.8-1.5-1 4.5 4.2 1.2-3.2 2.8 2.2 4.2-4.5-1-1.3 4.2h-4l-1.3-4.2-4.5 1 2.2-4.2-3.2-2.8 4.2-1.2-1-4.5 3.8 1.5z"
          fill="#FF0000"
        />
        <rect x="29.2" y="25" width="1.6" height="5" fill="#FF0000" />
      </svg>
    </span>
  );
}

export function NzFlag({ className = "h-3.5 w-5" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center overflow-hidden rounded-[3px] shadow-2xs shrink-0 ring-1 ring-black/10 ${className}`}>
      <svg viewBox="0 0 60 36" className="h-full w-full">
        <rect width="60" height="36" fill="#00247D" />
        {/* Canton UK */}
        <g transform="scale(0.5)">
          <path d="M0 0h60v36H0z" fill="#012169" />
          <path d="m0 0 60 36m0-36L0 36" stroke="#fff" strokeWidth="6" />
          <path d="m0 0 60 36m0-36L0 36" stroke="#CC142B" strokeWidth="3.6" />
          <path d="M30 0v36M0 18h60" stroke="#fff" strokeWidth="10" />
          <path d="M30 0v36M0 18h60" stroke="#CC142B" strokeWidth="6" />
        </g>
        {/* Southern Cross stars (Red with white border) */}
        <circle cx="45" cy="8" r="2" fill="#fff" />
        <circle cx="45" cy="8" r="1.3" fill="#CC142B" />
        <circle cx="52" cy="14" r="2" fill="#fff" />
        <circle cx="52" cy="14" r="1.3" fill="#CC142B" />
        <circle cx="45" cy="27" r="2.4" fill="#fff" />
        <circle cx="45" cy="27" r="1.6" fill="#CC142B" />
        <circle cx="39" cy="18" r="1.8" fill="#fff" />
        <circle cx="39" cy="18" r="1.1" fill="#CC142B" />
      </svg>
    </span>
  );
}


export function UaeFlag({ className = "h-3.5 w-5" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center overflow-hidden rounded-[3px] shadow-2xs shrink-0 ring-1 ring-black/10 ${className}`}>
      <svg viewBox="0 0 60 30" className="h-full w-full">
        <path d="M0 0h60v10H0z" fill="#00732F" />
        <path d="M0 10h60v10H0z" fill="#fff" />
        <path d="M0 20h60v10H0z" fill="#000" />
        <path d="M0 0h15v30H0z" fill="#FF0000" />
      </svg>
    </span>
  );
}

export function SgFlag({ className = "h-3.5 w-5" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center overflow-hidden rounded-[3px] shadow-2xs shrink-0 ring-1 ring-black/10 ${className}`}>
      <svg viewBox="0 0 54 36" className="h-full w-full">
        <path d="M0 0h54v18H0z" fill="#EF3340" />
        <path d="M0 18h54v18H0z" fill="#fff" />
        <circle cx="11" cy="9" r="6" fill="#fff" />
        <circle cx="13.2" cy="9" r="6" fill="#EF3340" />
        <g fill="#fff">
          <circle cx="17" cy="5.2" r="1" />
          <circle cx="20.2" cy="7.4" r="1" />
          <circle cx="19" cy="11.2" r="1" />
          <circle cx="15" cy="11.2" r="1" />
          <circle cx="13.8" cy="7.4" r="1" />
        </g>
      </svg>
    </span>
  );
}

export function CountryFlagIcon({ slug, className = "h-3.5 w-5" }: { slug: string; className?: string }) {
  switch (slug) {
    case "uk":
    case "united-kingdom":
      return <UkFlag className={className} />;
    case "usa":
    case "united-states":
      return <UsFlag className={className} />;
    case "australia":
      return <AusFlag className={className} />;
    case "canada":
      return <CanadaFlag className={className} />;
    case "new-zealand":
      return <NzFlag className={className} />;
    case "uae":
      return <UaeFlag className={className} />;
    case "singapore":
      return <SgFlag className={className} />;
    default:
      return <GlobeIcon className="h-4 w-4 text-accent" />;
  }
}

export function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function SparkleIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
    </svg>
  );
}

export function BoltIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export function MailIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
