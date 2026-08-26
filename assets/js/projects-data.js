/**
 * projects-data.js
 * Comprehensive dataset for Arthy L. R. - Backend Developer Portfolio
 * Contains all 26 Freelancing / Live Client Projects + Core Enterprise Systems
 */

const FEATURED_PROJECTS = [
  {
    id: "gh-hospital-management",
    title: "GH Hospital Management System",
    shortDescription: "Production healthcare system managing patient admissions, doctor schedules, appointments, and multi-tier RBAC workflows.",
    category: "laravel",
    categoryLabel: "Laravel / PHP",
    tags: ["PHP", "Laravel", "MySQL", "RBAC", "REST API", "cPanel"],
    type: "Freelance Production Software",
    client: "GH HMS Healthcare",
    role: "Freelance Backend Developer (Jul 2025 – Present)",
    url: "https://gh.hms-society.com/",
    hasLiveUrl: true,
    hasCaseStudy: true,
    featured: true,
    problem: "Hospital administrators and staff struggled with paper-based appointment tracking, delayed doctor availability lookups, and unsegmented access permissions across clinical departments.",
    contribution: "Engineered server-side appointment booking and patient profile modules in PHP/Laravel. Designed normalized MySQL tables with foreign key constraints, implemented strict Role-Based Access Control (Admin, Doctor, Receptionist), and optimized query execution for rapid patient search.",
    backendFeatures: [
      "Role-Based Access Control (RBAC) with granular permission gates",
      "CRUD operations for Patient, Doctor, Appointment & Billing entities",
      "Relational schema indexing reducing record retrieval latencies",
      "Dynamic Doctor availability scheduling & slot locking",
      "Admin monitoring dashboards with daily consultation metrics"
    ],
    architecture: "Client Web Form -> Laravel Routes & Auth Middleware -> AppointmentController -> Doctor/Patient Eloquent Models -> MySQL Relational Database",
    challenges: "Handling concurrent appointment slot bookings without double-booking doctors during peak morning registration hours.",
    solution: "Implemented transactional database locks and slot availability validation checks before committing appointment records to MySQL.",
    result: "Successfully deployed to production at gh.hms-society.com, streamlining daily patient registrations and appointment coordination across departments."
  },
  {
    id: "rit-college-erp",
    title: "College Institutional ERP System",
    shortDescription: "Comprehensive academic ERP system handling student databases, faculty attendance tracking, exam scheduling, and result publishing.",
    category: "laravel",
    categoryLabel: "Laravel / PHP",
    tags: ["Laravel", "PHP", "MySQL", "MVC", "RBAC", "jQuery"],
    type: "Enterprise ERP System",
    client: "Sri Hema Infotech (RIT Chennai)",
    role: "Junior Web Developer (Dec 2024 – May 2025)",
    url: "https://ims.ritchennai.edu.in/login",
    hasLiveUrl: true,
    hasCaseStudy: true,
    featured: true,
    problem: "Academic departments needed a unified portal to manage large student cohorts, monitor daily lecture attendance, compute semester exam marks, and publish grade sheets securely.",
    contribution: "Developed core ERP backend modules using Laravel MVC and MySQL. Built student database CRUD workflows, faculty attendance entry systems, and automated grade computation logic. Implemented multi-guard authentication for Faculty, Student, and Admin roles.",
    backendFeatures: [
      "Multi-guard Authentication and session security",
      "Role-Based Access Control (Admins, Faculty, Department Heads, Students)",
      "Attendance aggregation and automated percentage calculations",
      "Exam grade entry, validation, and result generation backend",
      "Database schema relationships connecting Departments, Courses, Batches, and Students"
    ],
    architecture: "Faculty/Admin Interface -> Laravel Web Routes & Guard Middleware -> Exam/AttendanceController -> Model Layer (Eloquent Relationships) -> MySQL Database",
    challenges: "Processing bulk attendance uploads for thousands of students across multiple departments without timing out or creating orphan database entries.",
    solution: "Used database batch transactions with strict rollback mechanisms and pre-validated array payloads before insertion.",
    result: "Deployed to live institutional portal at ims.ritchennai.edu.in, reliably serving daily faculty attendance and student grade management."
  },
  {
    id: "health-watch-ticketing",
    title: "Health-Watch Ticket Management System",
    shortDescription: "Operational support ticketing platform with priority-based issue routing, escalation workflows, and real-time status tracking.",
    category: "php",
    categoryLabel: "PHP / CodeIgniter",
    tags: ["CodeIgniter", "PHP", "MySQL", "AJAX", "RBAC", "Bootstrap"],
    type: "Enterprise Support System",
    client: "Dextra Technologies",
    role: "Junior PHP Backend Developer (Dec 2023 – Aug 2024)",
    url: "https://health-watch.assistprime.in/",
    hasLiveUrl: true,
    hasCaseStudy: true,
    featured: true,
    problem: "Healthcare hardware and technical support teams required an organized ticketing pipeline to capture equipment faults, assign tickets to field engineers, and track resolution SLA times.",
    contribution: "Developed the complete ticket management backend using CodeIgniter and MySQL. Programmed ticket state transitions (Open -> Assigned -> In-Progress -> Resolved -> Closed), engineer assignment logic, activity logging, and input sanitization.",
    backendFeatures: [
      "Structured ticket lifecycle state machine",
      "Technician assignment and status updates via AJAX endpoints",
      "Role-based views for Support Managers, Engineers, and Clients",
      "Form validation, file attachment handling, and query optimization",
      "Activity audit trail logging all status and priority changes"
    ],
    architecture: "Client Ticket UI -> CodeIgniter URL Routing -> Ticket Controller -> DB Active Record / Queries -> MySQL Relational Storage",
    challenges: "Preventing race conditions where multiple support staff could simultaneously claim or reassign the same unresolved ticket.",
    solution: "Implemented atomic status updates with version timestamp verification and user ID locking in MySQL.",
    result: "Deployed to production at health-watch.assistprime.in, significantly reducing ticket resolution turnaround and eliminating unassigned support requests."
  },
  {
    id: "keshasri-tailoring-academy",
    title: "Keshasri Tailoring Academy Portal",
    shortDescription: "Academy platform with student course enquiry capture, structured lead management, and dynamic course content publishing.",
    category: "php",
    categoryLabel: "PHP / MySQL",
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "cPanel"],
    type: "Client Web Application",
    client: "Keshasri Tailoring Academy",
    role: "Freelance Backend Developer (Jul 2025 – May 2026)",
    url: "https://keshasricollections.in",
    hasLiveUrl: true,
    hasCaseStudy: true,
    featured: true,
    problem: "A growing vocational academy required a digital portal to showcase tailoring curricula, capture prospect student enquiries, and manage batch schedules.",
    contribution: "Engineered student enquiry capture backend endpoints, integrated automated form data sanitization, designed enquiry storage tables in MySQL, and handled web hosting, cPanel configuration, and ongoing backend maintenance.",
    backendFeatures: [
      "Enquiry submission processing and spam protection",
      "Relational MySQL storage for prospect leads and course preferences",
      "Admin view for filtering and responding to new student enquiries",
      "Optimized static asset delivery and database connection pooling"
    ],
    architecture: "Web Form -> PHP REST/Form Handler -> Sanitization & Validation -> MySQL Storage -> Email Notification Service",
    challenges: "Ensuring zero spam submissions through the public enquiry form without adding friction for non-technical student applicants.",
    solution: "Implemented honeypot fields, timestamp verification, and rigorous server-side regex validation.",
    result: "Live and active at keshasricollections.in, capturing student enquiries reliably with zero downtime."
  },
  {
    id: "smart-parking-system",
    title: "Smart Parking System (SPS)",
    shortDescription: "Automated vehicle check-in/check-out portal with real-time parking slot state management and duration logging.",
    category: "php",
    categoryLabel: "PHP / MySQL",
    tags: ["PHP", "MySQL", "AJAX", "JavaScript", "Bootstrap"],
    type: "Freelance IoT / Web Application",
    client: "Furniicare Solutions",
    role: "Freelance Backend Developer",
    url: "https://sps.furniicare.com/login",
    hasLiveUrl: true,
    hasCaseStudy: true,
    featured: true,
    problem: "Parking facility attendants needed a reliable web interface to register vehicle entry/exit, calculate accurate parking durations, and monitor slot occupancy.",
    contribution: "Developed backend authentication, slot allocation logic, automated entry/exit timestamp calculation, and AJAX endpoints for real-time slot status polling.",
    backendFeatures: [
      "Secure attendant authentication and session handling",
      "Dynamic parking slot allocation and state transitions (Available/Occupied)",
      "Automated time calculation algorithms for parked durations",
      "JSON endpoints for dynamic UI slot grid updates"
    ],
    architecture: "Staff Terminal -> PHP API Endpoints -> Slot Management Controller -> MySQL Vehicle & Slot Tables",
    challenges: "Updating slot occupancy status in real time across multiple attendant terminals simultaneously.",
    solution: "Built asynchronous AJAX polling endpoints querying indexed slot status records with minimal payload overhead.",
    result: "Active at sps.furniicare.com/login, providing seamless vehicle check-in and automated duration calculation."
  },
  {
    id: "soilsons-enterprise-system",
    title: "Soilsons Enterprise Operations Software",
    shortDescription: "Enterprise business application for managing operational records, product transactions, and inventory data workflows.",
    category: "laravel",
    categoryLabel: "Laravel / PHP",
    tags: ["Laravel", "PHP", "MySQL", "MVC", "cPanel"],
    type: "Enterprise Web Software",
    client: "Soilsons Lingam Seals",
    role: "Freelance Backend Developer",
    url: "https://soilsons.lingamseals.in/software/public/",
    hasLiveUrl: true,
    hasCaseStudy: true,
    featured: true,
    problem: "Enterprise operations required a centralized digital system to manage operational records, customer orders, and dispatch logs instead of manual spreadsheets.",
    contribution: "Developed backend routes, controllers, and Eloquent models for transaction data processing. Structured relational tables in MySQL and configured cPanel web hosting and deployment.",
    backendFeatures: [
      "Modular MVC architecture with clean controller logic",
      "Comprehensive CRUD operations for business transactions and records",
      "Normalized relational database schema with indexed queries",
      "Session-based authentication and secure credential handling"
    ],
    architecture: "Web UI -> Laravel Routes & Middlewares -> Record Controllers -> Eloquent Models -> MySQL Database",
    challenges: "Structuring complex many-to-many relationships between client accounts, operational orders, and product dispatch records.",
    solution: "Designed clean pivot tables with foreign key constraints and eager loaded relationships to prevent N+1 query bottlenecks.",
    result: "Live at soilsons.lingamseals.in/software/public/, driving everyday business data processing."
  }
];

