import React, { useState } from 'react';
import { Mail, ArrowRight, AlertCircle, MapPin, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import SystemLog from './SystemLog';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tier: 'Select Tier...',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent(`Project Inquiry: ${formData.tier} - ${formData.name}`);
        const body = encodeURIComponent(
            `Name/Org: ${formData.name}\n` +
            `Contact Email: ${formData.email}\n` +
            `Selected Tier: ${formData.tier}\n\n` +
            `Project Details:\n${formData.message}`
        );

        window.location.href = `mailto:prasadkadam29503@gmail.com?subject=${subject}&body=${body}`;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <footer className="bg-bg">
            {/* Contact Form Section */}
            <section id="contact" className="py-24 md:py-40 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="border-[3px] border-contrast bg-surface p-6 md:p-16 relative shadow-[8px_8px_0px_0px_var(--color-contrast)] md:shadow-[12px_12px_0px_0px_var(--color-contrast)]"
                    >
                        <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
                            {/* Left Column: Context */}
                            <div className="space-y-8 md:space-y-12">
                                <div>
                                    <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6 md:mb-8 leading-[0.9]">
                                        Start a <br /> Project
                                    </h2>
                                    <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-md border-l-2 border-contrast pl-6">
                                        Ready to ship a React/Node release? Share the scope and I will respond with a build plan and timelines.
                                    </p>
                                    <div className="inline-flex items-center gap-2 mt-4 px-3 py-2 bg-contrast text-surface text-[10px] font-bold uppercase tracking-[0.2em]">
                                        <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                                        Avg response &lt; 24h
                                    </div>
                                </div>

                                <div className="space-y-4 md:space-y-6">
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-contrast text-surface flex items-center justify-center border border-contrast group-hover:bg-surface group-hover:text-contrast transition-colors shrink-0">
                                            <Mail size={18} />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-soft">Direct Line</div>
                                            <a href="mailto:prasadkadam29503@gmail.com" className="text-base md:text-lg font-bold hover:underline break-all text-ink">prasadkadam29503@gmail.com</a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-contrast text-surface flex items-center justify-center border border-contrast group-hover:bg-surface group-hover:text-contrast transition-colors shrink-0">
                                            <MapPin size={18} />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-soft">Base of Operations</div>
                                            <p className="text-base md:text-lg font-bold text-ink">Nashik, India (Remote-friendly)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Interactive Form */}
                            <div className="bg-surface p-6 md:p-8 border border-border">
                                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-soft">Identity</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Name / Org"
                                                className="w-full bg-surface border border-border p-3 text-sm focus:outline-none focus:border-contrast focus:ring-1 focus:ring-contrast transition-all"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-soft">Contact</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email Address"
                                                className="w-full bg-surface border border-border p-3 text-sm focus:outline-none focus:border-contrast focus:ring-1 focus:ring-contrast transition-all"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-soft">Module Selection</label>
                                        <select
                                            name="tier"
                                            value={formData.tier}
                                            onChange={handleChange}
                                            className="w-full bg-surface border border-border p-3 text-sm focus:outline-none focus:border-contrast focus:ring-1 focus:ring-contrast transition-all appearance-none cursor-pointer"
                                        >
                                            <option>Select Tier...</option>
                                            <option>Landing Page / Portfolio</option>
                                            <option>Full Stack MVP</option>
                                            <option>Edge/Serverless App</option>
                                            <option>Enterprise Custom</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-soft">Brief</label>
                                        <textarea
                                            rows="3"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Project requirements..."
                                            className="w-full bg-surface border border-border p-3 text-sm focus:outline-none focus:border-contrast focus:ring-1 focus:ring-contrast transition-all resize-none"
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="w-full py-3 md:py-4 bg-contrast text-surface font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-contrast/90 transition-colors flex items-center justify-center gap-2 group">
                                        Transmit Inquiry <ArrowRight size={14} md:size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* System Log Section */}
            <section className="bg-surface py-12 md:py-20 border-t border-border">
                <div className="max-w-4xl mx-auto px-6">
                    <SystemLog />
                </div>
            </section>

            {/* Final Footer Bar */}
            <div className="bg-surface border-t border-border py-8 md:py-12 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-xl font-display font-bold tracking-tighter">
                        PRASAD<span className="text-soft">KADAM</span>
                    </div>

                    <div className="text-soft text-sm font-mono">
                        © 2025 Prasad Kadam. All Rights Reserved.
                    </div>

                    <div className="flex gap-6">
                        <a href="https://github.com/prasadkadam03" target="_blank" rel="noopener noreferrer" className="text-soft hover:text-contrast transition-colors" aria-label="GitHub">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/prasadkadam03/" target="_blank" rel="noopener noreferrer" className="text-soft hover:text-contrast transition-colors" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
