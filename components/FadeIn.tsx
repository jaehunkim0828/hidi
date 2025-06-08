'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInWhenVisibleProps {
  children: ReactNode | ((inView: boolean) => ReactNode);
  y?: number;
  duration?: number;
  delay?: number;
  zIndex?: number;
  triggerOnce?: boolean;
  style?: React.CSSProperties;
}

export default function FadeInWhenVisible({
  children,
  y = 0,
  duration = 0.8,
  delay = 0,
  zIndex = 0,
  triggerOnce = true,
  style,
}: FadeInWhenVisibleProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce,
  });

  const isFunction = typeof children === 'function';

  return (
    <motion.div
      ref={ref as unknown as React.Ref<HTMLDivElement>}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration,
        delay,
        ease: 'easeInOut',
      }}
      style={{ zIndex, ...style }}
    >
      {isFunction
        ? (children as (inView: boolean) => ReactNode)(inView)
        : children}
    </motion.div>
  );
}
