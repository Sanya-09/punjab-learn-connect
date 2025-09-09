import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { StudentDashboard } from '@/components/dashboards/StudentDashboard';
import { TeacherDashboard } from '@/components/dashboards/TeacherDashboard';
import { ParentDashboard } from '@/components/dashboards/ParentDashboard';

export const Dashboard = () => {
  const { user } = useAuth();

  if (!user) return null;

  switch (user.role) {
    case 'student':
      return <StudentDashboard />;
    case 'teacher':
      return <TeacherDashboard />;
    case 'parent':
      return <ParentDashboard />;
    default:
      return <div>Invalid user role</div>;
  }
};