import { Course, COURSE_1, COURSE_2, COURSE_3 } from '../../../lib/courses';

const COURSE_ID_TO_COURSE: { [key: string]: Course } = {
  '1': COURSE_1,
  '2': COURSE_2,
  '3': COURSE_3,
};

export default function handler(req, res) {
  const { courseId } = req.query;

  const course = COURSE_ID_TO_COURSE[courseId];
  if (!course) return res.status(404).end('Course not found');

  res.status(200).json(course);
}
