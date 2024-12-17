'use client';

import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Logo = ({ width, height }) => {
    const [logoSrc, setLogoSrc] = useState("/images/logo/h2h_logo_dm.webp"); // Default for SSR
    const { theme } = useTheme();

    useEffect(() => {
        // Update logo dynamically after hydration
        setLogoSrc(
            theme === "dark"
                ? "/images/logo/h2h_logo_dm.webp"
                : "/images/logo/h2h_logo_lm.webp"
        );
    }, [theme]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            <Image
                src={logoSrc}
                alt="Houz2Home Logo"
                width={250}
                height={223}
                style={{ width: "100%", height: "auto" }}
            />
        </motion.div>
    );
};

export default Logo;
