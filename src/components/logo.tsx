export function MomentlyLogo({
  className = "w-8 h-8",
}: {
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Rounded square background */}
      <rect width="40" height="40" rx="10" fill="#c8ff00" />
      {/* Stylized M */}
      <path
        d="M10 30V14l5.5 8.5L20 14l4.5 8.5L30 14v16"
        stroke="#0a0a0a"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
