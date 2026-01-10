import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <div className="relative min-h-[90vh] flex items-center bg-slate-900 overflow-hidden isolate">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
                    alt="Fashion Hero"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-6 py-20">
                <div className="max-w-2xl animate-fade-in-up">
                    <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wider uppercase mb-6 animate-fade-in">
                        New Collection 2026
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading text-white leading-[1.1] mb-6">
                        Redefine Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Aesthetic
                        </span>
                    </h1>
                    <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg delay-100">
                        Discover a curated selection of premium essentials designed to elevate your everyday lifestyle.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 delay-200">
                        <Link to="/shop" className="btn btn-primary">
                            Shop Now
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link to="/about" className="btn px-8 py-3 rounded-lg font-medium text-white border border-white/30 hover:bg-white/10 transition-all">
                            Read Story
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
