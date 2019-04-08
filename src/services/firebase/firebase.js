const firebaseInstance = require("firebase");

// Initialize Firebase
const config = {
  apiKey: "AIzaSyD-TGbhejFgULxMBaPhbgEFi3bD07MxEAI",
  authDomain: "to-do-app-74e61.firebaseapp.com",
  databaseURL: "https://to-do-app-74e61.firebaseio.com",
  projectId: "to-do-app-74e61",
  storageBucket: "to-do-app-74e61.appspot.com",
  messagingSenderId: "112871082841"
};

let instance = null;

const initFirebase = () => {
  instance = firebaseInstance.initializeApp(config);
};

//singleton pattern, always one ini
const getInstance = () => {
  if (!instance) {
    initFirebase();
  }
  return instance;
};
export { initFirebase, getInstance };
