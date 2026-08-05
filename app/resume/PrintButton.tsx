"use client";

export default function PrintButton() {
  return (
    <button onClick={() => window.print()} className="btn-ghost">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.7 8V4.5h10.6V8m0 4.5h1.9M5.2 8h13.6c1 0 1.9.8 1.9 1.9v5.6h-3.4v4H6.7v-4H3.3V9.9C3.3 8.8 4.2 8 5.2 8Z"
        />
      </svg>
      Print this page
    </button>
  );
}
