import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import styled from 'styled-components';
import Header from './components/Header';
import Section from './components/Section';
import './styles/styles.css';

const tabs = [
    { id: 'about', display: 'About' },
    { id: 'exp', display: 'Experience' },
    { id: 'skills', display: 'Skills' },
];

const App = () => {
    const [currentTabId, setCurrentTabId] = useState('about');

    const handleSetTab = (tabId: string) => {
        setCurrentTabId(tabId);
    };

    return (
        <AppStyles>
            <Header currentTabId={currentTabId} onSetTab={handleSetTab} tabs={tabs} />
            <Content>
                <div id="about">
                    <Section title="About 📝">
                        <div>
                            Hey, I’m Ryan 👋 I’m a developer based in Portland, Oregon. I graduated with a Bachelor of Science in Computer Science
                            from the University of Portland in 2018. I’ve gained 4+ years of industry experience mainly focused on frontend
                            development.
                        </div>
                        <div>
                            I first learned that I like to bring ideas to life with video editing when I was younger. This passion, along with my
                            knack for problem solving, helped spark my interest for software development. I enjoy having a vision of what something is
                            supposed to be, working through the problems creating it, and then being rewarded when seeing it come to life.
                        </div>
                    </Section>
                </div>
                <SectionDivider />
                <div id="exp">
                    <Section title="Experience 😎">Hello!</Section>
                </div>
                <SectionDivider />
                <div id="skills">
                    <Section title="Skills ⛏️">Hello!</Section>
                </div>
            </Content>
        </AppStyles>
    );
};

export default App;

const AppStyles = styled.div`
    font-family: 'Roboto', sans-serif;
    scroll: smooth;
`;

const Content = styled.div`
    margin-top: 32px;
`;

const SectionDivider = styled.div`
    background-color: #eaeaea;
    height: 1px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 48px;
    width: 178px;
`;
