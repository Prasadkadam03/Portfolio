import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SystemLog = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.98]);
    const [logs, setLogs] = useState([]);
    const [stats, setStats] = useState({ cpu: 12, mem: 4.2, net: 120 });

    useEffect(() => {
        // Log interval
        const messages = [
            "INITIALIZING REACT KERNEL...",
            "LOADING ASSETS... (and my hopes and dreams)",
            "CONNECTING TO API GATEWAY... *fingers crossed*",
            "OPTIMIZING DOM TREE... (it's more of a bush really)",
            "VERIFYING SECURITY CREDENTIALS... trust issues much?",
            "ESTABLISHING HANDSHAKE... 🤝 nice to meet you",
            "RENDERING SHADERS... making things shiny ✨",
            "SYSTEM OPERATIONAL... surprisingly!",
            "MONITORING NETWORK TRAFFIC... beep boop 🚗",
            "UPDATING VIEWPORT COORDINATES... x marks the spot",
            "GARBAGE COLLECTION STARTED... taking out the trash 🗑️",
            "ALLOCATING MEMORY BLOCKS... like Tetris but worse",
            "COMPILING SASS... the sassy kind 💅",
            "DEBUGGING BUGS... ironic, isn't it? 🐛",
            "CAFFEINATING DEVELOPER... ☕ critical process",
            "DEPLOYING HOTFIX... it's getting hot in here 🔥",
            "REFACTORING CODE... again... and again...",
            "PUSHING TO PRODUCTION... YOLO mode activated",
            "STACK OVERFLOW CONSULTED... as tradition demands",
            "SEMICOLON MISSING... just kidding, we use JS",
            "404 ERROR NOT FOUND... wait, what?",
            "TURNING IT OFF AND ON AGAIN... classic move",
            "BLAMING CACHE... when in doubt 🤷",
            "COMMITTING CRIMES... I mean commits 📝",
            "BAS KAR PAGLE... rulayega kya? 😭",
            "CHAI BREAK INITIATED... ☕ zaruri hai bhai",
            "CODE CHAL GAYA... matlab miracle ho gaya! 🎉",
            "BUG FIX HO GAYA... ab toh party banti hai 🎊",
            "KHATAM TATA BYE BYE... deployment complete 👋",
            "APPRAISAL KI UMEED... loading 0% 📉",
            "PER MY LAST EMAIL... (tujhe samajh nahi aata kya?) 📧",
            "FRIDAY EVENING... aur ek urgent task? 😭",
            "PIZZA PARTY... increment ki jagah 🍕",
            "STAKEHOLDERS ARE HAPPY... main kab khush hounga? 🥲",
            "IT WORKS ON MY MACHINE... hosting check kar lo 💻",
            "NODE_MODULES IS HEAVIER THAN MY SIN... 🏋️‍♂️",
            "VIM SE EXIT KAISE KAREIN... stuck forever 🔒",
            "LEGACY CODE TOUCH MAT KARNA... bomb hai 💣",
            "GIT COMMIT -m 'fix'... (15th time in a row) 🔁",
            "CENTERING A DIV... the final boss fight 👾"
        ];

        const logInterval = setInterval(() => {
            const msg = messages[Math.floor(Math.random() * messages.length)];
            const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }) + "." + Math.floor(Math.random() * 999);

            setLogs(prev => {
                const newLogs = [...prev, `[${timestamp}] ${msg}`];
                if (newLogs.length > 7) newLogs.shift();
                return newLogs;
            });
        }, 1500);

        // Stats interval
        const statsInterval = setInterval(() => {
            setStats({
                cpu: Math.floor(Math.random() * 30) + 10,
                mem: (Math.random() * 2 + 3).toFixed(1),
                net: Math.floor(Math.random() * 100) + 50
            });
        }, 800);

        return () => {
            clearInterval(logInterval);
            clearInterval(statsInterval);
        };
    }, []);

    return (
        <motion.div
            ref={containerRef}
            style={{ opacity, scale }}
            className="w-full max-w-4xl mx-auto mt-10 md:mt-20 border border-surface/20 bg-surface/10 backdrop-blur-md font-mono text-[10px] text-muted rounded-lg overflow-hidden shadow-card"
        >
            <div className="flex border-b border-surface/20 bg-gradient-to-r from-surface/5 to-transparent px-3 md:px-4 py-2 justify-between items-center backdrop-blur-sm">
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-success animate-pulse shadow-success" />
                        <span className="font-bold tracking-widest uppercase text-[8px] md:text-[10px] text-ink">System Status: ONLINE</span>
                    </div>
                    <div className="hidden md:flex gap-4 text-muted">
                        <span className="transition-colors hover:text-ink">CPU: {stats.cpu}%</span>
                        <span className="transition-colors hover:text-ink">MEM: {stats.mem}GB</span>
                        <span className="transition-colors hover:text-ink">NET: {stats.net}ms</span>
                        <span className="transition-colors hover:text-ink bg-surface/40 px-2 py-1 rounded-md border border-surface/30 font-semibold">UP: 99.9%</span>
                    </div>
                </div>
                <div className="text-soft text-[8px] md:text-[10px] font-semibold">V.2.0.4</div>
            </div>

            <div className="p-3 md:p-4 h-32 md:h-40 overflow-hidden relative bg-gradient-to-b from-surface/5 to-surface/10">
                <div className="absolute inset-x-0 bottom-0 h-10 md:h-12 bg-gradient-to-t from-surface/30 via-surface/10 to-transparent pointer-events-none z-10" />
                {logs.map((log, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-1 font-medium truncate text-[9px] md:text-[10px] text-muted"
                    >
                        <span className="text-soft mr-2">{'>'}</span>{log}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default SystemLog;
