/** Vector rendering of the product's CSS plate, cutlery and receipt mark. */
export function BrandMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 40"
      width="30"
      height="30"
      fill="none"
    >
      <circle cx="16" cy="23" r="11" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M12 8v24M9 8v8h6V8M28 9l-2 23"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <rect
        x="18"
        y="8"
        width="14"
        height="22"
        rx="2.5"
        fill="currentColor"
        transform="rotate(8 25 19)"
      />
      <path
        d="m22 14 7 1m-8 4 7 1m-8 4 6 1"
        stroke="#cfed85"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
