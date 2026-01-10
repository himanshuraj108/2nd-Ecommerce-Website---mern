import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, Star, Share2 } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState('M');

    const product = products.find(p => p.id === parseInt(id || '0'));

    if (!product) {
        return (
            <div className="h-[60vh] flex flex-col items-center justify-center gap-4">
                <h2 className="text-2xl font-bold">Product not found</h2>
                <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-12 animate-fade-in">
            <Link to="/shop" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Shop
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                {/* Image */}
                <div className="bg-slate-50 rounded-2xl overflow-hidden aspect-square md:aspect-[4/5] relative group">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Info */}
                <div>
                    <div className="mb-8">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">{product.category}</span>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mt-2 mb-4">{product.name}</h1>
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                            <div className="flex items-center text-yellow-500">
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                            </div>
                            <span>(4.9/5 from 120 reviews)</span>
                        </div>
                    </div>

                    <p className="text-3xl font-bold text-slate-900 mb-8">${product.price}</p>

                    <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                        {product.description}
                    </p>

                    {/* Size Selector (Mock) */}
                    <div className="mb-8">
                        <div className="flex justify-between mb-4">
                            <span className="font-bold text-slate-900">Select Size</span>
                            <button className="text-primary text-sm hover:underline">Size Guide</button>
                        </div>
                        <div className="flex gap-3">
                            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-12 h-12 rounded-lg border flex items-center justify-center font-medium transition-all ${selectedSize === size
                                            ? 'bg-slate-900 text-white border-slate-900'
                                            : 'bg-white text-slate-900 border-slate-200 hover:border-slate-900'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => addToCart(product)}
                            className="flex-1 btn btn-primary py-4 text-lg"
                        >
                            <ShoppingBag className="w-5 h-5" />
                            Add to Cart
                        </button>
                        <button className="btn btn-secondary px-4">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Features */}
                    <div className="mt-12 space-y-4 border-t border-slate-100 pt-8">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                                <ShoppingBag className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Free Shipping</h4>
                                <p className="text-sm text-slate-500">On all orders over $200</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                                <ArrowLeft className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Easy Returns</h4>
                                <p className="text-sm text-slate-500">30-day return policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
