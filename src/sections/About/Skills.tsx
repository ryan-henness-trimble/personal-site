import { h } from 'preact';
import SkillCard from './SkillCard';
import { Fragment } from 'react';
import styled from 'styled-components';

const Skills = () => {
    return (
        <Fragment>
            <div>
                I've got to work with a variety of technologies, here are some I've had my hands on
                recently:
            </div>
            <Columns>
                <div id="skill-cards-anchor">
                    <SkillCard
                        animationDelay={0}
                        color={{ r: 240, g: 219, b: 79 }}
                        title="JavaScript, TypeScript"
                        imageUrl="assets/js.png"
                    />
                    <SkillCard
                        animationDelay={100}
                        color={{ r: 221, g: 27, b: 22 }}
                        title="Angular"
                        imageUrl="assets/angular.png"
                    />
                    <SkillCard
                        animationDelay={200}
                        color={{ r: 64, g: 120, b: 192 }}
                        title="GitHub"
                        imageUrl="assets/github.png"
                    />
                    <SkillCard
                        animationDelay={300}
                        color={{ r: 205, g: 95, b: 161 }}
                        title="Styled Components"
                        imageUrl="assets/styled-components.png"
                    />
                    <SkillCard
                        animationDelay={400}
                        color={{ r: 252, g: 68, b: 132 }}
                        title="Storybook"
                        imageUrl="assets/storybook.png"
                    />
                </div>
                <div>
                    <SkillCard
                        animationDelay={0}
                        color={{ r: 97, g: 219, b: 251 }}
                        title="React (CRA)"
                        imageUrl="assets/react.png"
                    />
                    <SkillCard
                        animationDelay={100}
                        color={{ r: 76, g: 72, b: 255 }}
                        title="Stencil.js (Web Components)"
                        imageUrl="assets/stenciljs.png"
                    />
                    <SkillCard
                        animationDelay={200}
                        color={{ r: 58, g: 196, b: 241 }}
                        title="Azure DevOps"
                        imageUrl="assets/azure.png"
                    />
                    <SkillCard
                        animationDelay={300}
                        color={{ r: 227, g: 46, b: 55 }}
                        title="npm"
                        imageUrl="assets/npm.png"
                    />
                </div>
            </Columns>
        </Fragment>
    );
};

export default Skills;

const Columns = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: var(--rem-12px);

    div:first-child {
        margin-right: var(--rem-8px);
    }
`;
