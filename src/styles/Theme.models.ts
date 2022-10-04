// TODO - Filter this down to global styles, and move specific colors to their components.
interface Theme {
    background: string;
    primary: string;
    primaryMid: string;
    primaryDarker: string;
    secondary: string;
    secondaryLighter: string;
    secondaryDarker: string;
    accent: string;
    type: string;
    sectionText: string;
    coloredSectionText: string;
    coloredSectionBackground: string;
    name: string;
    resumeButton: string;
    resumeButtonHover: string;
    experienceCardBackground: string;
    skillCardBackground: string;
    contactIconFill: string;
    contactIconHover: string;
}

export const DarkTheme: Theme = {
    background: '#222222',
    primary: '#ecc76f',
    primaryMid: '#ebc265',
    primaryDarker: '#eabf5d',
    secondary: '#4f7fe8',
    secondaryLighter: '#648feb',
    secondaryDarker: '#4a7ce8',
    accent: '#8B43A1',
    type: 'dark',
    sectionText: 'white',
    coloredSectionText: 'white',
    coloredSectionBackground: '#282d39',
    name: 'white',
    resumeButton: 'white',
    resumeButtonHover: '#404040',
    experienceCardBackground: '#2f3646',
    skillCardBackground: '#222222',
    contactIconFill: 'white',
    contactIconHover: '#404040',
};

export const LightTheme: Theme = {
    background: 'white',
    primary: '#648feb',
    primaryMid: '#4f7fe8',
    primaryDarker: '#4a7ce8',
    secondary: '#ebc265',
    secondaryLighter: '#ecc76f',
    secondaryDarker: '#eabf5d',
    accent: '#B4EB4D',
    type: 'light',
    sectionText: '#2b2b2b',
    coloredSectionText: 'white',
    coloredSectionBackground: '#648feb',
    name: 'black',
    resumeButton: '#6b6b6b',
    resumeButtonHover: '#f6f6f6',
    experienceCardBackground: '#4a7ce8',
    skillCardBackground: 'white',
    contactIconFill: '#2b2b2b',
    contactIconHover: '#eaeaea',
};
