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
};
