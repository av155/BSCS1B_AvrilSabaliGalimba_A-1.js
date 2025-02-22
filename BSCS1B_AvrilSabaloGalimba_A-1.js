// Student data (replace with actual student information)
const students = [
  {
    firstName: "Avril",
    middleName: "Sabalo",
    lastName: "Galimba",
    birthdate: "April 15, 2006",
    birthplace: "Langlangca 2nd, Candon City, Ilocos Sur, Philippines, 2710",
    address: "Langlangca 2nd, Candón City, Ilocos Sur, Philippines, 2710",
    course: "Bachelor of Science in Computer Science",
    dreamJob: "Web Developer",
  },
  // Add more student data here...
  {
    firstName: "Maria",
    middleName: "Azza",
    lastName: "Lim",
    birthdate: "July 9, 2006",
    birthplace: "Bagong silang, Caloocan City, Philipines, 1428",
    address: "Langlangca 2nd, Candon City, Ilocos Sur, 1428",
    course: "Computer Science",
    dreamJob: "Software Engineer",
  },
    {
    firstName: "Student3FirstName",
    middleName: "Student3MiddleName",
    lastName: "Student3LastName",
    birthdate: "MM/DD/YYYY",
    birthplace: "Barangay, City/Town, Country, Zip Code",
    address: "Barangay, City/Town, Country, Zip Code",
    course: "Course Name",
    dreamJob: "Dream Job",
  },
];

// Function to generate output sentence for a student
function generateSentence(student) {
  // Handle missing data gracefully
  const firstName = student.firstName || "Unknown";
  const middleName = student.middleName || "";
  const lastName = student.lastName || "Unknown";
  const birthdate = student.birthdate || "Unknown";
  const birthplace = student.birthplace || "Unknown";
  const address = student.address || "Unknown";
  const course = student.course || "Unknown";
  const dreamJob = student.dreamJob || "Unknown";

  // Construct the sentence
  const fullName = `${firstName} ${middleName} ${lastName}`;
  const sentence = `${fullName} was born on ${birthdate} at ${birthplace}, and currently living at ${address}. ${fullName.toLowerCase()} is taking up ${course} and dreams to be ${dreamJob} after graduation.`;
  return sentence;
}

// Generate and print sentences for all students
for (const student of students) {
  console.log(generateSentence(student));
  console.log("\n"); // Add a line break between student outputs
}

