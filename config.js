import firebase from 'firebase';

  var firebaseConfig = {
    //paste your SDK here
apiKey: "AIzaSyAz-4QA8IX-S1z6HLtzWUk9VuQ1E6lKm_E",
  authDomain: "team-voting-app-296ab.firebaseapp.com",
  projectId: "team-voting-app-296ab",
  storageBucket: "team-voting-app-296ab.appspot.com",
  messagingSenderId: "211751917839",
  appId: "1:211751917839:web:b917f79aa84e60365e067a"


    
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();