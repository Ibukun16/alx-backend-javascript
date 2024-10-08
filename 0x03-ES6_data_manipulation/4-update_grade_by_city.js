export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeScore = newGrades.find(
        (grade) => grade.studentId === student.id,
      );
      return { ...student, grade: gradeScore ? gradeScore.grade : 'N/A' };
    });
}
