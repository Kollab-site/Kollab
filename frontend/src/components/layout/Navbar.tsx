
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../common/Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState<'signin' | 'signup'>('signin');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openAuthModal = (type: 'signin' | 'signup') => {
    setAuthType(type);
    setShowAuthModal(true);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-primary text-transparent bg-clip-text">Influence.io</span>
              </Link>
            </div>
            <div className="hidden md:ml-12 md:flex md:space-x-8">
              <Link to="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-brand-purple transition-colors">
                Home
              </Link>
              <Link to="/brands" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-brand-purple hover:text-gray-900 transition-colors">
                For Brands
              </Link>
              <Link to="/creators" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-brand-purple hover:text-gray-900 transition-colors">
                For Creators
              </Link>
              <Link to="/about" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-brand-purple hover:text-gray-900 transition-colors">
                About
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => openAuthModal('signin')}
            >
              Sign In
            </Button>
            <Button 
              variant="primary" 
              size="sm" 
              onClick={() => openAuthModal('signup')}
            >
              Sign Up
            </Button>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-purple"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block pl-3 pr-4 py-2 border-l-4 border-brand-purple text-base font-medium text-brand-purple bg-purple-50"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/brands"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            onClick={toggleMenu}
          >
            For Brands
          </Link>
          <Link
            to="/creators"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            onClick={toggleMenu}
          >
            For Creators
          </Link>
          <Link
            to="/about"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            onClick={toggleMenu}
          >
            About
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4 space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              isFullWidth
              onClick={() => {
                openAuthModal('signin');
                toggleMenu();
              }}
            >
              Sign In
            </Button>
            <Button 
              variant="primary" 
              size="sm" 
              isFullWidth
              onClick={() => {
                openAuthModal('signup');
                toggleMenu();
              }}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
