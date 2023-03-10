import styles from '../styles/Home.module.css';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Course } from '../lib/courses';
import {useState, useEffect} from "react";

export default function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
    };
    fetchCourses();
  }, []);

  return (
    <main className={styles.container}>
      <h1>Welcome to Maven!</h1>

        <span>Available Courses</span>
        <ul>
            {courses.map((course) => (
                <li key={course.id}>
                    <Link href={`/courses/${course.id}`}>{course.name}</Link>
                </li>
            ))}
        </ul>

    </main>
  );
}
