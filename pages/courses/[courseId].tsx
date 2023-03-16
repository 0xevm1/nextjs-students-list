import { GetStaticPaths, GetStaticProps } from 'next';

import { Course } from '../../lib/courses';
import DownloadStudentsButton from '../../components/DownloadStudentsButton';

import styles from '../../styles/Course.module.css';
import {Student} from "../../lib/students";
import Checkbox from "../../components/Checkbox";
import {useState} from "react";

interface CoursePageProps {
  course: Course;
}

export default function CoursePage({ course }: CoursePageProps) {
  const studentBioKeys: (keyof Student)[] = ['id', 'name', 'email', 'twitter'];
  const [field, setField] = useState([true]);

  const checked = (status: boolean, index: number) => {
      //make sure the entire field array is at the latest state
      field[index] = status;
      setField(field);
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.headerName}>{course.name}</h1>
      {studentBioKeys.map((column, index) => {
        return <Checkbox key={column} index={index} label={column} isChecked={field[index]} onCheck={checked}/>;
        // [true, false, true, true]
      })}
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
