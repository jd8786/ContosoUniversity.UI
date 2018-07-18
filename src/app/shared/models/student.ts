import { Enrollment } from './enrollment';

export class Student {
    studentId: number;
    lastName: string;
    firstMidName: string;
    enrollmentDate: Date;
    enrollments: Enrollment[];
}
