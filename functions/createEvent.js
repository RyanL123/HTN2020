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

exports.handler = async function (event, context, callback) {
    const ref = firebase.firestore().collection("data")
    if (event.httpMethod === "POST") {
        const { name, hours, minutes, colorScheme, session_id } = JSON.parse(
            event.body
        )
        ref.doc(session_id)
            .get()
            .then(function (doc) {
                if (doc.exists) {
                    let events = doc.data().events
                    events = [
                        ...events,
                        {
                            colorScheme: colorScheme,
                            hours: hours,
                            minutes: minutes,
                            name: name,
                        },
                    ]
                    let dateCreated = doc.data().dateCreated
                    const res = await ref.doc(session_id).set({
                        dateCreated: dateCreated,
                        events: events,
                    })
                } else {
                    return {
                        statusCode: 400,
                        body: "Document does not exist",
                    }
                }
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
            })
            .catch(function (error) {
                return {
                    statusCode: 400,
                    body: "Error getting document:" + error,
                }
            })
    }
}
