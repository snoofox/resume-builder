export interface PersonalData {
    profileImage: string;
    name: string;
    summary: string;
    profile: string;
    address: string;
    phone: string;
    email: string;
    skill: string;
}

export interface ProjectData {
    projectTitles: { [key: string]: string };
    projectDesc: { [key: string]: string };
}

export interface EducationData {
    educationTitles: { [key: string]: string };
    educationDesc: { [key: string]: string };
}

export interface WorkData {
    workTitles: { [key: string]: string };
    workDesc: { [key: string]: string };
}

export interface AwardData {
    awards: string;
}

export interface ResumeContextType {
    initialData: {
        personalData: PersonalData;
        projectData: ProjectData;
        educationData: EducationData;
        workData: WorkData;
        awardData: AwardData;
    };
    selectBtn: boolean;
    setSelectBtn: React.Dispatch<React.SetStateAction<boolean>>;
    checkAward: boolean;
    setCheckAward: React.Dispatch<React.SetStateAction<boolean>>;
    componentRef: React.RefObject<HTMLElement>;
    handlePrint: () => void;
    currentTheme: string;
    setCurrentTheme: React.Dispatch<React.SetStateAction<string>>;
    showComponent: boolean;
    setShowComponent: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    themeData: any; // Define a more specific type if possible
    setThemeData: React.Dispatch<React.SetStateAction<any>>;
    checkProj: boolean;
    setCheckProj: React.Dispatch<React.SetStateAction<boolean>>;
    checkWork: boolean;
    setCheckWork: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IProfile {
    id: string;
    name?: string;
    username?: string;
}
