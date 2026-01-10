import { Link } from 'react-router-dom';

export const RegisterForm = () => {
    return (
        <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="John"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="Doe"
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="you@example.com"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
                <input
                    type="password"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="••••••••"
                />
            </div>
            <button className="w-full btn btn-primary py-3">Create Account</button>
            <p className="text-center text-slate-600 text-sm">
                Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Sign in</Link>
            </p>
        </form>
    );
};
