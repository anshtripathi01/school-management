export function calculateSchoolStatistics(students) {
  const totalStudents = students.length;

  const totalAttendance = students.reduce(
    (acc, student) => acc + student.attendance,
    0
  );
  const averageAttendance = totalAttendance / totalStudents;

  const totalMarks = students.reduce((acc, student) => acc + student.marks, 0);
  const averageMarks = totalMarks / totalStudents;

  let topPerformer = { name: "", marks: 0 };
  students.forEach((student) => {
    if (student.marks > topPerformer.marks) {
      topPerformer = { name: student.name, marks: student.marks };
    }
  });

  return {
    totalStudents,
    averageAttendance: averageAttendance.toFixed(2), // Format to two decimal places
    averageMarks: averageMarks.toFixed(2), // Format to two decimal places
    topPerformer,
  };
}
