import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box, Spinner, Heading, Progress, Button } from "@chakra-ui/react"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"
import SEO from "../SEO"
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

const Stats = () => {
    let { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [date, setDate] = useState(null)
    const [events, setEvents] = useState([])
    const [eventProgress, seteventProgress] = useState([])
    const [total, setTotal] = useState(null)
    const ref = firebase.firestore().collection("data").doc(id)

    // Runs only once
    useEffect(() => {
        ref.get()
            .then(function (doc) {
                if (doc.exists) {
                    console.log(doc.data())
                    let date = new Date(doc.data().dateCreated).toLocaleString()
                    setDate(date)
                    setEvents(doc.data().events)
                    setLoading(false)
                    console.log(date)
                } else {
                    setDate("That code does not exist")
                    setLoading(false)
                }
            })
            .catch(function (error) {
                console.log("Error getting document:", error)
            })
    }, [])

    // Get total seconds from all events
    // Should probably calculate this in voiceflow to make it easier
    // but I guess its too late now ¯\_(ツ)_/¯
    useEffect(() => {
        let cur = 0
        for (let i = 0; i < events.length; i++) {
            cur += events[i].hours + events[i].minutes
        }

        setTotal(cur)
    }, [events])

    useEffect(() => {
        // sort based on total time
        let eventProgress = events.sort(
            (a, b) => b.hours + b.minutes - (a.hours + a.minutes)
        )
        // map to components
        eventProgress = events.map(event => {
            let totalTime = event.hours + event.minutes
            return (
                <Box my="50px">
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Heading color="white" mb="6px" size={"lg"}>
                            {event.name}
                        </Heading>
                        <Heading color="white" size={"md"}>
                            {Math.floor(event.hours / 3600)} hours{" "}
                            {event.minutes / 60} minutes
                        </Heading>
                    </Box>
                    <Progress
                        value={(parseInt(totalTime) * 100) / total}
                        colorScheme={event.colorScheme}
                    />
                </Box>
            )
        })
        seteventProgress(eventProgress)
        console.log(eventProgress)
        console.log(total)
    }, [total])

    if (loading) {
        return (
            <Box>
                <Spinner size="xl" color="white" />
            </Box>
        )
    } else {
        return (
            <>
                <SEO title={id} />
                <Box width="100%" maxWidth="500px">
                    <Box
                        mb="50px"
                        display="flex"
                        flexDir="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Link to="/">
                            <Button
                                leftIcon={<ArrowBackIcon />}
                                mb="50px"
                                variant="link"
                            >
                                Back
                            </Button>
                        </Link>
                        <Heading color="white">{date}</Heading>
                        <Heading color="white" size="md">
                            Total Time: {Math.floor(total / 3600)} hours{" "}
                            {(total % 3600) / 60} minutes
                        </Heading>
                    </Box>
                    {eventProgress}
                </Box>
            </>
        )
    }
}

export default Stats
