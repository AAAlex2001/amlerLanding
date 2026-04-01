import cn from "classnames";
import { TextLink, type TextLinkVariant } from "@/shared/ui";
import styles from "./NavLinks.module.scss";

export type NavLinkItem = { href: string; label: string };

export type NavLinksProps = {
  items: readonly NavLinkItem[];
  className?: string;
  listClassName?: string;
  ariaLabel?: string;
  linkVariant?: TextLinkVariant;
};

export function NavLinks({
  items,
  className,
  listClassName,
  ariaLabel,
  linkVariant = "header",
}: NavLinksProps) {
  return (
    <nav className={className} aria-label={ariaLabel}>
      <ul className={cn(styles.list, listClassName)}>
        {items.map((item) => (
          <li key={item.href}>
            <TextLink href={item.href} variant={linkVariant}>
              {item.label}
            </TextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
