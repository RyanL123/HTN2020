import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
}
const theme = extendTheme({ config })
ReactDOM.render(
    <ChakraProvider theme={theme}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ChakraProvider>,
    document.getElementById("root")
)
