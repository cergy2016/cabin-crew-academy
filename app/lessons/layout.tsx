import { ReactNode } from 'react';

interface LessonsLayoutProps {
  children: ReactNode;
}

export default function LessonsLayout({ children }: LessonsLayoutProps) {
  return <>{children}</>;
}
