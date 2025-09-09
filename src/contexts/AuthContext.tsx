import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'student' | 'teacher' | 'parent';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  class?: string;
  subjects?: string[];
  children?: string[]; // For parents
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo accounts for testing
const demoUsers: User[] = [
  {
    id: '1',
    name: 'ਰਾਮ ਸਿੰਘ (Ram Singh)',
    email: 'student@demo.com',
    role: 'student',
    class: '10th',
  },
  {
    id: '2',
    name: 'ਸਿਮਰਨ ਕੌਰ (Simran Kaur)',
    email: 'teacher@demo.com',
    role: 'teacher',
    subjects: ['Mathematics', 'Science'],
  },
  {
    id: '3',
    name: 'ਗੁਰਦੀਪ ਸਿੰਘ (Gurdeep Singh)',
    email: 'parent@demo.com',
    role: 'parent',
    children: ['1'],
  },
];

const demoCredentials = [
  { email: 'student@demo.com', password: 'student123' },
  { email: 'teacher@demo.com', password: 'teacher123' },
  { email: 'parent@demo.com', password: 'parent123' },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user is logged in on app start
    const savedUser = localStorage.getItem('lms_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    const credentials = demoCredentials.find(
      cred => cred.email === email && cred.password === password
    );

    if (credentials) {
      const foundUser = demoUsers.find(u => u.email === email);
      if (foundUser) {
        setUser(foundUser);
        localStorage.setItem('lms_user', JSON.stringify(foundUser));
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('lms_user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};