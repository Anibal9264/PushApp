importScripts('https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js');

firebase.initializeApp(
    {
        apiKey: "AIzaSyCneK0sI3wrOA-0_hgc8wcHjYfrcDn6LMI",
        authDomain: "notificaciones-56016.firebaseapp.com",
        projectId: "notificaciones-56016",
        storageBucket: "notificaciones-56016.appspot.com",
        messagingSenderId: "60764263937",
        appId: "1:60764263937:web:980b59ae5ae98b13535200"
    }
);

const notification = firebase.messaging();