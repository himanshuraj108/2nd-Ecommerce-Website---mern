import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div>
                        <Link to="/" className="text-2xl font-bold font-heading mb-6 block">LUXE.</Link>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Premium essentials for the modern lifestyle. Quality craftsmanship meets contemporary design.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Shop</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link to="/shop" className="hover:text-white transition-colors">New Arrivals</Link></li>
                            <li><Link to="/shop" className="hover:text-white transition-colors">Best Sellers</Link></li>
                            <li><Link to="/shop" className="hover:text-white transition-colors">Accessories</Link></li>
                            <li><Link to="/shop" className="hover:text-white transition-colors">Sale</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Support</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
                            <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
                            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Join the Inner Circle</h4>
                        <p className="text-slate-400 mb-6">Get early access to new drops, exclusive events, and 15% off your first order.</p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-slate-800 border-none rounded-lg px-4 py-3 w-full text-white focus:ring-2 focus:ring-primary outline-none"
                            />
                            <button className="bg-primary hover:bg-primary-dark px-6 py-3 rounded-lg font-medium transition-colors w-full">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                    <p>© 2026 LUXE. All rights reserved.</p>
                    <p>Designed with precision.</p>
                </div>
            </div>
        </footer>
    );
};
