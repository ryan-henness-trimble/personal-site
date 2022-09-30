import { Fragment, h } from 'preact';
import Section, { SectionGroup } from '../components/Section';

const About = () => {
    return (
        <Fragment>
            <div id="about" />
            <Section padding="1rem 0 2.5rem 0" title="About 📝" light>
                <SectionGroup>
                    Hey, I’m Ryan 👋 I’m a developer based in Portland, Oregon. I graduated with a
                    Bachelor of Science in Computer Science from the University of Portland in 2018.
                    I’ve gained 4+ years of industry experience mainly focused on frontend
                    development.
                </SectionGroup>
                <SectionGroup>
                    I first learned that I like to bring ideas to life with video editing when I was
                    younger. This passion, along with my knack for problem solving, helped spark my
                    interest for software development. I enjoy having a vision of what something is
                    supposed to be, working with others through the problems creating it, and being
                    rewarded when seeing it come to life.
                </SectionGroup>
                <SectionGroup>
                    In my free time I enjoy lifting weights and running (even though it stinks),
                    playing basketball, video games (I still play a ton of Halo 3), and getting out
                    with friends to hang out.
                </SectionGroup>
            </Section>
        </Fragment>
    );
};

export default About;
