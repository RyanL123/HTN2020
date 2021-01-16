import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { Box, Spinner } from "@chakra-ui/react"
import firebase from "firebase"

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

export default () => {
    let { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [num, setNum] = useState(null)
    const ref = firebase.firestore().collection("data").doc(id)

    ref.get()
        .then(function (doc) {
            if (doc.exists) {
                console.log(doc.data())
                setNum(doc.data().number)
                setLoading(false)
            } else {
                setNum("That code does not exist")
                setLoading(false)
            }
        })
        .catch(function (error) {
            console.log("Error getting document:", error)
        })
    if (loading) {
        return (
            <Box>
                <Spinner />
            </Box>
        )
    } else {
        return <Box>{num}</Box>
    }
}
