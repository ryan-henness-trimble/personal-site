import { Fragment, h } from 'preact';
import Section from '../components/Section';
import styled from 'styled-components';
import ExperienceCard from './ExperienceCard';
import { useState } from 'preact/hooks';
import { getAbsoluteTabScrollOffset } from '../../hooks/useResponsiveTabs';
import { Link } from '../../app';

const Experience = () => {
    const [showingMore, setShowingMore] = useState(false);

    const handleShowMoreClick = () => {
        if (showingMore) {
            window.scrollTo({
                top: getAbsoluteTabScrollOffset('exp') - 150,
            });
        }
        setShowingMore((prevShowingMore) => !prevShowingMore);
    };

    return (
        <Fragment>
            <div id="exp" />
            <Section title="Experience ✨">
                <SectionCollapser collapse={!showingMore}>
                    <Point
                        data-aos="flip-up"
                        data-aos-duration="400"
                        padding="1rem 2.5rem 2.5rem 2.5rem">
                        <ExperienceCard
                            title="Software Developer"
                            length="Dec 2019 - Present"
                            company="Trimble Viewpoint"
                            companyUrl="https://www.viewpoint.com/company/about">
                            <div>
                                Working at Trimble Viewpoint has been rewarding, I have grown the
                                most as a developer during my time here. This is where I was first
                                introduced to SPAs, getting the chance to contribute to an Angular
                                app. This taught me about what goes into developing a
                                production-ready web app, and what ultimately led me to dive deeper
                                into frontend development. I have taken what I learned from that
                                Angular project and now primarily work on a React app that acts as a
                                single-sign on landing page for Trimble apps. On the side, I lead
                                the development of an open-source web component library that adheres
                                to Trimble's Modus design system, you can find it at{' '}
                                <Link
                                    onClick={() =>
                                        window.open('https://modus-web-components.trimble.com/')
                                    }>
                                    Modus Web Components
                                </Link>
                                .
                            </div>
                            <TechNotes>
                                <NoteColumn>
                                    <TechNote>
                                        <span>▸</span> JavaScript
                                    </TechNote>
                                    <TechNote>
                                        <span>▸</span> React
                                    </TechNote>
                                    <TechNote>
                                        <span>▸</span> Stencil.js
                                    </TechNote>
                                    <TechNote>
                                        <span>▸</span> Azure DevOps
                                    </TechNote>
                                </NoteColumn>
                                <NoteColumn>
                                    <TechNote>
                                        <span>▸</span> TypeScript
                                    </TechNote>
                                    <TechNote>
                                        <span>▸</span> Angular
                                    </TechNote>
                                    <TechNote>
                                        <span>▸</span> Storybook
                                    </TechNote>
                                    <TechNote>
                                        <span>▸</span> GitHub
                                    </TechNote>
                                </NoteColumn>
                            </TechNotes>
                        </ExperienceCard>
                    </Point>
                    {showingMore && (
                        <Fragment>
                            <Point data-aos="flip-up" data-aos-duration="400">
                                <ExperienceCard
                                    title="Software Developer"
                                    length="Jul 2018 - Aug 2019"
                                    company="Jet Global"
                                    companyUrl="https://insightsoftware.com/jet/">
                                    <div>
                                        I was hired at Jet Global as a new grad when they were known
                                        as Jet Reports. I mainly worked on resolving bugs within our
                                        team's .NET C# desktop app, which was a plugin for Microsoft
                                        Excel. Toward the end of my time in this position, I started
                                        working on features for the app. Some of the notable
                                        contributions I made were developing an export to Microsoft
                                        Word feature, implementing feature toggling, adding new
                                        analytic events, and updating the app's branding when the
                                        company rebranded to Jet Global.
                                    </div>
                                    <TechNotes>
                                        <NoteColumn>
                                            <TechNote>
                                                <span>▸</span> C#
                                            </TechNote>
                                            <TechNote>
                                                <span>▸</span> WPF
                                            </TechNote>
                                            <TechNote>
                                                <span>▸</span> Azure DevOps
                                            </TechNote>
                                            <TechNote>
                                                <span>▸</span> NuGet
                                            </TechNote>
                                        </NoteColumn>
                                    </TechNotes>
                                </ExperienceCard>
                            </Point>
                            <Point data-aos="flip-up" data-aos-duration="400">
                                <ExperienceCard
                                    title="Software Developer Intern"
                                    length="May 2017 - Nov 2017"
                                    company="MSEI"
                                    companyUrl="https://www.mst.com/MSTgroup/msei">
                                    <div>
                                        During this internship I maintained a C++ library that
                                        handled parameter mapping used by a neurostimulator and its
                                        controller. A big chunk of my work included developing the
                                        library's support for the Android (Xamarin) platform. This
                                        included debugging the library and test fixtures as they
                                        were ported over.
                                    </div>
                                    <TechNotes>
                                        <NoteColumn>
                                            <TechNote>
                                                <span>▸</span> C++
                                            </TechNote>
                                            <TechNote>
                                                <span>▸</span> C#
                                            </TechNote>
                                            <TechNote>
                                                <span>▸</span> Xamarin
                                            </TechNote>
                                        </NoteColumn>
                                    </TechNotes>
                                </ExperienceCard>
                            </Point>
                            <Point data-aos="flip-up" data-aos-duration="400">
                                <ExperienceCard
                                    title="Software Developer Intern"
                                    length="Jun 2016 - Dec 2016"
                                    company="Fiserv"
                                    companyUrl="https://www.fiserv.com/en.html">
                                    <div>
                                        This internship was a lot of fun, it was where I learned
                                        what it means to be a part of a team. My main project was
                                        replacing an in-house code generator with Yeoman. I also
                                        worked on a side project to help migrate the team's backlog
                                        items from TFS to VersionOne using the VersionOne API. There
                                        was a hackathon during my time there where I developed a
                                        Node.js web app hosted by AWS and Heroku that allowed
                                        employees to upload photos to a company-wide slide show.
                                    </div>
                                    <TechNotes>
                                        <NoteColumn>
                                            <TechNote>
                                                <span>▸</span> C#
                                            </TechNote>
                                            <TechNote>
                                                <span>▸</span> JavaScript
                                            </TechNote>
                                            <TechNote>
                                                <span>▸</span> Yeoman
                                            </TechNote>
                                            <TechNote>
                                                <span>▸</span> Facebook API
                                            </TechNote>
                                        </NoteColumn>
                                        <NoteColumn>
                                            <TechNote>
                                                <span>▸</span> AWS S3
                                            </TechNote>
                                            <TechNote>
                                                <span>▸</span> Heroku
                                            </TechNote>
                                            <TechNote>
                                                <span>▸</span> VersionOne API
                                            </TechNote>
                                        </NoteColumn>
                                    </TechNotes>
                                </ExperienceCard>
                            </Point>
                        </Fragment>
                    )}
                </SectionCollapser>
                <ShowMoreButton onClick={handleShowMoreClick} showingMore={showingMore}>
                    {showingMore ? 'SHOW LESS' : 'SHOW MORE'}
                </ShowMoreButton>
            </Section>
        </Fragment>
    );
};

