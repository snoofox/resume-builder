import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ResumeProvider } from "./context/ResumeContext.tsx";
import App from "./App.tsx";
import "./index.css";

const theme = extendTheme({
    colors: {
        primary: "#141519",
        secondary: "#232329",
        brand: "#8e4585",
        brandLight: "#a26295",
        brandDark: "#7a3875",
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ResumeProvider>
                <Router>
                    <App />
                </Router>
            </ResumeProvider>
        </ChakraProvider>
    </React.StrictMode>,
);
