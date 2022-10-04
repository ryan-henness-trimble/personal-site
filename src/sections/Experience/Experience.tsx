import { Fragment, h } from 'preact';
import Section from '../components/Section';
import styled from 'styled-components';
import ExperienceCard from './ExperienceCard';
import { useState } from 'preact/hooks';
import { Link } from '../../app';

const Experience = () => {
    const [showingMore, setShowingMore] = useState(false);

    const handleShowMoreClick = () => {
        if (showingMore) {
            const jetGlobalHeight = getClientHeightById('jet-global');
            const mseiHeight = getClientHeightById('msei');
            const fiservHeight = getClientHeightById('fiserv');

            window.scrollTo({
                top: window.scrollY - jetGlobalHeight - mseiHeight - fiservHeight,
            });
        }
        setShowingMore((prevShowingMore) => !prevShowingMore);
    };

    return (
        <Fragment>
            <div id="exp" />
            <Section title="Experience 👷‍♂️" colored>
                <SectionCollapser collapse={!showingMore}>
                    <TrimbleViewpoint />
                    {showingMore && (
                        <Fragment>
                            <JetGlobal id="jet-global" />
                            <MSEI id="msei" />
                            <Fiserv id="fiserv" />
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

const getClientHeightById = (id: string) => document.querySelector(`#${id}`)?.clientHeight ?? 0;

const TrimbleViewpoint = () => (
    <Point data-aos="flip-up" data-aos-duration="400" padding="1rem 2.5rem 2.5rem 2.5rem">
        <ExperienceCard
            title="Software Developer"
            length="Dec 2019 - Present"
            company="Trimble Viewpoint"
            companyUrl="https://www.viewpoint.com/company/about">
            <div>
                I've grown the most as a developer here at Trimble Viewpoint, and have met some
                amazing developers along the way. This is where I was first introduced to SPAs,
                getting the chance to contribute to an Angular app. That experience taught me what
                goes into developing a production-ready web app, and what ultimately led me to dive
                deeper into frontend development. I have taken what I learned from that project and
                now primarily work on a React app that acts as a single sign-on landing page for
                Trimble apps. On the side, I've been helping develop Trimble's open and inner-source
                practices. I lead the development of an open-source web component library that
                adheres to Trimble's Modus design system, you can find it at{' '}
                <Link onClick={() => window.open('https://modus-web-components.trimble.com/')}>
                    Modus Web Components
                </Link>
                .
            </div>
            <TechNotes
                notes={[
                    'JavaScript',
                    'React',
                    'Stencil.js',
                    'Azure DevOps',
                    'TypeScript',
                    'Angular',
                    'Storybook',
                    'GitHub',
                ]}
            />
        </ExperienceCard>
    </Point>
);

const JetGlobal = (props: { id: string }) => (
    <Point id={props.id} data-aos="flip-up" data-aos-duration="400">
        <ExperienceCard
            title="Software Developer"
            length="Jul 2018 - Aug 2019"
            company="Jet Global"
            companyUrl="https://insightsoftware.com/jet/">
            <div>
                I was hired at Jet Global (formerly Jet Reports) as a new grad. I mainly worked on
                resolving bugs within our team's .NET C# desktop app, which was a plugin for
                Microsoft Excel. I started working on features for the app toward the end of my time
                in this position. Some of the notable contributions I made were developing an export
                to Microsoft Word feature, implementing feature toggling, adding new analytic
                events, and updating the app's branding when the company rebranded to Jet Global.
                This is also where I learned how dangerous having access to cold brew on tap can be.
            </div>
            <TechNotes notes={['C#', 'WFP', 'Azure DevOps', 'NuGet']} />
        </ExperienceCard>
    </Point>
);

const MSEI = (props: { id: string }) => (
    <Point id={props.id} data-aos="flip-up" data-aos-duration="400">
        <ExperienceCard
            title="Software Developer Intern"
            length="May 2017 - Nov 2017"
            company="MSEI"
            companyUrl="https://www.mst.com/MSTgroup/msei">
            <div>
                During this internship I maintained a C++ library that handled parameter mapping
                used by a neurostimulator and its controller. The goal of this project was to work
                toward connecting these neurostimulators to phones/tablets via bluetooth. This would
                cut costs of the old (and expensive) controllers while also making the controller
                more accessible to its users. A big chunk of my work included developing the
                library's support for the Android (Xamarin) platform. This included debugging the
                library and test fixtures as they were ported over.
            </div>
            <TechNotes notes={['C++', 'C#', 'Xamarin']} />
        </ExperienceCard>
    </Point>
);

const Fiserv = (props: { id: string }) => (
    <Point id={props.id} data-aos="flip-up" data-aos-duration="400">
        <ExperienceCard
            title="Software Developer Intern"
            length="Jun 2016 - Dec 2016"
            company="Fiserv"
            companyUrl="https://www.fiserv.com/en.html">
            <div>
                This internship was a lot of fun, it was where I learned what it means to be a part
                of a team. My main project was replacing an in-house code generator with Yeoman. I
                also worked on a side project to help migrate the team's backlog items from TFS to
                VersionOne using the VersionOne API. There was a hackathon during my time here where
                I developed a Node.js web app hosted by AWS and Heroku that allowed employees to
                upload photos to a company-wide slide show.
            </div>
            <TechNotes
                notes={[
                    'C#',
                    'JavaScript',
                    'Yeoman',
                    'Facebook API',
                    'AWS S3',
                    'Heroku',
                    'VersionOne API',
                ]}
            />
        </ExperienceCard>
    </Point>
);

const TechNotes = (props: { notes: string[] }) => {
    let noteIndex = 0;
    const columnCount = Math.ceil(props.notes.length / 4);
    const columns = [];

    for (let i = 0; i < columnCount; i++) {
        columns.push(
            <TechNoteColumn>
                {props.notes.slice(noteIndex, noteIndex + 4).map((note, index) => (
                    <TechNote key={index}>
                        <span>▸</span> {note}
                    </TechNote>
                ))}
            </TechNoteColumn>
        );

        noteIndex = noteIndex + 4;
    }

    return <Notes>{columns}</Notes>;
};

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

const Notes = styled.div`
    display: flex;
    margin-top: var(--rem-16px);

    span {
        color: ${(props) => props.theme.accent};
    }
`;

const TechNoteColumn = styled.div`
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
