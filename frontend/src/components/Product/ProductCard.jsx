import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="group relative bg-white rounded-xl overflow-hidden border border-slate-100 transition-all hover:shadow-lg">
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-slate-50">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay Actions */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex gap-2 justify-center pb-6 bg-gradient-to-t from-black/50 to-transparent">
                    <button
                        onClick={() => addToCart(product)}
                        className="bg-white text-slate-900 w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-lg"
                        title="Add to Cart"
                    >
                        <ShoppingBag className="w-5 h-5" />
                    </button>
                    <Link
                        to={`/product/${product.id}`}
                        className="bg-white text-slate-900 w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-lg"
                        title="View Details"
                    >
                        <Eye className="w-5 h-5" />
                    </Link>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                    {product.category}
                </p>
                <Link
                    to={`/product/${product.id}`}
                    className="block text-lg font-bold text-slate-900 mb-2 hover:text-primary transition-colors"
                >
                    {product.name}
                </Link>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold font-heading text-slate-900">
                        ${product.price}
                    </span>
                </div>
            </div>
        </div>
    );
};
