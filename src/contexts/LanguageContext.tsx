import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'pa';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Auth
    login: 'Login',
    email: 'Email',
    password: 'Password',
    logout: 'Logout',
    welcome: 'Welcome',
    
    // Navigation
    dashboard: 'Dashboard',
    attendance: 'Attendance',
    questionBank: 'Question Bank',
    videoLectures: 'Video Lectures',
    performance: 'Performance',
    chat: 'AI Assistant',
    
    // Roles
    student: 'Student',
    teacher: 'Teacher',
    parent: 'Parent',
    
    // Common
    selectLanguage: 'Select Language',
    english: 'English',
    punjabi: 'ਪੰਜਾਬੀ',
    standard: 'Standard',
    subject: 'Subject',
    view: 'View',
    today: 'Today',
    present: 'Present',
    absent: 'Absent',
    
    // Demo credentials
    demoCredentials: 'Demo Credentials',
    studentLogin: 'Student: student@demo.com / student123',
    teacherLogin: 'Teacher: teacher@demo.com / teacher123',
    parentLogin: 'Parent: parent@demo.com / parent123',
  },
  pa: {
    // Auth
    login: 'ਲਾਗਇਨ',
    email: 'ਈਮੇਲ',
    password: 'ਪਾਸਵਰਡ',
    logout: 'ਲਾਗਆਉਟ',
    welcome: 'ਜੀ ਆਇਆਂ ਨੂੰ',
    
    // Navigation
    dashboard: 'ਡੈਸ਼ਬੋਰਡ',
    attendance: 'ਹਾਜ਼ਰੀ',
    questionBank: 'ਪ੍ਰਸ਼ਨ ਬੈਂਕ',
    videoLectures: 'ਵੀਡੀਓ ਲੈਕਚਰ',
    performance: 'ਪ੍ਰਦਰਸ਼ਨ',
    chat: 'ਏਆਈ ਸਹਾਇਕ',
    
    // Roles
    student: 'ਵਿਦਿਆਰਥੀ',
    teacher: 'ਅਧਿਆਪਕ',
    parent: 'ਮਾਤਾ-ਪਿਤਾ',
    
    // Common
    selectLanguage: 'ਭਾਸ਼ਾ ਚੁਣੋ',
    english: 'English',
    punjabi: 'ਪੰਜਾਬੀ',
    standard: 'ਜਮਾਤ',
    subject: 'ਵਿਸ਼ਾ',
    view: 'ਵੇਖੋ',
    today: 'ਅੱਜ',
    present: 'ਮੌਜੂਦ',
    absent: 'ਗੈਰਹਾਜ਼ਰ',
    
    // Demo credentials
    demoCredentials: 'ਡੈਮੋ ਲਾਗਇਨ ਜਾਣਕਾਰੀ',
    studentLogin: 'ਵਿਦਿਆਰਥੀ: student@demo.com / student123',
    teacherLogin: 'ਅਧਿਆਪਕ: teacher@demo.com / teacher123',
    parentLogin: 'ਮਾਤਾ-ਪਿਤਾ: parent@demo.com / parent123',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};