export default Experience;

const SectionCollapser = styled.div`
    height: 100%;
`;

const Point = styled.p<{ padding?: string }>`
    color: white;
    border-top: var(--rem-2px) dashed;
    margin: 0;
    padding: ${(props) => (props.padding ? props.padding : '2.5rem')};
    position: relative;

    &:before {
        content: '';
        position: absolute;
        border-radius: 50%;
        margin-top: var(--rem-8px);
        padding: var(--rem-10px);
        height: 0.3rem;
        width: 0.3rem;
        background-color: ${(props) => props.theme.accent};
        text-align: center;
    }

    &:nth-child(odd) {
        border-right: var(--rem-2px) dashed;
        padding-left: 0;
    }

    &:nth-child(odd):before {
        left: 100%;
        margin-left: calc(-1 * 0.6875rem);
    }

    &:nth-child(even) {
        border-left: var(--rem-2px) dashed;
        padding-right: 0;
    }

    &:nth-child(even):before {
        right: 100%;
        margin-right: calc(-1 * 0.6875rem);
    }

    &:first-child {
        border-top: 0;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
    }

    &:last-child {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }
`;

const TechNotes = styled.div`
    display: flex;
    margin-top: var(--rem-16px);

    span {
        color: ${(props) => props.theme.accent};
    }
`;

const NoteColumn = styled.div`
    margin-right: var(--rem-12px);
`;

const TechNote = styled.div`
    font-size: var(--rem-12px);
`;

const ShowMoreButton = styled.button<{ showingMore: boolean }>`
    background-color: var(--col-personal-gold);
    border: none;
    border-radius: var(--rem-8px);
    color: black;
    cursor: pointer;
    font-family: 'Roboto Flex', sans-serif;
    margin-top: 1rem;
    padding: var(--rem-16px) var(--rem-32px);
    text-align: center;
    text-decoration: none;
    z-index: 3;

    @media (hover: hover) {
        &:hover {
            background-color: var(--col-personal-gold-lighter);
        }
    }

    &:active {
        background-color: var(--col-personal-gold-darker);
    }
`;
