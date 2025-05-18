import React, { useState, useEffect } from 'react';
import PasswordPage from './components/PasswordPage';
import RomanticContent from './components/RomanticContent';
import { AuthProvider, AuthContext } from './context/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen">
        <main>
          <Routes />
        </main>
      </div>
    </AuthProvider>
  );
}

function Routes() {
  const { authenticated } = useAuth();
  
  return (
    <>
      {!authenticated ? <PasswordPage /> : <RomanticContent />}
    </>
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default App;