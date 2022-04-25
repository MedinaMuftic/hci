import {
  BarChart,
  Cloud,
  DataObject,
  NetworkWifi,
  PhoneAndroid,
  Speaker,
  Storage,
  Web,
} from "@mui/icons-material";

export const SUBJECTS = [
  { id: "database_systems", name: "Database Systems", Icon: Storage },
  { id: "mobile_programming", name: "Mobile Programming", Icon: PhoneAndroid },
  { id: "web_programming", name: "Web Programming", Icon: Web },
  {
    id: "probability_and_statistics",
    name: "Probability and Statistics",
    Icon: BarChart,
  },
  { id: "computer_networks", name: "Computer Networks", Icon: NetworkWifi },
  {
    id: "object_oriented_programming",
    name: "Object Oriented Programming",
    Icon: DataObject,
  },
  { id: "cloud_computing", name: "Cloud Computing", Icon: Cloud },
  { id: "embedded_systems", name: "Embedded Systems", Icon: Speaker },
];

const quiz1 = {
  name: "Quiz 1",
  id: "db_quiz_1",
  subject: "database_systems",
  questions: [
    {
      id: 1,
      question: "What is Mongo DB?",
      answers: [
        { id: 1, text: "Relational Database" },
        { id: 2, text: "Object Database" },
        { id: 3, text: "List Database" },
        { id: 4, text: "NoSQL Database" },
      ],
      correctAnswer: 4,
    },
    {
      id: 2,
      question: "What does the SQL insert do",
      answers: [
        { id: 1, text: "Inserts a row into a table" },
        { id: 2, text: "Inserts a column into a table" },
        { id: 3, text: "Inserts a row and a column into a table" },
        { id: 4, text: "None of the above" },
      ],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: "Which of the following is true?",
      answers: [
        {
          id: 1,
          text: "Relational database is a database that stores data in tables",
        },
        {
          id: 2,
          text: "Object database is a database that stores data in tables",
        },
        { id: 3, text: "Both" },
      ],
      correctAnswer: 1,
    },
  ],
};
const quiz2 = {
  name: "Quiz 2",
  id: "db_quiz_2",
  subject: "database_systems",
  questions: [
    {
      id: 1,
      question: "What is Mongo DB?",
      answers: [
        { id: 1, text: "Relational Database" },
        { id: 2, text: "Object Database" },
        { id: 3, text: "List Database" },
        { id: 4, text: "NoSQL Database" },
      ],
      correctAnswer: 4,
    },
    {
      id: 2,
      question: "What does the SQL insert do",
      answers: [
        { id: 1, text: "Inserts a row into a table" },
        { id: 2, text: "Inserts a column into a table" },
        { id: 3, text: "Inserts a row and a column into a table" },
        { id: 4, text: "None of the above" },
      ],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: "Which of the following is true?",
      answers: [
        {
          id: 1,
          text: "Relational database is a database that stores data in tables",
        },
        {
          id: 2,
          text: "Object database is a database that stores data in tables",
        },
        { id: 3, text: "Both" },
      ],
      correctAnswer: 1,
    },
  ],
};
const quiz3 = {
  name: "Quiz 3",
  id: "db_quiz_3",
  subject: "database_systems",
  questions: [
    {
      id: 1,
      question: "What is Mongo DB?",
      answers: [
        { id: 1, text: "Relational Database" },
        { id: 2, text: "Object Database" },
        { id: 3, text: "List Database" },
        { id: 4, text: "NoSQL Database" },
      ],
      correctAnswer: 4,
    },
    {
      id: 2,
      question: "What does the SQL insert do",
      answers: [
        { id: 1, text: "Inserts a row into a table" },
        { id: 2, text: "Inserts a column into a table" },
        { id: 3, text: "Inserts a row and a column into a table" },
        { id: 4, text: "None of the above" },
      ],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: "Which of the following is true?",
      answers: [
        {
          id: 1,
          text: "Relational database is a database that stores data in tables",
        },
        {
          id: 2,
          text: "Object database is a database that stores data in tables",
        },
        { id: 3, text: "Both" },
      ],
      correctAnswer: 1,
    },
  ],
};
const quiz4 = {
  name: "Quiz 4",
  id: "db_quiz_4",
  subject: "database_systems",
  questions: [
    {
      id: 1,
      question: "What is Mongo DB?",
      answers: [
        { id: 1, text: "Relational Database" },
        { id: 2, text: "Object Database" },
        { id: 3, text: "List Database" },
        { id: 4, text: "NoSQL Database" },
      ],
      correctAnswer: 4,
    },
    {
      id: 2,
      question: "What does the SQL insert do",
      answers: [
        { id: 1, text: "Inserts a row into a table" },
        { id: 2, text: "Inserts a column into a table" },
        { id: 3, text: "Inserts a row and a column into a table" },
        { id: 4, text: "None of the above" },
      ],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: "Which of the following is true?",
      answers: [
        {
          id: 1,
          text: "Relational database is a database that stores data in tables",
        },
        {
          id: 2,
          text: "Object database is a database that stores data in tables",
        },
        { id: 3, text: "Both" },
      ],
      correctAnswer: 1,
    },
  ],
};

const quiz5 = {
  name: "Quiz 1",
  id: "mp_quiz_1",
  subject: "mobile_programming",
  questions: [
    {
      id: 1,
      question: "What is ADB?",
      answers: [
        { id: 1, text: "Android Debug Bridge" },
        { id: 2, text: "Android Debugger" },
        { id: 3, text: "Android Debugger Bridge" },
      ],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: "What do intents do?",
      answers: [
        { id: 1, text: "Send data to another activity" },
        { id: 2, text: "Send data to another app" },
        { id: 3, text: "Send data to another activity or app" },
        { id: 4, text: "All of the above" },
      ],
      correctAnswer: 4,
    },
    {
      id: 3,
      question: "What is the purpose of a broadcast receiver?",
      answers: [
        { id: 1, text: "To receive data from another activity" },
        { id: 2, text: "To receive data from another app" },
        { id: 3, text: "To receive data from another activity or app" },
        { id: 4, text: "All of the above" },
      ],
      correctAnswer: 4,
    },
  ],
};
const quiz6 = {
  name: "Quiz 1",
  id: "wp_quiz_1",
  subject: "web_programming",
  questions: [
    {
      id: 1,
      question: "What does HTML Stand for",
      answers: [
        { id: 1, text: "Hyper Text Markup Language" },
        { id: 2, text: "Hyper Text Mobile Language" },
        { id: 3, text: "Hydraulic Text Markup Language" },
        { id: 4, text: "Hyper Tool Markup Language" },
      ],
      correctAnswer: 1,
    },
  ],
};

export const QUIZES = [quiz1, quiz2, quiz3, quiz4, quiz5, quiz6];
