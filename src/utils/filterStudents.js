export function filterStudents(
  students,
  selectedClass,
  selectedGender,
  selectedSort
) {
  let filteredStudents = [...students];

  if (selectedClass) {
    filteredStudents = filteredStudents.filter(
      (student) => student.grade === parseInt(selectedClass)
    );
  }

  if (selectedGender !== "All") {
    filteredStudents = filteredStudents.filter(
      (student) => student.gender.toLowerCase() === selectedGender.toLowerCase()
    );
  }

  filteredStudents.sort((a, b) => {
    if (selectedSort === "Name") {
      return a.name.localeCompare(b.name);
    } else if (selectedSort === "Age") {
      return a.age - b.age;
    } else if (selectedSort === "Attendance") {
      return a.attendance - b.attendance;
    } else {
      return a.marks - b.marks;
    }
  });

  return filteredStudents;
}
