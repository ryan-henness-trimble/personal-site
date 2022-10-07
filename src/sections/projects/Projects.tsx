import { ComponentChildren, Fragment, h } from 'preact';
import Section, { SectionGroup } from '../components/Section';
import styled from 'styled-components';
import GitHub from '../../assets/icons/github';
import useAosAnimation from '../../hooks/useAosAnimation';

const Projects = () => {
    return (
        <Fragment>
            <div id="projects" />
            <Section title="Projects 🌟">
                <SectionGroup>
                    <ProjectsContainer>
                        <Project
                            title="Modus Web Components"
                            url="https://modus-web-components.trimble.com"
                            gitHubUrl="https://github.com/trimble-oss/modus-web-components">
                            An open-source web component library that adheres to Trimble's Modus
                            design system. This library was built using Stencil.js, a web component
                            development toolchain. Although these components are framework agnostic,
                            this project outputs companion libraries for specific frameworks as
                            well.
                        </Project>
                        <Project
                            title="Personal Site"
                            url="https://ryanhenness.com"
                            gitHubUrl="https://github.com/ryan-henness-trimble/personal-site">
                            This site! I built this using the Preact CLI. Its code is hosted on
                            GitHub (which you can go check out), and automatically deployed using
                            Netlify. This started as a quick project to help me learn what Preact
                            was like but slowly turned into something I wanted to polish and put
                            out.
                        </Project>
                    </ProjectsContainer>
                </SectionGroup>
            </Section>
        </Fragment>
    );
};

export default Projects;

const Project = (props: {
    title: string;
    url: string;
    gitHubUrl: string;
    children: ComponentChildren;
}) => {
    const [aosClassName, aosId] = useAosAnimation();

    return (
        <ProjectContainer
            className={aosClassName}
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-id={aosId}
            onClick={() => window.open(props.url)}>
            <IconContainer onClick={() => window.open(props.gitHubUrl)}>
                <GitHub height="1.5rem" width="1.5rem" />
            </IconContainer>
            <Title>{props.title}</Title>
            <TitleUnderline />
            <Description>{props.children}</Description>
        </ProjectContainer>
    );
};

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

const ProjectContainer = styled.div`
    background-color: var(--col-personal-light-gray);
    border: var(--rem-1px) solid var(--col-personal-gray);
    border-radius: var(--rem-8px);
    box-shadow: 0 var(--rem-4px) var(--rem-16px) var(--rem-2px) rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    cursor: pointer;
    padding: var(--rem-12px) var(--rem-12px) var(--rem-24px) var(--rem-12px);
    width: 100%;

    :first-of-type {
        margin-right: var(--rem-24px);
    }

    @media (max-width: 700px) {
        :first-of-type {
            margin-bottom: var(--rem-24px);
        }
    }

    @media (hover: hover) {
        &:hover {
            background-color: #ededed;
            transition: background-color 0.2s ease-in;
        }
    }

    ${(props) =>
        props.theme.type === 'dark' &&
        `
            background-color: #333333;
            border-color: transparent;
            
            @media (hover: hover) {
                &:hover {
                    background-color: #3b3b3b;
                    transition: background-color 0.2s ease-in;
                }
            }
    `}
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    svg {
        border-radius: 50%;
        padding: var(--rem-4px);
        fill: white;

        @media (hover: hover) {
            &:hover {
                background-color: #e0e0e0;
                transition: background-color 0.2s ease-in;
            }
        }

        ${(props) =>
            props.theme.type === 'dark' &&
            `
                path {
                    fill: white;
                }
                
                @media (hover: hover) {
                    &:hover {
                        background-color: var(--col-personal-blue-mid);
                        transition: background-color 0.2s ease-in;
                    }
                }
        `}
    }
`;

const Title = styled.div`
    color: var(--col-personal-blue-darker);
    font-family: 'Roboto Flex', sans-serif;
    font-size: 1.35rem;
    margin-bottom: var(--rem-2px);

    ${(props) =>
        props.theme.type === 'dark' &&
        `
        color: var(--col-personal-gold);
    `}
`;

const TitleUnderline = styled.div`
    background-color: var(--col-personal-blue-darker);
    height: var(--rem-2px);
    width: 4rem;
    margin-bottom: var(--rem-8px);

    ${(props) =>
        props.theme.type === 'dark' &&
        `
        background-color: var(--col-personal-gold);
    `}
`;

const Description = styled.div`
    font-size: var(--rem-14px);
`;
