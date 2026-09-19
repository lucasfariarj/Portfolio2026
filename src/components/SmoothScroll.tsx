"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

const HEADER_OFFSET = 88;

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: { offset: -HEADER_OFFSET },
    });

    return () => lenis.destroy();
  }, []);

  return children;
}
