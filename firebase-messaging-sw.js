// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: 'AIzaSyDSJH7L-FYOst0lwcMlgljK7Z3xdT2DN2Y'
});

const messaging = firebase.messaging();