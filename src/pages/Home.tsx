import { useContext } from "react";
import { Intro } from "./Intro";
import { ResumeContext } from "../context/ResumeContext";
import { ResumeContextType } from "../models/types";
import { BuilderArea } from "./BuilderArea";
import { Theme1 } from "../pages/Themes/Theme1/Theme1";
import { Theme2 } from "../pages/Themes/Theme2/Theme2";
import { Theme3 } from "../pages/Themes/Theme3/Theme3";

export const Home = () => {
    const { currentTheme, showComponent, themeData, componentRef } = useContext(
        ResumeContext,
    ) as ResumeContextType;

    return (
        <>
            {!showComponent && <Intro />}
            {showComponent && currentTheme === "Theme1" && (
                <BuilderArea theme={<Theme1 componentRef={componentRef} themeData={themeData} />} />
            )}
            {showComponent && currentTheme === "Theme2" && (
                <BuilderArea theme={<Theme2 componentRef={componentRef} themeData={themeData} />} />
            )}
            {showComponent && currentTheme === "Theme3" && (
                <BuilderArea theme={<Theme3 componentRef={componentRef} themeData={themeData} />} />
            )}
        </>
    );
};
