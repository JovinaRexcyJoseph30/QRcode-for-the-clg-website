
import { Department } from './types';

export const DEPARTMENTS: Department[] = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    description: 'The Department of Computer Science and Engineering is a center of excellence in computer science and information technology, offering a comprehensive curriculum and state-of-the-art facilities. Our mission is to educate students to be successful, ethical, and effective problem-solvers who will contribute positively to society.',
    head: 'Dr. Evelyn Reed',
    studentCount: 450,
    staff: [
      { id: 1, name: 'Dr. Evelyn Reed', photoUrl: 'https://picsum.photos/seed/prof1/200/200', designation: 'Professor & Head', qualification: 'Ph.D. in AI', subjects: ['Artificial Intelligence', 'Machine Learning'] },
      { id: 2, name: 'Dr. Samuel Chen', photoUrl: 'https://picsum.photos/seed/prof2/200/200', designation: 'Professor', qualification: 'Ph.D. in Cybersecurity', subjects: ['Network Security', 'Cryptography'] },
      { id: 3, name: 'Dr. Priya Sharma', photoUrl: 'https://picsum.photos/seed/prof3/200/200', designation: 'Associate Professor', qualification: 'M.Tech in Data Science', subjects: ['Data Structures', 'Algorithms', 'Database Management'] },
      { id: 4, name: 'Mr. David Lee', photoUrl: 'https://picsum.photos/seed/prof4/200/200', designation: 'Assistant Professor', qualification: 'M.Sc in Computer Science', subjects: ['Web Development', 'Software Engineering'] },
    ],
    achievements: [
      { id: 1, description: 'Won National Level Hackathon "CodeStorm 2023"', year: 2023 },
      { id: 2, description: 'Published 15 papers in reputed international journals', year: 2023 },
      { id: 3, description: 'Received grant for "AI in Healthcare" research project', year: 2022 },
    ],
    notes: [
      { id: 1, title: 'Introduction to Algorithms', pdfContent: 'An algorithm is a finite sequence of well-defined instructions, typically used to solve a class of specific problems or to perform a computation. This document covers fundamental concepts like Big O notation for complexity analysis, sorting algorithms such as Quicksort and Mergesort, and basic data structures like arrays, linked lists, and trees. Asymptotic analysis is a key concept to understand an algorithm\'s efficiency.' },
      { id: 2, title: 'Database Management Systems', pdfContent: 'A Database Management System (DBMS) is software designed to store, retrieve, define, and manage data in a database. Key topics include the relational model, SQL (Structured Query Language), normalization (1NF, 2NF, 3NF), and transaction management (ACID properties). Understanding ER diagrams is crucial for database design.' },
    ],
  },
  {
    id: 'eee',
    name: 'Electrical & Electronics Engineering',
    description: 'The EEE department provides a strong foundation in electrical engineering principles and practices. Our curriculum is designed to equip students with the knowledge and skills to excel in areas like power systems, electronics, control systems, and communication.',
    head: 'Dr. Benjamin Carter',
    studentCount: 380,
    staff: [
      { id: 1, name: 'Dr. Benjamin Carter', photoUrl: 'https://picsum.photos/seed/prof5/200/200', designation: 'Professor & Head', qualification: 'Ph.D. in Power Systems', subjects: ['Power Electronics', 'Renewable Energy'] },
      { id: 2, name: 'Dr. Olivia Martinez', photoUrl: 'https://picsum.photos/seed/prof6/200/200', designation: 'Professor', qualification: 'Ph.D. in Control Systems', subjects: ['Control Theory', 'Robotics'] },
      { id: 3, name: 'Mr. Kenji Tanaka', photoUrl: 'https://picsum.photos/seed/prof7/200/200', designation: 'Assistant Professor', qualification: 'M.Eng in VLSI Design', subjects: ['Digital Logic Design', 'Microprocessors'] },
    ],
    achievements: [
      { id: 1, description: 'Best Paper Award at IEEE Power & Energy Society Conference', year: 2023 },
      { id: 2, description: 'First place in National Robotics Competition', year: 2022 },
    ],
    notes: [
      { id: 1, title: 'Circuit Theory Fundamentals', pdfContent: 'Circuit theory is the foundation of electrical engineering. This document explains Ohm\'s Law (V=IR), Kirchhoff\'s Current Law (KCL), and Kirchhoff\'s Voltage Law (KVL). We will analyze simple series and parallel circuits, and introduce concepts like resistance, capacitance, and inductance. Thevenin\'s and Norton\'s theorems are powerful tools for circuit simplification.' },
    ],
  },
];
