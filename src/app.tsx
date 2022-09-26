import { h } from 'preact';
import styled from 'styled-components';
import Header from './components/Header';
import Section from './components/Section';
import './styles/styles.css';
import { useEffect } from 'react';

const App = () => {
    useAos();

    return (
        <AppStyles>
            <Header />
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
                    <div>
                        I work at Trimble Viewpoint. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </div>
                    <h2>In the past</h2>
                    <div>
                        I used to work other places. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </div>
                </Section>
                <Section id="skills" title="Skills 🔨">
                    <div>
                        JavaScript/TypeScript, React/Angular, Stencil.js (web components), Styled
                        Components, CSS, HTML.
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </Section>
                <Section title="About this site">
                    <div>
                        This site was built using the Preact CLI, a light-weight alternative to
                        React.
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
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
