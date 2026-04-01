import type { CryptoGlyphSize } from "./types";

export type EthereumGlyphProps = {
  className?: string;
  size?: CryptoGlyphSize;
  disabled?: boolean;
};

export function EthereumGlyph({
  className,
  size = 20,
  disabled = false,
}: EthereumGlyphProps) {
  if (size === 40) {
    return (
      <svg
        className={className}
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M0 4C0 1.79086 1.79086 0 4 0H36C38.2091 0 40 1.79086 40 4V36C40 38.2091 38.2091 40 36 40H4C1.79086 40 0 38.2091 0 36V4Z"
          fill="white"
          fillOpacity={0.15}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.1621 20.109L20.124 10L26.086 20.109L20.124 23.0373L14.1621 20.109ZM20.124 29.9901L14.1621 20.9595L20.124 24.2473L26.086 20.9595L20.124 29.9901Z"
          fill="white"
        />
      </svg>
    );
  }

  const bgOp = disabled ? 0.05 : 0.15;
  const fgOp = disabled ? 0.15 : 1;

  return (
    <svg
      className={className}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M0 3.33333C0 1.49238 1.49238 0 3.33333 0H16.6667C18.5076 0 20 1.49238 20 3.33333V16.6667C20 18.5076 18.5076 20 16.6667 20H3.33333C1.49238 20 0 18.5076 0 16.6667V3.33333Z"
        fill="white"
        fillOpacity={bgOp}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.08203 10.0545L10.063 5L13.044 10.0545L10.063 11.5187L7.08203 10.0545ZM10.063 14.995L7.08203 10.4797L10.063 12.1237L13.044 10.4797L10.063 14.995Z"
        fill="white"
        fillOpacity={fgOp}
      />
    </svg>
  );
}
