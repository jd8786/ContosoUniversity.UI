import { Student } from './student';

export class ApiResponseOfStudents {
    isSuccess: Boolean;
    message: string;
    data: Student[];
}
