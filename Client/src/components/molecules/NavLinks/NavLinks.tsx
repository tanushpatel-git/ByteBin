export default function NavLinks({
  links,
  activeIndex = 0,
  variant = "header",
}: {
  links: string[];
  activeIndex?: number;
  variant?: "header" | "footer";
}) {
  if (variant === "footer") {
    return (
      <nav className="flex gap-7 text-[9px] text-[#65708f]">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
      </nav>
    );
  }

  return (
    <nav className="hidden items-center gap-9 md:flex">
      {links.map((item, index) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className={`relative text-[12px] font-medium ${
            index === activeIndex ? "text-[#5d50ed]" : "text-[#273463]"
          }`}
        >
          {item}
          {index === activeIndex && (
            <span className="absolute -bottom-4 left-0 h-[2px] w-full bg-[#6556f3]" />
          )}
        </a>
      ))}
    </nav>
  );
}