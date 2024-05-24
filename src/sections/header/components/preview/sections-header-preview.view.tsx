"use client";

import type { ReactNode } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

export interface SectionsHeaderPreviewViewProps {
  className?: string;
  children: ReactNode;
}

export default function SectionsHeaderPreviewView(
  props: SectionsHeaderPreviewViewProps
) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.5]);

  return (
    <motion.div className={props.className} style={{ scale: scale }}>
      {props.children}
    </motion.div>
  );
}
