import { GetStaticPaths, GetStaticProps } from 'next';

import { Course } from '../../lib/courses';
import DownloadStudentsButton from '../../components/DownloadStudentsButton';

import styles from '../../styles/Course.module.css';

interface CoursePageProps {
  course: Course;
}

export default function CoursePage({ course }: CoursePageProps) {
  return (
    <main className={styles.container}>
      <h1 className={styles.headerName}>{course.name}</h1>
      <DownloadStudentsButton students={course.students} />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { courseId } = context.params;

  const res = await fetch(`${process.env.API_URL}/api/courses/${courseId}`);
  const course = await res.json();

  return {
    props: {
      course,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.API_URL}/api/courses`);
  const courses = await res.json();

  const paths = courses.map((course: Course) => ({
    params: { courseId: course.id },
  }));

  return { paths, fallback: false };
};
