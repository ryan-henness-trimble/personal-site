import { h } from 'preact';
import { useState } from 'preact/hooks';
import styled from 'styled-components';
import Header from './components/Header';
import Section from './components/Section';
import './styles/styles.css';
import { useEffect } from 'react';

const tabs = [
    { id: 'about', display: 'About' },
    { id: 'exp', display: 'Experience' },
    { id: 'skills', display: 'Skills' },
];

const App = () => {
    const [currentTabId, setCurrentTabId] = useState('about');
    useAos();

    const handleSetTab = (tabId: string) => {
        setCurrentTabId(tabId);
    };

    return (
        <AppStyles>
            <Header currentTabId={currentTabId} onSetTab={handleSetTab} tabs={tabs} />
            <Content>
                <Section id="about" title="About 📝">
                    <div>
                        Hey, I’m Ryan 👋 I’m a developer based in Portland, Oregon. I graduated with
                        a Bachelor of Science in Computer Science from the University of Portland in
                        2018. I’ve gained 4+ years of industry experience mainly focused on frontend
                        development.
                    </div>
                    <div>
                        I first learned that I like to bring ideas to life with video editing when I
                        was younger. This passion, along with my knack for problem solving, helped
                        spark my interest for software development. I enjoy having a vision of what
                        something is supposed to be, working with others through the problems
                        creating it, and being rewarded when seeing it come to life.
                    </div>
                    <div>
                        In my free time I enjoy lifting weights and running (even though it stinks),
                        playing basketball, video games (I still play a ton of Halo 3), and getting
                        out with friends to hang out.
                    </div>
                </Section>
                <Section id="exp" title="Experience 😎">
                    <h2>Currently</h2>
                    <div>I work at Trimble Viewpoint.</div>
                    <h2>In the past</h2>
                    <div>I used to work other places.</div>
                </Section>
                <Section id="skills" title="Skills 🔨">
                    JavaScript/TypeScript, React/Angular, Stencil.js (web components), Styled
                    Components, CSS, HTML
                </Section>
                <Section title="About this site">
                    This site was built using the Preact CLI, a light-weight alternative to React.
                </Section>
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
    margin-top: 32px;
`;

const useAos = () => {
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore-next-line
        window.AOS?.init();
    }, []);
};
