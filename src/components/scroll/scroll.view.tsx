"use client";

import type { ReactNode } from "react";

import { ReactLenis } from "@studio-freight/react-lenis";

export interface ScrollViewProps {
  className?: string;
  children: ReactNode;
}

export default function ScrollView(props: ScrollViewProps) {
  return <ReactLenis root>{props.children}</ReactLenis>;
}
