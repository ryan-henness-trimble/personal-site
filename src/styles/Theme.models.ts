interface Theme {
    backgroundColor: string;
    colorPrimary: string;
    colorPrimaryMid: string;
    colorPrimaryDarker: string;
    colorSecondary: string;
    colorSecondaryLighter: string;
    colorSecondaryDarker: string;
    colorAccent: string;
    type: string;
}

export const DarkTheme: Theme = {
    backgroundColor: '#222222',
    colorPrimary: '#ecc76f',
    colorPrimaryMid: '#ebc265',
    colorPrimaryDarker: '#eabf5d',
    colorSecondary: '#4f7fe8',
    colorSecondaryLighter: '#648feb',
    colorSecondaryDarker: '#4a7ce8',
    colorAccent: '#8B43A1',
    type: 'dark',
};

export const LightTheme: Theme = {
    backgroundColor: 'white',
    colorPrimary: '#648feb',
    colorPrimaryMid: '#4f7fe8',
    colorPrimaryDarker: '#4a7ce8',
    colorSecondary: '#ebc265',
    colorSecondaryLighter: '#ecc76f',
    colorSecondaryDarker: '#eabf5d',
    colorAccent: '#B4EB4D',
    type: 'light',
};