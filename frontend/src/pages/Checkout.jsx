import { CheckoutForm } from '../components/Checkout/CheckoutForm';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export const Checkout = () => {
    const { items, total, clearCart } = useCart();
    const navigate = useNavigate();

    const handleOrderSubmit = () => {
        clearCart();
        navigate('/order-confirmation');
    };

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold font-heading mb-8">Checkout</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <div>
                    <CheckoutForm onSubmit={handleOrderSubmit} />
                </div>

                {/* Summary */}
                <div className="bg-slate-50 p-8 rounded-2xl h-fit sticky top-24">
                    <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                    <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
                        {items.map(item => (
                            <div key={item.id} className="flex gap-4">
                                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                                <div className="flex-1">
                                    <h4 className="font-bold text-sm">{item.name}</h4>
                                    <p className="text-sm text-slate-500">Qty: {item.quantity}</p>
                                </div>
                                <span className="font-bold">${item.price * item.quantity}</span>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-slate-200 pt-4 space-y-2">
                        <div className="flex justify-between text-slate-500">
                            <span>Subtotal</span>
                            <span>${total}</span>
                        </div>
                        <div className="flex justify-between text-slate-500">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between text-xl font-bold text-slate-900 pt-2">
                            <span>Total</span>
                            <span>${total}</span>
                        </div>
                    </div>
                    <button
                        form="checkout-form"
                        className="w-full btn btn-primary mt-8 py-4 text-lg"
                    >
                        Confirm Order
                    </button>
                </div>
            </div>
        </div>
    );
};
