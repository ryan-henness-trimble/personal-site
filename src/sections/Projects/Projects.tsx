import { Fragment, h } from 'preact';
import Section, { SectionGroup } from '../components/Section';
import styled from 'styled-components';
import Project from './Project';

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

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;
