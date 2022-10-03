import { h } from 'preact';
import styled, { ThemeProvider } from 'styled-components';
import Header from './sections/components/Header';
import './styles/styles.css';
import useAos from './hooks/useAos';
import About from './sections/About/About';
import Experience from './sections/Experience/Experience';
import Contact from './sections/Contact/Contact';
import { DarkTheme, LightTheme } from './styles/Theme.models';
import useScheme from './hooks/useScheme';

const App = () => {
    const { scheme, handleChangeScheme } = useScheme();
    useAos();

    return (
        <ThemeProvider theme={scheme === 'dark' ? DarkTheme : LightTheme}>
            <AppStyles>
                <Header currentScheme={scheme} onToggleScheme={handleChangeScheme} />
                <Content>
                    <About />
                    <Experience />
                    <Contact />
                </Content>
            </AppStyles>
        </ThemeProvider>
    );
};

export default App;

const AppStyles = styled.div`
    font-family: 'Roboto', sans-serif;
`;

const Content = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const Link = styled.span`
    color: var(--col-personal-gold);
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;
