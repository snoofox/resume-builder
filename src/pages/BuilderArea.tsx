import { useContext } from "react";
import { Button } from "@chakra-ui/react";
import "../styles/BuilderArea.css";
import { Footer } from "../components/Footer";
import { ResumeContext } from "../context/ResumeContext";
import { ResumeContextType } from "../models/types";
import { DataCollector } from "../components/DataCollector";
import PropagateLoader from "react-spinners/PropagateLoader";

export const BuilderArea = (props: any) => {
    const { showComponent, setShowComponent, loading, handlePrint } = useContext(
        ResumeContext,
    ) as ResumeContextType;

    const handleSelectNewTemplate = () => {
        setShowComponent(!showComponent);
    };

    return (
        <>
            {loading && <PropagateLoader id="spinner" color="#319795" size={30} />}

            <div id="main-box" className="d-flex justify-content-between mx-4 mt-4 flex-wrap">
                <DataCollector />
                <div id="theme-box-border">{props.theme}</div>
            </div>
            <div className="d-flex justify-content-center flex-wrap">
                <Button
                    className="mx-2 my-5"
                    colorScheme={"teal"}
                    variant={"outline"}
                    onClick={handlePrint}
                >
                    Print
                </Button>
                <Button
                    className="mx-2 my-5"
                    colorScheme={"teal"}
                    variant={"outline"}
                    onClick={handleSelectNewTemplate}
                >
                    Select Another Template
                </Button>
            </div>
            <Footer />
        </>
    );
};
