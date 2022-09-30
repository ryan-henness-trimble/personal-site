import { h } from 'preact';
import styled from 'styled-components';
import Header from './sections/components/Header';
import './styles/styles.css';
import useAos from './hooks/useAos';
import About from './sections/About/About';
import Experience from './sections/Experience/Experience';
import Contact from './sections/Contact/Contact';

const App = () => {
    useAos();

    return (
        <AppStyles>
            <Header />
            <Content>
                <About />
                <Experience />
                <Contact />
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
