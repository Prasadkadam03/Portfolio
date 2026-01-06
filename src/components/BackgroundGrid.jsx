import React from 'react';
import { motion } from 'framer-motion';

const BackgroundGrid = () => (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
                backgroundImage: `linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)`,
                backgroundSize: '120px 120px'
            }}
        />
        <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 0.04, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
            style={{ backgroundImage: `radial-gradient(var(--grid-dot) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
        />
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08, rotate: -2 }}
            transition={{ duration: 2.5, ease: 'easeOut' }}
            className="absolute inset-0 bg-wash-gradient"
        />
    </div>
);

export default BackgroundGrid;
