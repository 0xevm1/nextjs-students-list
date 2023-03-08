import { Student } from './students';

export interface Course {
  id: string;
  name: string;
  students: Student[];
}

export const COURSE_1: Course = {
  id: '1',
  name: 'Product Strategy for Designers',
  students: [
    {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      twitter: '@johndoe',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@gmail.com',
    },
  ],
};

export const COURSE_2: Course = {
  id: '2',
  name: 'Building Emotional Intelligence',
  students: [
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@gmail.com',
    },
    {
      id: '3',
      name: 'Michael K. Britt',
      email: 'michalek.britt@gmail.com',
      twitter: '@michaelbritt',
    },
    {
      id: '4',
      name: 'Hernandez, Arline',
      email: 'arline@gmail.com',
    },
  ],
};

export const COURSE_3: Course = {
  id: '3',
  name: 'The Secret Structure of Episodic Television',
  students: [],
};
