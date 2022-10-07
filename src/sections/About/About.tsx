import { Fragment, h } from 'preact';
import Section, { SectionGroup } from '../components/Section';
import Skills from './Skills';

const About = () => {
    return (
        <Fragment>
            <div id="about" />
            <Section title="About 📝">
                <SectionGroup>
                    Hey, I’m Ryan 👋 I’m a caffeinated developer based in Portland, Oregon. I
                    graduated with a Bachelor of Science in Computer Science from the University of
                    Portland in 2018. I’ve gained 4+ years of industry experience mainly focused on
                    frontend development.
                </SectionGroup>
                <SectionGroup>
                    I first learned that I like to bring ideas to life with video editing when I was
                    younger. This passion, along with my knack for problem solving, helped spark my
                    interest for software development. I enjoy having a vision of what something is
                    supposed to be, working with others through the problems creating it, and
                    feeling rewarded when seeing it all come together. My main goals right now are
                    to keep learning and making meaningful contributions to the teams I'm a part of.
                </SectionGroup>
                <SectionGroup>
                    <Skills />
                </SectionGroup>
            </Section>
        </Fragment>
    );
};

export default About;
