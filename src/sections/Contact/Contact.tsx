import { h, Fragment } from 'preact';
import Section, { SectionGroup } from '../components/Section';
import styled from 'styled-components';
import LinkedIn from '../../assets/icons/linkedin';
import GitHub from '../../assets/icons/github';

const Contact = () => {
    return (
        <Fragment>
            <div id="contact" />
            <Section title="Contact 🤝" light padding="2.5rem 0 0.5rem 0">
                <SectionGroup>
                    <div>
                        Whether you'd like to get to know me better or just say hi, my DMs are
                        always open. Feel free to reach out to me anywhere below. I'll try my best
                        to get back to you when I can!
                    </div>
                    <ContactInfo>
                        <Icons>
                            <Icon
                                onClick={() =>
                                    window.open('https://www.linkedin.com/in/ryan-henness')
                                }>
                                <LinkedIn height="3rem" width="3rem" />
                            </Icon>
                            <Icon
                                onClick={() =>
                                    window.open('https://www.github.com/ryan-henness-trimble')
                                }>
                                <GitHub height="3rem" width="3rem" />
                            </Icon>
                        </Icons>
                        <span>📧 ryanhenness@gmail.com</span>
                    </ContactInfo>
                    <MiniSection
                        onClick={() =>
                            window.open('https://github.com/ryan-henness-trimble/personal-site')
                        }
                        title="About this site"
                        light
                        center>
                        <div>Designed & developed by Ryan Henness</div>
                        <div>Built with the Preact CLI</div>
                    </MiniSection>
                </SectionGroup>
            </Section>
        </Fragment>
    );
};

export default Contact;

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: var(--rem-6px) 0;
    padding: var(--rem-8px) var(--rem-6px);
`;

const Icons = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-bottom: var(--rem-8px);
`;

const Icon = styled.div`
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: var(--rem-12px);
    transition: background-color 0.4s;

    path {
        fill: ${(props) => (props.theme.type === 'dark' ? 'white' : '#2b2b2b')};
    }

    @media (hover: hover) {
        &:hover {
            background-color: ${(props) =>
                props.theme.type === 'dark' ? '#404040' : 'var(--col-personal-gray)'};
        }
    }
`;

const MiniSection = styled.div`
    background-color: ${(props) => props.theme.background};
    color: ${(props) => (props.theme.type === 'dark' ? 'white' : '#2b2b2b')};
    cursor: pointer;
    text-align: center;
    font-size: var(--rem-12px);
    height: 100%;
    width: 100%;
    margin-top: 12rem;
    overflow: hidden;

    &:hover {
        div {
            text-decoration: underline;
        }
    }
`;
