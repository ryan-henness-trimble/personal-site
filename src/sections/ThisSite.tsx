import { h } from 'preact';
import Section, { SectionGroup } from './components/Section';

const ThisSite = () => {
    return (
        <Section title="About this site" light center>
            <SectionGroup>
                This site was built using the Preact CLI, a light-weight alternative to React.
            </SectionGroup>
            <SectionGroup>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </SectionGroup>
        </Section>
    );
};

export default ThisSite;
