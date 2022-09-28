import { h } from 'preact';
import styled from 'styled-components';
import Header from './sections/components/Header';
import './styles/styles.css';
import useAos from './hooks/useAos';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import ThisSite from './sections/ThisSite';

const App = () => {
    useAos();

    return (
        <AppStyles>
            <Header />
            <Content>
                <About />
                <Experience />
                <Skills />
                <Contact />
                <ThisSite />
            </Content>
        </AppStyles>
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
