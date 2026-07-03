import { Badge } from "@/components/ui/badge";
import { cn, isExternalUrl } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  const isExternal = !!href && isExternalUrl(href);

  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 hover:ring-muted transition-all duration-200",
        className
      )}
    >
      {(video || image) && (
        <div className="relative shrink-0">
          <Link
            href={href || "#"}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="block"
          >
            {video ? (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
                className="w-full h-40 object-cover object-top"
              />
            ) : (
              <Image
                src={image!}
                alt={title}
                width={500}
                height={300}
                className="w-full h-40 object-cover object-top"
              />
            )}
          </Link>
          {links && links.length > 0 && (
            <div className="absolute top-2 right-2 flex flex-wrap gap-2">
              {links.map((link, idx) => (
                <Link
                  href={link.href}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Badge
                    className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                    variant="default"
                  >
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-0.5">
            <h3 className="font-semibold text-base">{title}</h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          {href && (
            <Link
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm shrink-0"
              aria-label={`Open ${title}`}
            >
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          )}
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto pt-1">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
