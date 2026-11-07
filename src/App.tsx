import React, { useState } from 'react';
import { PRODUCTS } from './data/products';
import { Product, ProductCategory, CartItem, OrderConfirmation } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { CinematicStrip } from './components/CinematicStrip';
import { ProductCarousel } from './components/ProductCarousel';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'product'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');

  // Modal and drawer controls
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Cart state initialized with 1 item for immediate satisfaction, or empty
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: `${PRODUCTS[0].id}-M-Piano-Black`,
      productId: PRODUCTS[0].id,
      product: PRODUCTS[0],
      size: 'M',
      color: 'Piano Black & Gold',
      quantity: 1,
      price: PRODUCTS[0].price,
    }
  ]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Navigation handlers
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (cat: ProductCategory) => {
    setActiveCategory(cat);
    if (currentView === 'product') {
      setCurrentView('home');
    }
    // Scroll to carousel section if on home
    const section = document.getElementById('colecao-capacetes');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cart handlers
  const handleAddToCart = (product: Product, size: string, color: string, quantity: number = 1) => {
    const itemId = `${product.id}-${size}-${color}`;
    setCartItems(prev => {
      const existing = prev.find(item => item.id === itemId);
      if (existing) {
        return prev.map(item =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [
          ...prev,
          {
            id: itemId,
            productId: product.id,
            product,
            size,
            color,
            quantity,
            price: product.price,
          }
        ];
      }
    });

    // Open drawer to give visible purchase feedback
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => {
      return prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = (order: OrderConfirmation) => {
    // Keep items in receipt view; once dismissed, cart can reset
    setCartItems([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#141414] font-body selection:bg-[#C82020] selection:text-white">
      
      {/* Global Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        currentView={currentView}
        onBackToHome={handleBackToHome}
        onSearchClick={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' ? (
          <>
            {/* 1. Landing Page Hero Section */}
            <Hero
              onExploreClick={() => {
                const section = document.getElementById('colecao-capacetes');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
              onSelectProduct={handleSelectProduct}
              featuredProduct={PRODUCTS[0]}
            />

            {/* 2. Categories Section */}
            <Categories
              onSelectCategory={handleSelectCategory}
              activeCategory={activeCategory}
            />

            {/* 3. Cinematic Motorcycle Rider Action Strip */}
            <CinematicStrip />

            {/* 4. Horizontal Product Carousel with Categories & Prices */}
            <ProductCarousel
              products={PRODUCTS}
              onSelectProduct={handleSelectProduct}
              onAddToCart={(product, size, color) => handleAddToCart(product, size, color, 1)}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </>
        ) : (
          /* 2. Página individual do produto (PDP) */
          <ProductDetailPage
            product={selectedProduct}
            onAddToCart={handleAddToCart}
            onBack={handleBackToHome}
            onSelectProduct={handleSelectProduct}
            relatedProducts={PRODUCTS.filter(p => p.id !== selectedProduct.id)}
            onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
          />
        )}
      </main>

      {/* Global Dark Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Functional Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Complete Checkout Experience Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Helmet Circumference Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      {/* Instant Product Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={handleSelectProduct}
      />

    </div>
  );
}
