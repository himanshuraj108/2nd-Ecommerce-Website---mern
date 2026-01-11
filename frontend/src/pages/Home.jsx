import { Hero } from '../components/Hero/Hero';
import { ProductCard } from '../components/Product/ProductCard';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div>
            <Hero />

            {/* Featured Section Placeholder */}
            <section className="section py-20 bg-surface">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-primary font-medium tracking-wider uppercase">Selected for you</span>
                            <h2 className="text-3xl font-bold mt-2">Trending Now</h2>
                        </div>
                        <Link to="/shop" className="group flex items-center gap-2 font-medium hover:text-primary transition-colors">
                            View All Products
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Featured Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.slice(0, 4).map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
