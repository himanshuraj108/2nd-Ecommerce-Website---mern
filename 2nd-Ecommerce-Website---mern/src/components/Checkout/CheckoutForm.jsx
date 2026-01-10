export const CheckoutForm = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form id="checkout-form" onSubmit={handleSubmit} className="space-y-8">
            {/* Contact */}
            <section>
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 gap-4">
                    <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-primary" required />
                </div>
            </section>

            {/* Shipping */}
            <section>
                <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="First name" className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-primary" required />
                    <input type="text" placeholder="Last name" className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-primary" required />
                    <input type="text" placeholder="Address" className="w-full md:col-span-2 px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-primary" required />
                    <input type="text" placeholder="City" className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-primary" required />
                    <input type="text" placeholder="Postal code" className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-primary" required />
                </div>
            </section>

            {/* Payment (Mock) */}
            <section>
                <h2 className="text-xl font-bold mb-4">Payment Details</h2>
                <div className="p-4 border border-slate-200 rounded-lg bg-slate-50 text-slate-500 text-sm mb-4">
                    <p>This is a secure 256-bit SSL encrypted payment.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <input type="text" placeholder="Card number" className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-primary" required />
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="MM / YY" className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-primary" required />
                        <input type="text" placeholder="CVC" className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-primary" required />
                    </div>
                </div>
            </section>
        </form>
    );
};
