import { notFound } from 'next/navigation';
import LessonViewer from '@/components/lesson/LessonViewer';
import { iCAOUnits } from '@/lib/data/icao-curriculum';

interface LessonPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { id } = await params;

  // Find the lesson from the data
  let lesson = null;
  for (const unit of iCAOUnits) {
    const found = unit.lessons.find((l) => l.id === id);
    if (found) {
      lesson = found;
      break;
    }
  }

  if (!lesson) {
    notFound();
  }

  return (
    <div>
      <LessonViewer lesson={lesson} />
    </div>
  );
}

export async function generateMetadata(props: LessonPageProps) {
  const { id } = await props.params;

  let lessonTitle = 'Lesson';
  for (const unit of iCAOUnits) {
    const found = unit.lessons.find((l) => l.id === id);
    if (found) {
      lessonTitle = found.title;
      break;
    }
  }

  return {
    title: `${lessonTitle} | Cabin Crew Academy`,
    description: `Complete the ${lessonTitle} lesson and earn XP rewards.`,
  };
}
