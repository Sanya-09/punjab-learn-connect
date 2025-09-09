import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/components/ui/use-toast';
import { BookOpen, Globe } from 'lucide-react';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const success = login(email, password);
    
    if (success) {
      toast({
        title: t('welcome'),
        description: 'Successfully logged in!',
      });
    } else {
      toast({
        title: 'Error',
        description: 'Invalid credentials',
        variant: 'destructive',
      });
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Language Selector */}
        <Card className="bg-card/95 backdrop-blur shadow-strong">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <Label>{t('selectLanguage')}</Label>
              </div>
              <Select value={language} onValueChange={(value: 'en' | 'pa') => setLanguage(value)}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">{t('english')}</SelectItem>
                  <SelectItem value="pa">{t('punjabi')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Login Form */}
        <Card className="bg-card/95 backdrop-blur shadow-strong">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-primary p-3 rounded-full">
                <BookOpen className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Punjab LMS
            </CardTitle>
            <CardDescription>
              {t('welcome')} - Learning Management System
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{t('email')}</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">{t('password')}</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="bg-background/50"
                />
              </div>
              <Button type="submit" className="w-full" variant="hero" disabled={loading}>
                {loading ? 'Logging in...' : t('login')}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Demo Credentials */}
        <Card className="bg-card/95 backdrop-blur shadow-medium">
          <CardHeader>
            <CardTitle className="text-lg">{t('demoCredentials')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="p-2 bg-muted rounded-md">
              <strong>{t('student')}:</strong><br />
              {t('studentLogin')}
            </div>
            <div className="p-2 bg-muted rounded-md">
              <strong>{t('teacher')}:</strong><br />
              {t('teacherLogin')}
            </div>
            <div className="p-2 bg-muted rounded-md">
              <strong>{t('parent')}:</strong><br />
              {t('parentLogin')}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};