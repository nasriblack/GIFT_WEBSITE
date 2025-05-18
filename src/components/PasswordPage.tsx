import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Heart } from 'lucide-react';

const PasswordPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const { login } = useAuth();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus the input field when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(password);
    
    if (!success) {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles-container">
          {[...Array(20)].map((_, index) => (
            <div 
              key={index} 
              className="particle"
              style={{
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`,
                '--duration': `${Math.random() * 20 + 10}s`,
                '--delay': `${Math.random() * 5}s`,
              } as React.CSSProperties}
            >
              <Heart 
                className="text-pink-300" 
                size={Math.random() * 20 + 10} 
                fill="rgba(249, 168, 212, 0.2)" 
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className={`bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-md w-full transition-all duration-300 ${shake ? 'animate-shake' : ''}`}>
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Heart className="text-rose-500" size={38} fill="#f43f5e" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">For My Love</h1>
          <p className="text-gray-600">Enter the password to unlock our special moments</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              ref={inputRef}
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Enter our special password..."
              className={`w-full px-4 py-3 rounded-lg border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200`}
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">Incorrect password. Try again.</p>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
          >
            Unlock Our Memories
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordPage;