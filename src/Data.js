import firestoreParser from "firestore-parser";

export const API_KEY = "AIzaSyCKLNDr1pz4KlhmeVRxs5cb1qTCmB0zsiw";

const subjects_base =
  "https://firestore.googleapis.com/v1/projects/hci-quiz-dd353/databases/(default)/documents/subjects";
const quizes_base =
  "https://firestore.googleapis.com/v1/projects/hci-quiz-dd353/databases/(default)/documents/quiz";

export const getSubjects = (cb) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    fetch(subjects_base, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.idToken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const subjects = [];
        data.documents.forEach((doc) => {
          subjects.push({
            // split and take last
            id: doc.name.split("/").pop(),
            icon: doc.fields.icon.stringValue,
            name: doc.fields.name.stringValue,
          });
        });
        cb(subjects);
      });
  }
};

export const getQuizes = (cb) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    fetch(quizes_base, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.idToken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const parsed = firestoreParser(data);
        const quizes = [];
        parsed.documents.forEach((doc) => {
          quizes.push({
            ...doc.fields,
            id: doc.name.split("/").pop(),
          });
        });
        cb(quizes);
      });
  }
};

export const signInWithEmailPassword = (email, password, cb) => {
  let baseUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
  let data = {
    email,
    password,
    returnSecureToken: true,
  };
  return fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      cb(data.error, data);
    });
};

export const signUpWithEmailPassword = (email, password, cb) => {
  let baseUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
  let data = {
    email,
    password,
    returnSecureToken: true,
  };
  return fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      cb(data.error, data);
    });
};
