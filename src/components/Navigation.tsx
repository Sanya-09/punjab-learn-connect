import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { LogOut, BookOpen, Globe } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const Navigation = () => {
  const { user, logout } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="bg-gradient-primary shadow-strong border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-primary-foreground/20 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-primary-foreground font-bold text-lg">Punjab LMS</h1>
              <p className="text-primary-foreground/80 text-xs">{t(user?.role || 'student')} Portal</p>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary-foreground/80" />
              <Select value={language} onValueChange={(value: 'en' | 'pa') => setLanguage(value)}>
                <SelectTrigger className="w-24 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">EN</SelectItem>
                  <SelectItem value="pa">ਪਾ</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* User Info */}
            <div className="text-primary-foreground text-right hidden sm:block">
              <p className="font-medium">{user?.name}</p>
              <p className="text-xs text-primary-foreground/80">{user?.email}</p>
            </div>

            {/* Logout */}
            <Button
              onClick={logout}
              variant="outline"
              size="sm"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline ml-2">{t('logout')}</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};