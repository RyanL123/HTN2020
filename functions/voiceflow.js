const firebase = require("firebase")
const config = {
    apiKey: "AIzaSyCUMKP7f1rcG94J_Bb2TpFXA4lyL-aAMk4",
    authDomain: "htn2020-c3c0b.firebaseapp.com",
    projectId: "htn2020-c3c0b",
    storageBucket: "htn2020-c3c0b.appspot.com",
    messagingSenderId: "352855450184",
    appId: "1:352855450184:web:bfe901aebf130800de2e7d",
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

const ref = firebase.firestore().collection("data")

exports.handler = async function (event, context, callback) {
    if (event.httpMethod === "POST") {
        const { name, hours, minutes, colorScheme, session_id } = JSON.parse(
            event.body
        )
        const res = await ref
            .doc(session_id)
            .update({ colorScheme: colorScheme, events: [] })
        console.log(
            ref.doc(session_id).update({
                events: firebase.firestore.FieldValue.arrayUnion({
                    hours: hours,
                    minutes: minutes,
                    name: name,
                }),
            })
        )
        return {
            statusCode: 200,
            body: JSON.stringify({
                name: name,
                hours: hours,
                minutes: minutes,
                colorScheme: colorScheme,
                session_id: session_id,
            }),
        }
    }
}
