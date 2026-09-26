import Image from "next/image";

export type ArtworkName = "hero" | "editor" | "githubPanel" | "bot" | "botLaptop" | "botCode" | "botRocket" | "botHover" | "botLearn" | "github" | "code" | "bolt" | "brain" | "star" | "books" | "repo" | "dashboard" | "blog" | "globe" | "mascot";

const images: Record<ArtworkName, { file: string; alt: string }> = {
  hero: { file: "main-image.png", alt: "AI developer illustration with an assistant, code editor, and GitHub project panel" },
  editor: { file: "Screenshot 2026-09-26 at 1.52.41 PM Background Removed.png", alt: "AI code workspace illustration" },
  githubPanel: { file: "Screenshot 2026-09-26 at 1.52.52 PM Background Removed.png", alt: "GitHub pull request illustration" },
  bot: { file: "Screenshot 2026-09-26 at 1.53.01 PM Background Removed.png", alt: "ByteBin robot mascot" },
  botLaptop: { file: "Screenshot 2026-09-26 at 1.53.11 PM Background Removed.png", alt: "ByteBin robot with a laptop" },
  botCode: { file: "Screenshot 2026-09-26 at 1.53.25 PM Background Removed.png", alt: "ByteBin robot coding on a laptop" },
  botRocket: { file: "Screenshot 2026-09-26 at 1.53.36 PM Background Removed.png", alt: "ByteBin robot launching a rocket" },
  botHover: { file: "Screenshot 2026-09-26 at 1.53.43 PM Background Removed.png", alt: "ByteBin robot in motion" },
  botLearn: { file: "Screenshot 2026-09-26 at 1.53.55 PM Background Removed.png", alt: "ByteBin robot exploring code" },
  github: { file: "Screenshot 2026-09-26 at 1.54.10 PM Background Removed.png", alt: "GitHub logo" },
  code: { file: "Screenshot 2026-09-26 at 1.54.18 PM Background Removed.png", alt: "Code symbol" },
  bolt: { file: "Screenshot 2026-09-26 at 1.54.24 PM Background Removed.png", alt: "Automation bolt" },
  brain: { file: "Screenshot 2026-09-26 at 1.54.29 PM Background Removed.png", alt: "AI brain icon" },
  star: { file: "Screenshot 2026-09-26 at 1.54.33 PM Background Removed.png", alt: "Star icon" },
  books: { file: "Screenshot 2026-09-26 at 1.54.40 PM Background Removed.png", alt: "Books about web development" },
  repo: { file: "Screenshot 2026-09-26 at 1.54.47 PM Background Removed.png", alt: "Repository file browser illustration" },
  dashboard: { file: "Screenshot 2026-09-26 at 1.54.53 PM Background Removed.png", alt: "Project analytics dashboard illustration" },
  blog: { file: "Screenshot 2026-09-26 at 1.55.04 PM Background Removed.png", alt: "Developer blog illustration" },
  globe: { file: "Screenshot 2026-09-26 at 1.55.10 PM Background Removed.png", alt: "Developer community globe illustration" },
  mascot: { file: "Screenshot 2026-09-26 at 1.55.18 PM Background Removed.png", alt: "ByteBin robot working at a code editor" },
};

export default function Artwork({ crop, label, className = "" }: { crop: ArtworkName; label?: string; className?: string }) {
  const image = images[crop];
  return <div className={`lm-art-sprite lm-sprite-${crop} ${className}`}>
    <Image src={`/assets/${encodeURIComponent(image.file)}`} alt={label ?? image.alt} fill sizes="(max-width: 760px) 45vw, 320px" style={{ objectFit: "contain" }} />
  </div>;
}
