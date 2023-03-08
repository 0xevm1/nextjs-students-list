import styles from '../styles/Button.module.css';

import { Student, getStudentsCSVString } from '../lib/students';
import { downloadCSV } from '../utils/csv';

interface Props {
  students: Student[];
}

export default function DownloadStudentsButton({ students }: Props) {
  const handleDownload = () => {
    const studentsCSVString = getStudentsCSVString(students);
    downloadCSV(studentsCSVString, 'students.csv');
  };

  return (
    <button className={styles.container} onClick={handleDownload} type="button">
      <a href="#">Download {students.length} Students </a>
    </button>
  );
}
