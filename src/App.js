import React, { useState } from "react"
import Stats from "./Pages/Stats"
import {
    Button,
    Input,
    Heading,
    Box,
    ChakraProvider,
    extendTheme,
} from "@chakra-ui/react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
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

const theme = extendTheme()

function App() {
    const [id, setId] = useState(null)
    return (
        <ChakraProvider theme={theme}>
            <Box
                px="10vh"
                py="100px"
                height="100vh"
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                backgroundColor="rgb(26, 32, 44);"
            >
                <Router>
                    <Route exact path="/">
                        <Box
                            display="flex"
                            flexDir="column"
                            alignItems="center"
                            justifyContent="center"
                            height="100%"
                            width="100%"
                            maxWidth="500px"
                        >
                            <Heading size="4xl" color="white">
                                Enter Code:
                            </Heading>
                            <Box pb="20px" pt="50px" width="100%">
                                <Input
                                    placeholder="CODE"
                                    size="lg"
                                    color="white"
                                    onChange={e => setId(e.target.value)}
                                />
                            </Box>
                            <Link to={`/${id}`}>
                                <Box width="100%">
                                    <Button
                                        colorScheme="blue"
                                        width="100px"
                                        size="lg"
                                    >
                                        Enter
                                    </Button>
                                </Box>
                            </Link>
                        </Box>
                    </Route>
                    <Route path="/:id">
                        <Stats />
                    </Route>
                </Router>
            </Box>
        </ChakraProvider>
    )
}

export default App
