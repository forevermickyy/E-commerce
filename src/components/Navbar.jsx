import React, { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container py-2 flex items-center justify-between">
        <div className="flex gap-10">
          <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-clip">
            Omar Phones & Accessories
          </p>

          <div className="gap-2 hidden md:flex">
            <button className="bg-gray-50 border border-purple-700 px-4 py-2 rounded">
              Browse
            </button>
            <input
              className="px-4 py-2 w-full border border-purple-700 bg-gray-50 rounded"
              placeholder="What do you want to buy?"
              type="text"
            />
          </div>
        </div>

        <div className="hidden md:block space-x-2">
          <a href="/auth"><button className="secondary-btn">
            Create Account
          </button></a>
          <a href="/auth"><button className="primary-btn text-white">Sign-In</button></a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <TiThMenu className="text-3xl text-purple-700" />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Conditional Rendering */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-100 py-4">
          <div className="container">
            <button className="block bg-gray-50 border border-purple-700 w-full text-left px-4 mb-4 py-2 rounded">
              Browse
            </button>
            <input
              className="px-4 py-2 w-full border border-purple-700 bg-gray-50 rounded"
              placeholder="What do you want to learn?"
              type="text"
            />
            <div className="mt-4 space-y-2">
              <button className="w-full secondary-btn">
                Create Account
              </button>
              <button className="w-full primary-btn text-white">Sign-In</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
