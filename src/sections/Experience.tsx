import { h } from 'preact';
import { Fragment } from 'react';
import Section from './components/Section';
import styled from 'styled-components';
import ExperienceCard from './components/ExperienceCard';

const Experience = () => {
    return (
        <Fragment>
            <div id="exp" />
            <Section title="Experience 😎">
                <Point data-aos="flip-left" data-aos-duration="400">
                    <ExperienceCard
                        title="Software Developer"
                        length="Dec 2019 - Present"
                        company="Trimble Viewpoint"
                        companyUrl="https://www.viewpoint.com/company/about">
                        <div>
                            I worked here and did some stuff! Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo
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
                            </NoteColumn>
                        </TechNotes>
                    </ExperienceCard>
                </Point>
                <Point data-aos="flip-right" data-aos-duration="400">
                    <ExperienceCard
                        title="Software Developer"
                        length="Jul 2018 - Aug 2019"
                        company="Jet Global"
                        companyUrl="https://insightsoftware.com/jet/">
                        <div>
                            I worked here and did some stuff! Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo
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
                                    <span>▸</span> Azure
                                </TechNote>
                            </NoteColumn>
                            <NoteColumn>
                                <TechNote>
                                    <span>▸</span> NuGet
                                </TechNote>
                            </NoteColumn>
                        </TechNotes>
                    </ExperienceCard>
                </Point>
                <Point data-aos="flip-left" data-aos-duration="400">
                    <ExperienceCard
                        title="Software Developer Intern"
                        length="May 2017 - Nov 2017"
                        company="MSEI"
                        companyUrl="https://www.mst.com/MSTgroup/msei">
                        <div>
                            I worked here and did some stuff! Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        </div>
                        <TechNotes>
                            <NoteColumn>
                                <TechNote>
                                    <span>▸</span> C#
                                </TechNote>
                                <TechNote>
                                    <span>▸</span> Xamarin
                                </TechNote>
                                <TechNote>
                                    <span>▸</span> HackerRank
                                </TechNote>
                            </NoteColumn>
                        </TechNotes>
                    </ExperienceCard>
                </Point>
                <Point data-aos="flip-right" data-aos-duration="400">
                    <ExperienceCard
                        title="Software Developer Intern"
                        length="Jun 2016 - Dec 2016"
                        company="Fiserv"
                        companyUrl="https://www.fiserv.com/en.html">
                        <div>
                            I worked here and did some stuff! Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo
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
                            </NoteColumn>
                            <NoteColumn>
                                <TechNote>
                                    <span>▸</span> Facebook API
                                </TechNote>
                            </NoteColumn>
                        </TechNotes>
                    </ExperienceCard>
                </Point>
            </Section>
        </Fragment>
    );
};

export default Experience;

const Point = styled.p`
    color: white;
    border-top: var(--rem-2px) dashed;
    margin: 0;
    padding: 2.5rem;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        border-radius: 50%;
        margin-top: var(--rem-8px);
        padding: var(--rem-10px);
        height: 0.3rem;
        width: 0.3rem;
        background-color: #b4eb4d;
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
        color: var(--col-personal-green);
    }
`;

const NoteColumn = styled.div`
    margin-right: var(--rem-12px);
`;

const TechNote = styled.div`
    font-size: var(--rem-12px);
`;
