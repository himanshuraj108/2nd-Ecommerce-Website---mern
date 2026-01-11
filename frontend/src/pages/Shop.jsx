import { useState, useMemo } from 'react';
import { ProductCard } from '../components/Product/ProductCard';
import { SearchBar } from '../components/Product/SearchBar';
import { products } from '../data/products';

export const Shop = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = useMemo(() =>
        [...new Set(products.map(p => p.category))],
        []);

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold font-heading mb-4">Shop Collection</h1>
                <p className="text-slate-500">Curated essentials for your wardrobe.</p>
            </div>

            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                categories={categories}
            />

            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <p className="text-slate-400 text-lg">No products found matching your criteria.</p>
                </div>
            )}
        </div>
    );
};
