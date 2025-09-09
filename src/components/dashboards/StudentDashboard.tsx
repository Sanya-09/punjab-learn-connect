import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { format } from 'date-fns';
import { 
  BookOpen, 
  Calendar, 
  Video, 
  BarChart3, 
  MessageCircle,
  CheckCircle,
  Clock,
  TrendingUp,
  Target,
  CalendarDays
} from 'lucide-react';

export const StudentDashboard = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  // Mock attendance data for different dates
  const attendanceData = {
    '2024-01-15': { status: 'present', subjects: ['Math', 'Science', 'English'] },
    '2024-01-16': { status: 'present', subjects: ['Math', 'Science', 'English', 'History'] },
    '2024-01-17': { status: 'absent', subjects: [] },
    '2024-01-18': { status: 'present', subjects: ['Math', 'English', 'History'] },
    '2024-01-19': { status: 'present', subjects: ['Science', 'English', 'PE'] },
    '2024-01-22': { status: 'present', subjects: ['Math', 'Science', 'English', 'History'] },
    '2024-01-23': { status: 'present', subjects: ['Math', 'Science', 'English'] },
    '2024-01-24': { status: 'present', subjects: ['Math', 'Science', 'History'] },
    '2024-01-25': { status: 'absent', subjects: [] },
    '2024-01-26': { status: 'present', subjects: ['Math', 'Science', 'English', 'PE'] },
  };

  const getAttendanceForDate = (date: Date) => {
    const dateKey = format(date, 'yyyy-MM-dd');
    return attendanceData[dateKey] || { status: 'no-data', subjects: [] };
  };

  const menuItems = [
    { id: 'dashboard', label: t('dashboard'), icon: BarChart3 },
    { id: 'attendance', label: t('attendance'), icon: Calendar },
    { id: 'questions', label: t('questionBank'), icon: BookOpen },
    { id: 'videos', label: t('videoLectures'), icon: Video },
    { id: 'performance', label: t('performance'), icon: TrendingUp },
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
                    <div className="bg-success/10 p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t('today')} {t('attendance')}</p>
                      <p className="text-lg font-bold text-success">{t('present')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Subjects</p>
                      <p className="text-lg font-bold">5</p>
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
                      <p className="text-sm text-muted-foreground">Pending Tasks</p>
                      <p className="text-lg font-bold">3</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-lg">
                      <Target className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Overall Score</p>
                      <p className="text-lg font-bold">85%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activities */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Your learning progress this week</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Video className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium">Completed Mathematics Video</p>
                    <p className="text-sm text-muted-foreground">Chapter 5: Algebra Basics</p>
                  </div>
                  <Badge variant="secondary">Completed</Badge>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <BookOpen className="h-5 w-5 text-secondary" />
                  <div className="flex-1">
                    <p className="font-medium">Science Quiz Attempted</p>
                    <p className="text-sm text-muted-foreground">Score: 8/10</p>
                  </div>
                  <Badge>Score: 80%</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'attendance':
        const currentAttendance = getAttendanceForDate(selectedDate);
        const totalDays = Object.keys(attendanceData).length;
        const presentDays = Object.values(attendanceData).filter(day => day.status === 'present').length;
        const attendanceRate = Math.round((presentDays / totalDays) * 100);

        return (
          <div className="space-y-6">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5" />
                  {t('attendance')} Calendar
                </CardTitle>
                <CardDescription>Select a date to view attendance details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Calendar */}
                  <div className="space-y-4">
                    <CalendarComponent
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => date && setSelectedDate(date)}
                      className="rounded-md border pointer-events-auto"
                      modifiers={{
                        present: Object.keys(attendanceData).filter(key => 
                          attendanceData[key].status === 'present'
                        ).map(key => new Date(key)),
                        absent: Object.keys(attendanceData).filter(key => 
                          attendanceData[key].status === 'absent'
                        ).map(key => new Date(key))
                      }}
                      modifiersStyles={{
                        present: { backgroundColor: 'hsl(var(--success))', color: 'white' },
                        absent: { backgroundColor: 'hsl(var(--destructive))', color: 'white' }
                      }}
                    />
                  </div>

                  {/* Selected Date Details */}
                  <div className="space-y-4">
                    <div className="text-center p-6 bg-gradient-card rounded-lg">
                      <div className={`h-12 w-12 mx-auto mb-2 rounded-full flex items-center justify-center ${
                        currentAttendance.status === 'present' ? 'bg-success/20' :
                        currentAttendance.status === 'absent' ? 'bg-destructive/20' : 'bg-muted'
                      }`}>
                        {currentAttendance.status === 'present' ? (
                          <CheckCircle className="h-6 w-6 text-success" />
                        ) : currentAttendance.status === 'absent' ? (
                          <Clock className="h-6 w-6 text-destructive" />
                        ) : (
                          <Calendar className="h-6 w-6 text-muted-foreground" />
                        )}
                      </div>
                      <p className="text-lg font-bold">{format(selectedDate, 'MMMM d, yyyy')}</p>
                      <Badge variant={
                        currentAttendance.status === 'present' ? 'default' :
                        currentAttendance.status === 'absent' ? 'destructive' : 'secondary'
                      }>
                        {currentAttendance.status === 'present' ? t('present') :
                         currentAttendance.status === 'absent' ? t('absent') : 'No Data'}
                      </Badge>
                    </div>

                    {/* Subjects for the day */}
                    {currentAttendance.subjects.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="font-medium">Subjects Attended</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {currentAttendance.subjects.map((subject, index) => (
                            <Badge key={index} variant="outline" className="justify-center">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Overall Statistics */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Monthly Overview</CardTitle>
                <CardDescription>Your attendance statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <p className="text-2xl font-bold text-success">{attendanceRate}%</p>
                    <p className="text-sm text-muted-foreground">Attendance Rate</p>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <p className="text-2xl font-bold text-primary">{presentDays}</p>
                    <p className="text-sm text-muted-foreground">Present Days</p>
                  </div>
                  <div className="text-center p-4 bg-destructive/10 rounded-lg">
                    <p className="text-2xl font-bold text-destructive">{totalDays - presentDays}</p>
                    <p className="text-sm text-muted-foreground">Absent Days</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'questions':
        return (
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>{t('questionBank')}</CardTitle>
              <CardDescription>Access NCERT question banks by subject</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi'].map((subject) => (
                  <Card key={subject} className="hover:shadow-medium transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="text-center space-y-3">
                        <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-medium">{subject}</h3>
                        <Button variant="outline" size="sm" className="w-full">
                          Access Questions
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 'videos':
        return (
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>{t('videoLectures')}</CardTitle>
              <CardDescription>Educational videos and Khan Academy content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: 'Algebra Basics', duration: '15:30', subject: 'Mathematics' },
                  { title: 'Cell Structure', duration: '12:45', subject: 'Science' },
                  { title: 'Grammar Rules', duration: '18:20', subject: 'English' },
                  { title: 'Indian History', duration: '22:15', subject: 'Social Studies' },
                ].map((video, index) => (
                  <Card key={index} className="hover:shadow-medium transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="bg-primary/10 p-3 rounded-lg flex items-center justify-center h-24">
                          <Video className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{video.title}</h3>
                          <p className="text-sm text-muted-foreground">{video.subject}</p>
                          <p className="text-xs text-muted-foreground">{video.duration}</p>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          Watch Video
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 'performance':
        return (
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>{t('performance')} Analytics</CardTitle>
              <CardDescription>Your learning progress and achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Subject-wise Performance</h4>
                  {[
                    { subject: 'Mathematics', score: 85, color: 'bg-primary' },
                    { subject: 'Science', score: 92, color: 'bg-success' },
                    { subject: 'English', score: 78, color: 'bg-warning' },
                    { subject: 'Social Studies', score: 88, color: 'bg-secondary' },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">{item.subject}</span>
                        <span className="text-sm font-medium">{item.score}%</span>
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
                  <h4 className="font-medium">Recent Achievements</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                      <div className="bg-success p-1 rounded-full">
                        <CheckCircle className="h-4 w-4 text-success-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Perfect Attendance</p>
                        <p className="text-xs text-muted-foreground">Week 3</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                      <div className="bg-primary p-1 rounded-full">
                        <Target className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Quiz Master</p>
                        <p className="text-xs text-muted-foreground">Science Chapter 4</p>
                      </div>
                    </div>
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
              <CardTitle>{t('chat')} - AI Learning Assistant</CardTitle>
              <CardDescription>Get help with your studies and homework</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-6 text-center">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-medium mb-2">AI Assistant Coming Soon</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Chat with our AI tutor for help with homework, explanations, and study guidance.
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