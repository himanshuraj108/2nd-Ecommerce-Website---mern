import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Search, User, Menu, X } from "lucide-react";
import { useCart } from "../../context/CartContext";

export const Navbar = () => {
  const { token, logout } = useCart();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items, toggleCart } = useCart();
  const location = useLocation();

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold font-heading tracking-tight">
          LUXE.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="btn-icon">
            <Search className="w-5 h-5" />
          </button>
          {!token ? (
            <Link to="/login" className="btn-icon">
              <User className="w-5 h-5" />
            </Link>
          ) : (
            <button onClick={logout} className="btn-icon">
              Logout
            </button>
          )}

          <button onClick={toggleCart} className="btn-icon relative">
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold animate-scale-in">
                {itemCount}
              </span>
            )}
          </button>
          <button
            className="md:hidden btn-icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 animate-fade-in-up">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link to="/" className="text-sm font-medium py-2">
              Home
            </Link>
            <Link to="/shop" className="text-sm font-medium py-2">
              Shop
            </Link>
            <Link to="/about" className="text-sm font-medium py-2">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium py-2">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
