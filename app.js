let jobs = [
  {
    id: 1,
    company: "City General Hospital",
    position: "Registered Nurse (ICU)",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "45,000 - 60,000 BDT",
    status: "All",
    description:
      "Provide high-quality patient care in a fast-paced ICU environment. Specialized training in ventilator management preferred.",
  },
  {
    id: 2,
    company: "CareFirst Medical Center",
    position: "Pediatric Nurse",
    location: "Remote/Telehealth",
    type: "Part-time",
    salary: "30,000 - 40,000 BDT",
    status: "All",
    description:
      "Conduct virtual health assessments and provide support for pediatric patients and their families.",
  },
  {
    id: 3,
    company: "Dhaka Orthopedic Clinic",
    position: "Physical Therapist",
    location: "Gulshan, Dhaka",
    type: "Full-time",
    salary: "50,000 - 70,000 BDT",
    status: "All",
    description:
      "Help patients recover from surgery through tailored exercise programs and manual therapy techniques.",
  },
  {
    id: 4,
    company: "St. Jude Children's Research",
    position: "Clinical Lab Technician",
    location: "Chittagong, BD",
    type: "Full-time",
    salary: "35,000 - 50,000 BDT",
    status: "All",
    description:
      "Perform laboratory tests and procedures to assist in the diagnosis and treatment of pediatric diseases.",
  },
  {
    id: 5,
    company: "HealthLink Diagnostic",
    position: "Radiology Technologist",
    location: "Banani, Dhaka",
    type: "Contract",
    salary: "40,000 - 55,000 BDT",
    status: "All",
    description:
      "Operate imaging equipment such as X-ray and MRI machines to provide diagnostic results to physicians.",
  },
  {
    id: 6,
    company: "United Hospital Ltd",
    position: "Dialysis Nurse",
    location: "Dhaka, BD",
    type: "Full-time",
    salary: "48,000 - 65,000 BDT",
    status: "All",
    description:
      "Manage hemodialysis treatments for patients with chronic kidney failure and monitor patient vital signs.",
  },
  {
    id: 7,
    company: "Mental Health Associates",
    position: "Clinical Psychologist",
    location: "Remote",
    type: "Full-time",
    salary: "55,000 - 80,000 BDT",
    status: "All",
    description:
      "Provide counseling and psychological support for adults dealing with anxiety, depression, and stress.",
  },
  {
    id: 8,
    company: "Metro Dental Care",
    position: "Dental Hygienist",
    location: "Uttara, Dhaka",
    type: "Part-time",
    salary: "25,000 - 35,000 BDT",
    status: "All",
    description:
      "Perform cleanings, take dental X-rays, and educate patients on proper oral hygiene practices.",
  },
];


let currentFilter = "All";

function displayJobs() {
  const container = document.getElementById("jobs-list-container");
  const filteredJobs =
    currentFilter === "All"
      ? jobs
      : jobs.filter((j) => j.status === currentFilter);

  // Update Dashboard Counts
  document.getElementById("total-count").innerText = jobs.length;
  document.getElementById("interview-count").innerText = jobs.filter(
    (j) => j.status === "Interview",
  ).length;
  document.getElementById("rejected-count").innerText = jobs.filter(
    (j) => j.status === "Rejected",
  ).length;
  document.getElementById("jobs-count-text").innerText =
    `${filteredJobs.length} jobs`;

  //if there are no jobs to show--
  if (filteredJobs.length === 0) {
    container.innerHTML = `
            <div class="flex flex-col items-center justify-center py-20 text-center bg-white border border-gray-100 rounded-xl shadow-sm">
                <div class="bg-blue-50 p-6 rounded-xl mb-4">
                     <img src="./jobs.png" alt="file image" class="w-16 h-16 text-center">
                </div>
                <h3 class="text-2xl font-bold text-blue-900">No jobs available</h3>
                <p class="text-gray-400 mt-2">Check back soon for new opportunities</p>
            </div>
        `;
    return;
  }