import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { 
  Users, 
  BookOpen, 
  BarChart3, 
  Upload,
  MessageCircle,
  CheckCircle,
  Clock,
  TrendingUp,
  FileText
} from 'lucide-react';

export const TeacherDashboard = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: t('dashboard'), icon: BarChart3 },
    { id: 'students', label: 'My Students', icon: Users },
    { id: 'content', label: 'Upload Content', icon: Upload },
    { id: 'assignments', label: 'Assignments', icon: FileText },
    { id: 'analytics', label: 'Class Analytics', icon: TrendingUp },
    { id: 'chat', label: t('chat'), icon: MessageCircle },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-gradient-card shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Students</p>
                      <p className="text-lg font-bold">45</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-success/10 p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Present Today</p>
                      <p className="text-lg font-bold">42</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-warning/10 p-2 rounded-lg">
                      <Clock className="h-5 w-5 text-warning" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Pending Reviews</p>
                      <p className="text-lg font-bold">8</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-lg">
                      <BookOpen className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Classes Today</p>
                      <p className="text-lg font-bold">6</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activities */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
                <CardDescription>Your classes and activities for today</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { time: '9:00 AM', subject: 'Mathematics', class: '10th A', status: 'completed' },
                  { time: '10:30 AM', subject: 'Mathematics', class: '10th B', status: 'ongoing' },
                  { time: '12:00 PM', subject: 'Mathematics', class: '9th A', status: 'upcoming' },
                  { time: '2:00 PM', subject: 'Mathematics', class: '9th B', status: 'upcoming' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="text-sm font-medium w-20">{item.time}</div>
                    <div className="flex-1">
                      <p className="font-medium">{item.subject}</p>
                      <p className="text-sm text-muted-foreground">Class {item.class}</p>
                    </div>
                    <Badge variant={item.status === 'completed' ? 'secondary' : item.status === 'ongoing' ? 'default' : 'outline'}>
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        );

      case 'students':
        return (
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>My Students</CardTitle>
              <CardDescription>Manage and track your students' progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'ਅਮਨਪ੍ਰੀਤ ਕੌਰ (Amanpreet)', class: '10th A', attendance: '95%', performance: 'Excellent' },
                  { name: 'ਗੁਰਜੀਤ ਸਿੰਘ (Gurjeet)', class: '10th A', attendance: '88%', performance: 'Good' },
                  { name: 'ਪ੍ਰੀਤ ਸਿੰਘ (Preet)', class: '10th B', attendance: '92%', performance: 'Very Good' },
                  { name: 'ਸਿਮਰਨ ਕੌਰ (Simran)', class: '10th B', attendance: '90%', performance: 'Good' },
                ].map((student, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-muted-foreground">Class {student.class}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="text-sm">
                        <span className="text-muted-foreground">Attendance: </span>
                        <span className="font-medium">{student.attendance}</span>
                      </div>
                      <Badge variant="outline">{student.performance}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 'content':
        return (
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Upload Content</CardTitle>
              <CardDescription>Share learning materials with your students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Button variant="gradient" className="w-full h-20">
                    <Upload className="h-6 w-6 mr-3" />
                    Upload Documents
                  </Button>
                  <Button variant="outline" className="w-full h-20">
                    <BookOpen className="h-6 w-6 mr-3" />
                    Create Assignment
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">Recent Uploads</h4>
                  <div className="space-y-2">
                    {[
                      'Mathematics Chapter 5.pdf',
                      'Science Lab Manual.pdf',
                      'Practice Questions.docx',
                    ].map((file, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                        <FileText className="h-4 w-4 text-primary" />
                        <span className="text-sm">{file}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 'assignments':
        return (
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Assignments</CardTitle>
              <CardDescription>Manage homework and assessments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: 'Algebra Practice', class: '10th A', dueDate: '2024-01-15', submitted: 28, total: 30 },
                  { title: 'Geometry Problems', class: '10th B', dueDate: '2024-01-18', submitted: 25, total: 32 },
                  { title: 'Trigonometry Quiz', class: '9th A', dueDate: '2024-01-20', submitted: 0, total: 25 },
                ].map((assignment, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{assignment.title}</h4>
                        <p className="text-sm text-muted-foreground">Class {assignment.class}</p>
                      </div>
                      <Badge variant="outline">Due: {assignment.dueDate}</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Submissions: {assignment.submitted}/{assignment.total}</span>
                      <span>{Math.round((assignment.submitted / assignment.total) * 100)}% completed</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 'analytics':
        return (
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Class Analytics</CardTitle>
              <CardDescription>Performance insights for your classes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Class Performance</h4>
                  {[
                    { class: '10th A', average: 85, trend: 'up' },
                    { class: '10th B', average: 78, trend: 'up' },
                    { class: '9th A', average: 82, trend: 'down' },
                    { class: '9th B', average: 88, trend: 'up' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">Class {item.class}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{item.average}%</span>
                        <TrendingUp className={`h-4 w-4 ${item.trend === 'up' ? 'text-success' : 'text-destructive'}`} />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">Attendance Overview</h4>
                  <div className="text-center p-6 bg-success/10 rounded-lg">
                    <CheckCircle className="h-12 w-12 text-success mx-auto mb-2" />
                    <p className="text-2xl font-bold text-success">89%</p>
                    <p className="text-sm text-muted-foreground">Average Attendance</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 'chat':
        return (
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>{t('chat')} - Teacher Assistant</CardTitle>
              <CardDescription>AI assistant for lesson planning and student management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-6 text-center">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-medium mb-2">Teacher AI Assistant Coming Soon</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get help with lesson planning, grading assistance, and student progress analysis.
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