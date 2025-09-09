import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { 
  User, 
  Calendar, 
  BarChart3, 
  MessageCircle,
  CheckCircle,
  TrendingUp,
  Clock,
  BookOpen,
  Target
} from 'lucide-react';

export const ParentDashboard = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: t('dashboard'), icon: BarChart3 },
    { id: 'child-profile', label: 'Child Profile', icon: User },
    { id: 'attendance', label: t('attendance'), icon: Calendar },
    { id: 'performance', label: t('performance'), icon: TrendingUp },
    { id: 'activities', label: 'Daily Activities', icon: BookOpen },
    { id: 'chat', label: t('chat'), icon: MessageCircle },
  ];

  // Mock data for the parent's child
  const childData = {
    name: 'ਰਾਮ ਸਿੰਘ (Ram Singh)',
    class: '10th A',
    rollNumber: '2024001',
    subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi'],
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Child Overview */}
            <Card className="bg-gradient-card shadow-medium">
              <CardHeader>
                <CardTitle>Child Overview - {childData.name}</CardTitle>
                <CardDescription>Class {childData.class} • Roll No: {childData.rollNumber}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <CheckCircle className="h-8 w-8 text-success mx-auto mb-2" />
                    <p className="text-xl font-bold text-success">92%</p>
                    <p className="text-sm text-muted-foreground">Attendance</p>
                  </div>

                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-xl font-bold text-primary">85%</p>
                    <p className="text-sm text-muted-foreground">Overall Grade</p>
                  </div>

                  <div className="text-center p-4 bg-secondary/10 rounded-lg">
                    <Target className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <p className="text-xl font-bold text-secondary">3rd</p>
                    <p className="text-sm text-muted-foreground">Class Rank</p>
                  </div>

                  <div className="text-center p-4 bg-warning/10 rounded-lg">
                    <Clock className="h-8 w-8 text-warning mx-auto mb-2" />
                    <p className="text-xl font-bold text-warning">2</p>
                    <p className="text-sm text-muted-foreground">Pending Tasks</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Updates */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Recent Updates</CardTitle>
                <CardDescription>Latest activities and notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <div className="flex-1">
                    <p className="font-medium">Assignment Submitted</p>
                    <p className="text-sm text-muted-foreground">Mathematics Chapter 5 - Submitted on time</p>
                  </div>
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium">Test Score Updated</p>
                    <p className="text-sm text-muted-foreground">Science Quiz - Score: 18/20 (90%)</p>
                  </div>
                  <span className="text-xs text-muted-foreground">1 day ago</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-warning/10 rounded-lg">
                  <Clock className="h-5 w-5 text-warning" />
                  <div className="flex-1">
                    <p className="font-medium">Upcoming Assignment</p>
                    <p className="text-sm text-muted-foreground">English Essay - Due tomorrow</p>
                  </div>
                  <span className="text-xs text-muted-foreground">Today</span>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'child-profile':
        return (
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Child Profile</CardTitle>
              <CardDescription>Detailed information about {childData.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Basic Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Name:</span>
                        <span className="font-medium">{childData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Class:</span>
                        <span className="font-medium">{childData.class}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Roll Number:</span>
                        <span className="font-medium">{childData.rollNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Academic Year:</span>
                        <span className="font-medium">2024-25</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Contact Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Parent Email:</span>
                        <span className="font-medium">parent@demo.com</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Emergency Contact:</span>
                        <span className="font-medium">+91 98765 43210</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Subjects Enrolled</h4>
                    <div className="space-y-2">
                      {childData.subjects.map((subject, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                          <span className="text-sm">{subject}</span>
                          <Badge variant="outline">Active</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 'attendance':
        return (
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Attendance Record</CardTitle>
              <CardDescription>Monthly attendance overview for {childData.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="text-center p-6 bg-success/10 rounded-lg">
                    <CheckCircle className="h-12 w-12 text-success mx-auto mb-2" />
                    <p className="text-2xl font-bold text-success">92%</p>
                    <p className="text-sm text-muted-foreground">This Month's Attendance</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Present Days</span>
                      <span className="font-medium">23</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Absent Days</span>
                      <span className="font-medium">2</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total School Days</span>
                      <span className="font-medium">25</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium">Last 7 Days</h4>
                  {[
                    { date: '2024-01-15', status: 'present' },
                    { date: '2024-01-14', status: 'present' },
                    { date: '2024-01-13', status: 'absent' },
                    { date: '2024-01-12', status: 'present' },
                    { date: '2024-01-11', status: 'present' },
                    { date: '2024-01-10', status: 'present' },
                    { date: '2024-01-09', status: 'present' },
                  ].map((day, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                      <span className="text-sm">{day.date}</span>
                      <Badge variant={day.status === 'present' ? 'secondary' : 'destructive'}>
                        {day.status === 'present' ? t('present') : t('absent')}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 'performance':
        return (
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Academic Performance</CardTitle>
              <CardDescription>Subject-wise performance analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Subject Performance</h4>
                    {[
                      { subject: 'Mathematics', score: 85, grade: 'A', color: 'bg-primary' },
                      { subject: 'Science', score: 92, grade: 'A+', color: 'bg-success' },
                      { subject: 'English', score: 78, grade: 'B+', color: 'bg-warning' },
                      { subject: 'Social Studies', score: 88, grade: 'A', color: 'bg-secondary' },
                      { subject: 'Hindi', score: 82, grade: 'A-', color: 'bg-primary' },
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{item.subject}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{item.score}%</span>
                            <Badge variant="outline">{item.grade}</Badge>
                          </div>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className={`${item.color} h-2 rounded-full transition-all duration-300`}
                            style={{ width: `${item.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">Recent Test Scores</h4>
                    <div className="space-y-3">
                      {[
                        { test: 'Mathematics Unit Test', score: '18/20', percentage: '90%', date: '2024-01-10' },
                        { test: 'Science Quiz', score: '15/15', percentage: '100%', date: '2024-01-08' },
                        { test: 'English Essay', score: '16/20', percentage: '80%', date: '2024-01-05' },
                      ].map((test, index) => (
                        <div key={index} className="p-3 bg-muted/50 rounded-lg">
                          <div className="flex justify-between items-start mb-1">
                            <p className="font-medium text-sm">{test.test}</p>
                            <Badge variant="outline">{test.percentage}</Badge>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Score: {test.score}</span>
                            <span>{test.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 'activities':
        return (
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Daily Activities</CardTitle>
              <CardDescription>Track your child's daily learning activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-medium">Today's Activities</h4>
                {[
                  { time: '9:00 AM', activity: 'Mathematics Class', description: 'Algebra - Linear equations', status: 'completed' },
                  { time: '10:30 AM', activity: 'Science Class', description: 'Chemistry - Acids and Bases', status: 'completed' },
                  { time: '12:00 PM', activity: 'English Class', description: 'Reading comprehension', status: 'ongoing' },
                  { time: '2:00 PM', activity: 'Assignment Due', description: 'Mathematics homework submission', status: 'pending' },
                  { time: '4:00 PM', activity: 'Study Time', description: 'Prepare for tomorrow\'s science test', status: 'pending' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="text-sm font-medium w-20">{activity.time}</div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{activity.activity}</p>
                      <p className="text-xs text-muted-foreground">{activity.description}</p>
                    </div>
                    <Badge variant={
                      activity.status === 'completed' ? 'secondary' : 
                      activity.status === 'ongoing' ? 'default' : 'outline'
                    }>
                      {activity.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 'chat':
        return (
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>{t('chat')} - Parent Assistant</CardTitle>
              <CardDescription>Get help with your child's education and progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-6 text-center">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-medium mb-2">Parent AI Assistant Coming Soon</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get insights about your child's progress, tips for helping with homework, and educational guidance.
                </p>
                <Button variant="outline" disabled>
                  Start Conversation
                </Button>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-card shadow-soft min-h-screen p-4">
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveSection(item.id)}
                >
                  <Icon className="h-4 w-4 mr-3" />
                  {item.label}
                </Button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};