import { h } from 'preact';
import { Fragment } from 'react';
import Section from '../components/Section';
import styled from 'styled-components';

const Experience = () => {
    return (
        <Fragment>
            <div id="exp" />
            <Section title="Experience 😎">
                <Point>
                    <div>Trimble Viewpoint - Software Developer (Current)</div>
                    <div>
                        I work here right now! Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo
                    </div>
                </Point>
                <Point>
                    <div>Jet Global - Software Developer (Past)</div>
                    <div>
                        I work here right now! Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo
                    </div>
                </Point>
                <Point>
                    <div>MSEI - Software Developer Intern (Current)</div>
                    <div>
                        I work here right now! Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo
                    </div>
                </Point>
                <Point>
                    <div>Fiserv - Software Developer Intern (Current)</div>
                    <div>
                        I work here right now! Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo
                    </div>
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
        padding: var(--rem-10px);
        height: 0.25rem;
        width: 0.25rem;
        background-color: #b4eb4d;
        text-align: center;
    }

    &:nth-child(odd) {
        border-right: var(--rem-2px) dashed;
        padding-left: 0;
    }

    &:nth-child(odd):before {
        left: 100%;
        margin-left: calc(-1 * var(--rem-10px));
    }

    &:nth-child(even) {
        border-left: var(--rem-2px) dashed;
        padding-right: 0;
    }

    &:nth-child(even):before {
        right: 100%;
        margin-right: calc(-1 * var(--rem-10px));
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
