export default function SocialLinks({
  links,
}: {
  links: { label: string; ariaLabel: string }[];
}) {
  return (
    <div className="flex items-center gap-2">
      {links.map((social) => (
        <a
          key={social.ariaLabel}
          href="#"
          aria-label={social.ariaLabel}
          className="flex h-6 w-6 items-center justify-center rounded-full border border-[#e3e5ef] text-[8px] font-bold text-[#65708f] transition hover:border-[#6657ee] hover:text-[#6657ee]"
        >
          {social.label}
        </a>
      ))}
    </div>
  );
}