// Student data (replace with actual student information)
const students = [
  {
    firstName: "Mitzie",
    middleName: "Agila",
    lastName: "Ponce",
    birthdate: "August 4, 2006",
    birthplace: "Bulbulala, Santiago City, Ilocos Sur, Philippines, 2707",
    address: "Bulbulala, Santiago City, Ilocos Sur, Philippines, 2707",
    course: "Bachelor of Science in Computer Science",
    dreamJob: "Web Development",
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
    firstName: "Trisha Mae",
    middleName: "Besting",
    lastName: "Merculio",
    birthdate: "February 2, 2006",
    birthplace: "Palacapac, Candon City, Philipines, 2710",
    address: "Palacapac, Candon City, Philipines, 2710",
    course: "Computer Science",
    dreamJob: "Artificial Intelligence",
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

