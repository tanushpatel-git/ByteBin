import { SearchBar } from "./SearchBar";
import { Breadcrumb } from "./Breadcrumb";
import { Notifications } from "./Notifications";
import { UserMenu } from "./UserMenu";
import { DeployButton } from "./DeployButton";
import { Moon } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between gap-4 h-14 px-5 bg-[#FDFCFB] border-b border-[#EAE2D9] shrink-0">
      {/* Left: Breadcrumb */}
      <Breadcrumb />

      {/* Center: Search */}
      <div className="flex-1 flex justify-center">
        <SearchBar />
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        <button
          className="flex items-center justify-center w-8 h-8 rounded-xl hover:bg-[#F3EEE8] transition-colors"
          aria-label="Toggle theme"
        >
          <Moon size={15} className="text-[#6B7280]" />
        </button>
        <Notifications />
        <DeployButton />
        <div className="w-px h-5 bg-[#EAE2D9]" />
        <UserMenu />
      </div>
    </header>
  );
}
