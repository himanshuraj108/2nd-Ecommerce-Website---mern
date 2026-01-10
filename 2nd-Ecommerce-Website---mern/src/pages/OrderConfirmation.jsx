import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const OrderConfirmation = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 py-12 px-6">
            <div className="max-w-md w-full text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                    <CheckCircle className="w-10 h-10" />
                </div>
                <h1 className="text-4xl font-bold font-heading mb-4 text-slate-900">Order Confirmed!</h1>
                <p className="text-slate-600 mb-8 text-lg">
                    Thank you for your purchase. We've sent a confirmation email with your order details.
                </p>
                <div className="flex flex-col gap-4">
                    <Link to="/profile" className="btn btn-secondary justify-center">
                        View Order Status
                    </Link>
                    <Link to="/shop" className="btn btn-primary justify-center">
                        Continue Shopping
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
