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
    primary: 'var(--col-personal-gold-lighter)',
    primaryMid: 'var(--col-personal-gold)',
    primaryDarker: 'var(--col-personal-gold-darker)',
    secondary: 'var(--col-personal-blue-mid)',
    secondaryLighter: 'var(--col-personal-blue)',
    secondaryDarker: 'var(--col-personal-blue-darker)',
    accent: 'var(--col-personal-purple)',
    type: 'dark',
};

export const LightTheme: Theme = {
    background: 'white',
    primary: 'var(--col-personal-blue)',
    primaryMid: 'var(--col-personal-blue-mid)',
    primaryDarker: 'var(--col-personal-blue-darker)',
    secondary: 'var(--col-personal-gold)',
    secondaryLighter: 'var(--col-personal-gold-lighter)',
    secondaryDarker: 'var(--col-personal-gold-darker)',
    accent: 'var(--col-personal-green)',
    type: 'light',
};
