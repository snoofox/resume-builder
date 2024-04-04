import { useRef, useState, createContext } from "react";
import { ResumeContextType } from "../models/types";
import { useReactToPrint } from "react-to-print";

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

const ResumeProvider = ({ children }) => {
    const componentRef = useRef<HTMLElement>(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        onBeforePrint: () => {
            setLoading(true);
        },
        onAfterPrint: () => {
            setLoading(false);
        },
    });

    const initialData = {
        personalData: {
            profileImage: "https://i.postimg.cc/SKDZx4Kr/user.png",
            name: "Your Name",
            summary:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            profile: "Work Profile",
            address: "Address Line",
            phone: "Phone Number",
            email: "Email Address",
            skill: "Your, Skills, are, shown, here",
        },
        projectData: {
            projectTitles: { pTitle1: "Project Title 1" },
            projectDesc: { pDescription1: "Project Description 1" },
        },
        educationData: {
            educationTitles: { eTitle1: "Education Title 1" },
            educationDesc: { eDescription1: "Education Description 1" },
        },
        workData: {
            workTitles: { wTitle1: "Work Title 1" },
            workDesc: { wDescription1: "Work Description 1" },
        },
        awardData: {
            awards: "Certificate of Appreciation - 2023, Certificate of Appreciation - 2024",
        },
    };

    const [themeData, setThemeData] = useState<any>(initialData);
    const [checkProj, setCheckProj] = useState<boolean>(false);
    const [checkWork, setCheckWork] = useState<boolean>(false);
    const [checkAward, setCheckAward] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [showComponent, setShowComponent] = useState<boolean>(false);
    const [currentTheme, setCurrentTheme] = useState<string>("Theme1");
    const [selectBtn, setSelectBtn] = useState<boolean>(true);

    return (
        <ResumeContext.Provider
            value={{
                initialData,
                selectBtn,
                setSelectBtn,
                checkAward,
                setCheckAward,
                componentRef,
                handlePrint,
                currentTheme,
                setCurrentTheme,
                showComponent,
                setShowComponent,
                loading,
                setLoading,
                themeData,
                setThemeData,
                checkProj,
                setCheckProj,
                checkWork,
                setCheckWork,
            }}
        >
            {children}
        </ResumeContext.Provider>
    );
};

export { ResumeContext, ResumeProvider };
