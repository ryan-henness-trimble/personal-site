import { h } from 'preact';
import { Fragment } from 'react';
import Section from '../components/Section';
import './exp.css';

const Experience = () => {
    return (
        <Fragment>
            <div id="exp" />
            <Section title="Experience 😎">
                <p>
                    I work here right now! Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo
                </p>
                <p data-aos="fade-right" data-aos-duration="400">
                    I used to work here! Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo
                </p>
                <p data-aos="fade-left" data-aos-duration="400">
                    And here! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                </p>
                <p data-aos="fade-right" data-aos-duration="400">
                    And here! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                </p>
            </Section>
        </Fragment>
    );
};

export default Experience;
