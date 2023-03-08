import { COURSE_1, COURSE_2, COURSE_3 } from '../../../lib/courses';

export default function handler(req, res) {
  res.status(200).json([COURSE_1, COURSE_2, COURSE_3]);
}
