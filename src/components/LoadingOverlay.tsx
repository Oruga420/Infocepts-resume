'use client';

import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

export default function LoadingOverlay({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div
        className={`transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
          <div className="flex flex-col items-center gap-4 text-slate-200">
            <div className="h-16 w-16 animate-spin rounded-full border-2 border-slate-700 border-t-emerald-400" />
            <span className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Loading
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
