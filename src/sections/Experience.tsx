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
                        I worked here and did some stuff! Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo
                    </ExperienceCard>
                </Point>
                <Point data-aos="flip-right" data-aos-duration="400">
                    <ExperienceCard
                        title="Software Developer"
                        length="Jul 2018 - Aug 2019"
                        company="Jet Global"
                        companyUrl="https://insightsoftware.com/jet/">
                        I worked here and did some stuff! Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo
                    </ExperienceCard>
                </Point>
                <Point data-aos="flip-left" data-aos-duration="400">
                    <ExperienceCard
                        title="Software Developer Intern"
                        length="May 2017 - Nov 2017"
                        company="MSEI"
                        companyUrl="https://www.mst.com/MSTgroup/msei">
                        I worked here and did some stuff! Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo
                    </ExperienceCard>
                </Point>
                <Point data-aos="flip-right" data-aos-duration="400">
                    <ExperienceCard
                        title="Software Developer Intern"
                        length="Jun 2016 - Dec 2016"
                        company="Fiserv"
                        companyUrl="https://www.fiserv.com/en.html">
                        I worked here and did some stuff! Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo
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