/**
 * Complete list of all 26 Freelancing / Live Client Projects from Google Spreadsheet
 */
const ALL_FREELANCE_PROJECTS = [
  {
    id: 1,
    name: "Akam Psychiatry Website",
    url: "http://akampsychiatry.in/",
    category: "Healthcare",
    tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    server: "lingamseals",
    status: "Live & Active",
    description: "Healthcare clinic information and patient enquiry portal for psychiatric care services."
  },
  {
    id: 2,
    name: "Avinashi Care Foundation Website",
    url: "https://avinashicarefoundation.in/",
    category: "Non-Profit / Health",
    tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    server: "lingamseals",
    status: "Live & Active",
    description: "Foundation and rehabilitation healthcare web portal providing program details and enquiry workflows."
  },
  {
    id: 3,
    name: "Anbu Hospital Software",
    url: "https://anbu.hms-society.com/",
    category: "Healthcare / ERP",
    tech: ["PHP", "Laravel", "MySQL", "RBAC"],
    server: "hms",
    status: "Live & Active",
    description: "Specialized clinical software for patient records, daily consultations, and department workflows."
  },
  {
    id: 4,
    name: "GH Hospital Management Software",
    url: "https://gh.hms-society.com/",
    category: "Healthcare / ERP",
    tech: ["PHP", "Laravel", "MySQL", "RBAC", "REST API"],
    server: "lingamseals",
    status: "Live & Active",
    description: "Full-fledged hospital management system featuring doctor scheduling, patient admissions, and role-based access."
  },
  {
    id: 5,
    name: "ICDS Management Software",
    url: "http://icds.hms-society.com/",
    category: "Government / Community",
    tech: ["PHP", "CodeIgniter", "MySQL", "CRUD"],
    server: "hms",
    status: "Live & Active",
    description: "Community child development and nutritional support monitoring system."
  },
  {
    id: 6,
    name: "Anbalayam Care Software",
    url: "https://anbalayam.lingamseals.in/",
    category: "Healthcare / Social",
    tech: ["PHP", "MySQL", "JavaScript", "cPanel"],
    server: "lingamseals",
    status: "Live & Active",
    description: "Rehabilitation patient registry, medical history tracker, and care management software."
  },
  {
    id: 7,
    name: "Akam Psychiatry Clinical Software",
    url: "http://soft.akampsychiatry.in/",
    category: "Clinical Software",
    tech: ["PHP", "Laravel/CodeIgniter", "MySQL", "RBAC"],
    server: "lingamseals",
    status: "Live & Active",
    description: "Internal clinical consultation records, prescription management, and appointment pipeline."
  },
  {
    id: 8,
    name: "Avinashi Care Internal Software",
    url: "http://soft.avinashicarefoundation.in/",
    category: "Clinical Software",
    tech: ["PHP", "MySQL", "AJAX", "CRUD"],
    server: "lingamseals",
    status: "Live & Active",
    description: "Inpatient admission tracking, therapy scheduling, and medical staff management system."
  },
  {
    id: 9,
    name: "Moonkil Trust Website",
    url: "http://moonkiltrust2015.in",
    category: "Non-Profit",
    tech: ["PHP", "HTML/CSS", "JavaScript", "MySQL"],
    server: "furniicare",
    status: "Live & Active",
    description: "Charitable trust portal highlighting community initiatives, welfare programs, and donor outreach."
  },
  {
    id: 10,
    name: "Seed Management System",
    url: "#",
    category: "AgriTech",
    tech: ["PHP", "MySQL", "CRUD Operations"],
    server: "lingamseals (Localhost/Staging)",
    status: "Staging Completed",
    description: "Agricultural inventory and seed batch distribution tracking module."
  },
  {
    id: 11,
    name: "S2 Hitham Healthcare Website",
    url: "https://s2.furniicare.com/",
    category: "Healthcare",
    tech: ["PHP", "MySQL", "Bootstrap", "AJAX"],
    server: "furniicare",
    status: "Live & Active",
    description: "Health and wellness service directory with direct consultation enquiry routing."
  },
  {
    id: 12,
    name: "Tukshop FnB System",
    url: "https://tukshop.trinovafnb.in",
    category: "Food & Beverage",
    tech: ["PHP", "MySQL", "JavaScript", "REST API"],
    server: "lingamseals",
    status: "Live & Active",
    description: "Food and beverage ordering portal with menu category filtering and order intake workflows."
  },
  {
    id: 13,
    name: "Brindhavanam Care Software",
    url: "https://brindhavan.furniicare.com/",
    category: "Healthcare / Care Home",
    tech: ["PHP", "MySQL", "RBAC", "MVC"],
    server: "furniicare",
    status: "Live & Active",
    description: "Residential patient care, dietary planning, and daily attendant check-in system."
  },
  {
    id: 14,
    name: "BluePhysio Physiotherapy Website",
    url: "https://bluephysio.furniicare.com/",
    category: "Healthcare / Therapy",
    tech: ["PHP", "HTML5", "CSS3", "JavaScript"],
    server: "furniicare",
    status: "Live & Active",
    description: "Physiotherapy clinic portal featuring treatment catalog and appointment booking forms."
  },
  {
    id: 15,
    name: "SMS Management Portal",
    url: "https://sms.furniicare.com/",
    category: "Operations",
    tech: ["PHP", "MySQL", "CRUD", "cPanel"],
    server: "furniicare",
    status: "Live & Active",
    description: "Operational management and staff task coordination web platform."
  },
  {
    id: 16,
    name: "Jai Services Website",
    url: "https://jai.furniicare.com/",
    category: "Commercial Services",
    tech: ["PHP", "JavaScript", "HTML/CSS", "MySQL"],
    server: "furniicare",
    status: "Live & Active",
    description: "Service catalog and client enquiry capture system for industrial commercial services."
  },
  {
    id: 17,
    name: "Nest Healthcare Website",
    url: "https://nest.furniicare.com/",
    category: "Healthcare",
    tech: ["PHP", "MySQL", "Bootstrap", "AJAX"],
    server: "furniicare",
    status: "Live & Active",
    description: "Care facility directory with service listings and direct customer assistance requests."
  },
  {
    id: 18,
    name: "Hexarus Tech Portal",
    url: "https://hexarus.furniicare.com/",
    category: "Tech Solutions",
    tech: ["PHP", "MySQL", "JavaScript", "CSS3"],
    server: "furniicare",
    status: "Live & Active",
    description: "Enterprise software services showcase and technological solution inquiry backend."
  },
  {
    id: 19,
    name: "Smart Parking System (SPS)",
    url: "https://sps.furniicare.com/login",
    category: "IoT / Operations",
    tech: ["PHP", "MySQL", "AJAX", "Auth"],
    server: "furniicare",
    status: "Live & Active",
    description: "Real-time parking slot allocation, attendant authentication, and entry/exit calculation."
  },
  {
    id: 20,
    name: "Health Monitoring System (HMS)",
    url: "https://hms.furniicare.com/",
    category: "Healthcare",
    tech: ["PHP", "Laravel/MySQL", "REST API", "RBAC"],
    server: "furniicare",
    status: "Live & Active",
    description: "Vitals logging, continuous health metrics monitoring, and clinical alert dispatch."
  },
  {
    id: 21,
    name: "Plant Disease Detection (PDD)",
    url: "https://pdd.furniicare.com/",
    category: "AgriTech",
    tech: ["PHP", "MySQL", "JavaScript", "File Uploads"],
    server: "furniicare",
    status: "Live & Active",
    description: "Agricultural diagnostic portal for crop health inspections and treatment logs."
  },
  {
    id: 22,
    name: "RoseTrust Portal",
    url: "https://rosetrust.furniicare.com/",
    category: "Non-Profit",
    tech: ["PHP", "MySQL", "HTML5", "CSS3"],
    server: "furniicare",
    status: "Live & Active",
    description: "Charity foundation portal showcasing charitable activities, donations, and volunteer registration."
  },
  {
    id: 23,
    name: "Demo HMS Healthcare Sandbox",
    url: "https://demo.hms-society.com/",
    category: "Healthcare Sandbox",
    tech: ["PHP", "Laravel", "MySQL", "cPanel"],
    server: "hms",
    status: "Live & Active",
    description: "Interactive healthcare workflow demonstration and feature sandbox for prospective clinics."
  },
  {
    id: 24,
    name: "Nesam Community Care Software",
    url: "https://nesam.furniicare.com/",
    category: "Social Care",
    tech: ["PHP", "MySQL", "CRUD", "RBAC"],
    server: "furniicare",
    status: "Live & Active",
    description: "Community outreach records, beneficiary tracking, and volunteer assignment system."
  },
  {
    id: 25,
    name: "Soilsons Enterprise Software",
    url: "https://soilsons.lingamseals.in/software/public/",
    category: "Enterprise ERP",
    tech: ["Laravel", "PHP", "MySQL", "MVC", "cPanel"],
    server: "lingamseals",
    status: "Live & Active",
    description: "Enterprise software for manufacturing operations, inventory data processing, and dispatch management."
  },
  {
    id: 26,
    name: "Edisan Corporate Website",
    url: "https://edisan.furniicare.com/",
    category: "Corporate Services",
    tech: ["PHP", "MySQL", "HTML5", "Bootstrap"],
    server: "furniicare",
    status: "Live & Active",
    description: "Corporate presence and service enquiry management application for commercial clients."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FEATURED_PROJECTS, ALL_FREELANCE_PROJECTS };
}
