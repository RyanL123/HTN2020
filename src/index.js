import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme()
ReactDOM.render(
    <ChakraProvider theme={theme}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ChakraProvider>,
    document.getElementById("root")
)
