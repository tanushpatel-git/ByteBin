"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface FadeInProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    delay?: number;
    yOffset?: number;
    xOffset?: number;
}

export const FadeIn = ({
    children,
    delay = 0,
    yOffset = 20,
    xOffset = 0,
    className,
    ...props
}: FadeInProps) => (
    <motion.div
        initial={{ opacity: 0, y: yOffset, x: xOffset }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.4, delay }}
        className={className}
        {...props}
    >
        {children}
    </motion.div>
);
