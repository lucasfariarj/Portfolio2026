import type { Locale } from "@/data/content";

const STAR_ROWS = [
  { y: 1.2, count: 6 },
  { y: 2.6, count: 5 },
  { y: 4.0, count: 6 },
  { y: 5.4, count: 5 },
  { y: 6.8, count: 6 },
];

function FlagBR({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 15" className={className} aria-hidden>
      <rect width="20" height="15" fill="#009c3b" />
      <polygon points="10,1.5 18.5,7.5 10,13.5 1.5,7.5" fill="#ffdf00" />
      <circle cx="10" cy="7.5" r="3.3" fill="#002776" />
      <path
        d="M6.9 6.1 A 4 4 0 0 1 13.2 8.6"
        stroke="#ffffff"
        strokeWidth="0.4"
        fill="none"
      />
    </svg>
  );
}

function FlagUS({ className }: { className?: string }) {
  const stripeHeight = 15 / 13;
  const cantonWidth = 8;
  const cantonHeight = stripeHeight * 7;

  return (
    <svg viewBox="0 0 20 15" className={className} aria-hidden>
      <rect width="20" height="15" fill="#ffffff" />
      {Array.from({ length: 13 }).map((_, i) =>
        i % 2 === 0 ? (
          <rect
            key={i}
            y={i * stripeHeight}
            width="20"
            height={stripeHeight}
            fill="#b22234"
          />
        ) : null
      )}
      <rect width={cantonWidth} height={cantonHeight} fill="#3c3b6e" />
      {STAR_ROWS.map((row, rowIndex) =>
        Array.from({ length: row.count }).map((_, i) => {
          const gap = cantonWidth / (row.count + 1);
          return (
            <circle
              key={`${rowIndex}-${i}`}
              cx={gap * (i + 1)}
              cy={row.y}
              r="0.28"
              fill="#ffffff"
            />
          );
        })
      )}
    </svg>
  );
}

export default function FlagIcon({
  locale,
  className = "h-3.5 w-5",
}: {
  locale: Locale;
  className?: string;
}) {
  const Flag = locale === "pt" ? FlagBR : FlagUS;
  return (
    <span
      className={`inline-block overflow-hidden rounded-[3px] ring-1 ring-white/10 ${className}`}
    >
      <Flag className="block h-full w-full" />
    </span>
  );
}
