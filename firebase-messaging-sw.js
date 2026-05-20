importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
apiKey: "AIzaSyChFlUeEs9OPtb8g-lhTiiNoDp_YegEI-s",
authDomain: "comunidademaosestendidas.firebaseapp.com",
databaseURL: "https://comunidademaosestendidas-default-rtdb.firebaseio.com",
projectId: "comunidademaosestendidas",
storageBucket: "comunidademaosestendidas.firebasestorage.app",
messagingSenderId: "115001016227",
appId: "1:115001016227:web:0df485d449944fea496416"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {

self.registration.showNotification(
payload.notification.title,
{
body: payload.notification.body,
icon: 'icon.png'
}
);

});