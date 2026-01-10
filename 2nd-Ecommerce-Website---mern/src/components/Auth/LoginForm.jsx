import { Link } from 'react-router-dom';

export const LoginForm = () => {
    return (
        <form className="space-y-6">
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
            <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                    <span className="text-sm text-slate-600">Remember me</span>
                </label>
                <a href="#" className="text-sm font-medium text-primary hover:text-primary-dark">Forgot password?</a>
            </div>
            <button className="w-full btn btn-primary py-3">Sign In</button>
            <p className="text-center text-slate-600 text-sm">
                Don't have an account? <Link to="/register" className="text-primary font-medium hover:underline">Sign up</Link>
            </p>
        </form>
    );
};
