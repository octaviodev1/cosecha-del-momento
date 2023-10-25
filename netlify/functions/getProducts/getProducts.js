/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  where,
  query,
  getDocs,
} = require("firebase/firestore/lite");

require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env["VITE_API_KEY"] || process.env["API_KEY"],
  authDomain: process.env["VITE_AUTH_DOMAIN"] || process.env["AUTH_DOMAIN"],
  projectId: process.env["VITE_PROJECT_ID"] || process.env["PROJECT_ID"],
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const handler = async (event) => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
