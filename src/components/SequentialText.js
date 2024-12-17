"use client";

import React from "react";
import { motion } from "motion/react";

const SequentialText = ({ title, subtitle }) => {
    const titleLetters = title.split("");

    const letterVariants = {
        hidden: { opacity: 0, x: -50, y: 50 },
        visible: { opacity: 1, x: 0, y: 0 },
    };

    const subtitleVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
    };

    // Calculate the total delay for the title animation
    const titleAnimationDuration = titleLetters.length * 0.06;

    return (
        <div className="text-center">
            {/* Title Animation */}
            <div className="flex justify-center">
                {titleLetters.map((letter, index) => (
                    <motion.h1
                        key={index}
                        variants={letterVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: index * 0.06,
                            duration: 0.5,
                            type: "spring",
                            stiffness: 300,
                        }}
                        className="text-accent mr-0.5"
                    >
                        {letter}
                    </motion.h1>
                ))}
            </div>

            {/* subtitle Animation */}
            <motion.h2
                className="italic"
                variants={subtitleVariants}
                initial="hidden"
                animate="visible"
                transition={{
                    delay: titleAnimationDuration + .5, // Wait for the title animation to finish plus an extra delay
                }}
            >
                {subtitle}
            </motion.h2>
        </div>
    );
};

export default SequentialText;