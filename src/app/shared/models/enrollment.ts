import { Course } from './course';
import { Student } from './student';

export class Enrollment {
    enrollmentId: number;
    courseId: number;
    studentId: number;
    Grade: number;
    student: Student;
    course: Course;
}
