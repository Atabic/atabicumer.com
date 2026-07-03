import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { isExternalUrl } from "@/lib/utils";
import Link from "next/link";

const tooltipContentClass =
  "rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]";
const dockIconButtonClass =
  "rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors";

// Blog is kept in DATA.navbar and stays live at /blog, just hidden from the dock for now.
const dockNavbarItems = DATA.navbar.filter((item) => item.href !== "/blog");

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5">
        {dockNavbarItems.map((item) => {
          const isExternal = isExternalUrl(item.href);
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                {isExternal ? (
                  <a
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DockIcon className={dockIconButtonClass}>
                      <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
                    </DockIcon>
                  </a>
                ) : (
                  <Link href={item.href} aria-label={item.label}>
                    <DockIcon className={dockIconButtonClass}>
                      <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
                    </DockIcon>
                  </Link>
                )}
              </TooltipTrigger>
              <TooltipContent
                side="top"
                sideOffset={8}
                className={tooltipContentClass}
              >
                <p>{item.label}</p>
                <TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          );
        })}
        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social], index) => {
            const IconComponent = social.icon;
            return (
              <Tooltip key={`social-${name}-${index}`}>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    aria-label={name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DockIcon className={dockIconButtonClass}>
                      <IconComponent className="size-full rounded-sm overflow-hidden object-contain" />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className={tooltipContentClass}
                >
                  <p>{name}</p>
                  <TooltipArrow className="fill-primary" />
                </TooltipContent>
              </Tooltip>
            );
          })}
        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className={dockIconButtonClass}>
              <ModeToggle className="size-full cursor-pointer" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className={tooltipContentClass}
          >
            <p>Theme</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </Dock>
    </div>
  );
}
