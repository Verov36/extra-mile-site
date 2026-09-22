const promises = [
  "Nothing sent without your OK",
  "A responsive phone support line",
  "Your data stays local",
  "Month to month, no contract",
];

export function Promises({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2.5 ${className}`}>
      {promises.map((p) => (
        <li
          key={p}
          className="flex items-center gap-2 rounded border-2 border-pine bg-pine-soft px-3 py-1.5 text-[0.95rem] font-semibold text-pine"
        >
          <Check />
          {p}
        </li>
      ))}
    </ul>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`h-4 w-4 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}
