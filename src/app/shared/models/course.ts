import { Enrollment } from './enrollment';

export class Course {
    courseId: number;
    title: string;
    credits: number;
    enrollments: Enrollment[];
}
