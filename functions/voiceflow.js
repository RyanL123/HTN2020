const firebase = require("firebase");
const shortid = require("shortid");

const config = {
    apiKey: "AIzaSyCUMKP7f1rcG94J_Bb2TpFXA4lyL-aAMk4",
    authDomain: "htn2020-c3c0b.firebaseapp.com",
    projectId: "htn2020-c3c0b",
    storageBucket: "htn2020-c3c0b.appspot.com",
    messagingSenderId: "352855450184",
    appId: "1:352855450184:web:bfe901aebf130800de2e7d",
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const ref = firebase.firestore().collection("data");

exports.handler = async function (event, context, callback) {
    if (event.httpMethod === "POST") {
        const { number } = JSON.parse(event.body);
        const id = shortid.generate();
        const res = await ref.doc(id).set({ number: number });
        return {
            statusCode: 200,
            body: JSON.stringify({ id: id }),
        };
    }
};
