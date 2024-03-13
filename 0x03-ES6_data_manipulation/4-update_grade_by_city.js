export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    if (student.location === city) {
      const filteredGrades = newGrades.filter((grade) => grade.studentId === student.id);
      if (filteredGrades.length > 0) {
        return {
          ...student,
          grade: filteredGrades[0].grade,
        };
      }
      return {
        ...student,
        grade: 'N/A',
      };
    }
    return student;
  });
}
