'use client';

import { useCallback } from "react";

export default function DownloadPdfButton() {
  const handleClick = useCallback(() => {
    if (typeof window !== "undefined") {
      window.print();
    }
  }, []);

  return (
    <button
      type="button"
      onClick={handleClick}
      className="print-hide inline-flex h-12 items-center justify-center rounded-2xl border-2 border-[#014f86] bg-white px-6 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-[#014f86] hover:text-white"
    >
      Download as PDF
    </button>
  );
}
