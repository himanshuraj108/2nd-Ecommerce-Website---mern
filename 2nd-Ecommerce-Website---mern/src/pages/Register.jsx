import { RegisterForm } from '../components/Auth/RegisterForm';

export const Register = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 py-12 px-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100 animate-fade-in-up">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold font-heading mb-2">Create Account</h1>
                    <p className="text-slate-500">Join us for a premium shopping experience</p>
                </div>
                <RegisterForm />
            </div>
        </div>
    );
};
