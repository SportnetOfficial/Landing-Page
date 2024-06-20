"use client"
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface Props {
    children: React.ReactNode;
    width?: "fit-content" | "full";
}

export const Reveal: React.FC<Props> = ({ children, width = "full" }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = React.useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(node);
                }
            },
            { threshold: 0.1 } // Adjust the threshold as needed
        );

        observer.observe(node);

        return () => {
            observer.unobserve(node);
        };
    }, []);

    return (
        <div ref={ref} style={{ position: "relative", width: width === "fit-content" ? "fit-content" : "100%", overflow: "hidden" }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ width: "100%" }}
            >
                {children}
            </motion.div>
        </div>
    );
};



interface CardProps {
    children: React.ReactNode;
    width?: "fit-content" | "full";
    custom: number
}
export const CardAnimation: React.FC<CardProps> = ({ children, width = "full", custom }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(containerRef.current!);

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            controls.start((i) => ({
                opacity: 1,
                y: 0,
                transition: { delay: i * 0.25 } // Adjust the delay as needed
            }));
        }
    }, [isVisible, controls]);

    return (
        <div ref={containerRef} style={{}}>
                <motion.div
                    custom={custom}
                    animate={controls}
                    initial={{ opacity: 0, y: 20 }}
                >
                    {children}
                </motion.div>
        </div>
    );
};