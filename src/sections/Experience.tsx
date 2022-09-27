import { h } from 'preact';
import { Fragment } from 'react';
import Section from '../components/Section';
import { Link } from '../app';

const Experience = () => {
    return (
        <Fragment>
            <div id="exp" />
            <Section title="Experience 😎">
                <h2>Currently</h2>
                <div>
                    I work at Trimble Viewpoint. Want to see something cool? You can find it{' '}
                    <Link>here</Link>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <h2>In the past</h2>
                <div>
                    I used to work other places. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </Section>
        </Fragment>
    );
};

export default Experience;
