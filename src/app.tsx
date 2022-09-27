import { h } from 'preact';
import styled from 'styled-components';
import Header from './components/Header';
import Section from './components/Section';
import './styles/styles.css';
import { useEffect } from 'react';
import SkillCard from './components/SkillCard';

const App = () => {
    useAos();

    return (
        <AppStyles>
            <Header />
            <Content>
                <div id="about" />
                <Section title="About 📝" light>
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
                <div id="exp" />
                <Section title="Experience 😎">
                    <h2>Currently</h2>
                    <div>
                        I work at Trimble Viewpoint. Want to see something cool? You can find it
                        <Link> here</Link>. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
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
                <div id="skills" />
                <Section title="Skills 🔨" light>
                    <div>
                        I've worked with a variety of web technologies. Here are some of the ones
                        that I have been using recently:
                    </div>
                    <Columns>
                        <div>
                            <SkillCard
                                color={{ r: 240, g: 219, b: 79 }}
                                title="JavaScript, TypeScript"
                                imageUrl="assets/js.png"
                            />
                            <SkillCard
                                color={{ r: 221, g: 27, b: 22 }}
                                title="Angular"
                                imageUrl="assets/angular.png"
                            />
                            <SkillCard
                                color={{ r: 64, g: 120, b: 192 }}
                                title="GitHub"
                                imageUrl="assets/github.png"
                            />
                            <SkillCard
                                color={{ r: 205, g: 95, b: 161 }}
                                title="Styled-components, SCSS"
                                imageUrl="assets/styled-components.png"
                            />
                            <SkillCard
                                color={{ r: 252, g: 68, b: 132 }}
                                title="Storybook"
                                imageUrl="assets/storybook.png"
                            />
                        </div>
                        <div>
                            <SkillCard
                                color={{ r: 97, g: 219, b: 251 }}
                                title="React"
                                imageUrl="assets/react.png"
                            />
                            <SkillCard
                                color={{ r: 76, g: 72, b: 255 }}
                                title="Stencil.js (Web Components)"
                                imageUrl="assets/stenciljs.png"
                            />
                            <SkillCard
                                color={{ r: 58, g: 196, b: 241 }}
                                title="Azure"
                                imageUrl="assets/azure.png"
                            />
                            <SkillCard
                                color={{ r: 227, g: 46, b: 55 }}
                                title="NPM"
                                imageUrl="assets/npm.png"
                            />
                        </div>
                    </Columns>
                </Section>
                <Section title="Ready to start chatting?" center>
                    <div>
                        Want to get in touch with me? Let's talk! Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo
                    </div>
                    <div>
                        <div>
                            📧 <Link>ryanhenness@gmail.com</Link>
                        </div>
                        <div>
                            🤵 <Link>LinkedIn</Link>
                        </div>
                        <div>
                            👩‍💻 <Link>GitHub</Link>
                        </div>
                    </div>
                </Section>
                <Section title="About this site" light center>
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

const Columns = styled.div`
    display: flex;
    flex-direction: row;

    div:first-child {
        margin-right: 8px;
    }
`;

const Link = styled.span`
    color: #ebc265;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const useAos = () => {
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore-next-line
        window.AOS?.init();
    }, []);
};
