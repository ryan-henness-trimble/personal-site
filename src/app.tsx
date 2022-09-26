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
                        <SkillCard
                            color={{ r: 240, g: 219, b: 79 }}
                            title="JavaScript, TypeScript"
                            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png">
                            Oh ya, I've got skills. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </SkillCard>
                        <SkillCard
                            color={{ r: 97, g: 219, b: 251 }}
                            title="React"
                            imageUrl="https://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png">
                            Oh ya, I've got skills. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </SkillCard>
                        <SkillCard
                            color={{ r: 221, g: 27, b: 22 }}
                            title="Angular"
                            imageUrl="https://cdn-images-1.medium.com/max/1200/1*nbJ41jD1-r2Oe6FsLjKaOg.png">
                            Oh ya, I've got skills. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </SkillCard>
                        <SkillCard
                            color={{ r: 0, g: 0, b: 0 }}
                            title="Stencil.js (Web Components)"
                            imageUrl="https://marmelab.com/static/thumbnail-43b6f6df0f3a39ed1e5bffbd77c36f5b.png">
                            Oh ya, I've got skills. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </SkillCard>
                        <SkillCard
                            color={{ r: 205, g: 95, b: 161 }}
                            title="Styled-components, SCSS"
                            imageUrl="https://avatars.githubusercontent.com/u/20658825?s=200&v=4">
                            Oh ya, I've got skills. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </SkillCard>
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
