import { h, Fragment } from 'preact';
import Section, { SectionGroup } from '../components/Section';
import { Link } from '../../app';
import styled from 'styled-components';

const Contact = () => {
    return (
        <Fragment>
            <div id="contact" />
            <Section title="Ready to start chatting?" light center>
                <SectionGroup>Feel free to reach out!</SectionGroup>
                <SectionGroup>
                    <ContactInfo>
                        <span>
                            🤵 <Link>LinkedIn</Link>
                        </span>
                        <span>
                            💻 <Link>GitHub</Link>
                        </span>
                        <span> 📧 ryanhenness@gmail.com</span>
                        <span>📞 971.282.7844</span>
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

const ContactInfo = styled.div<{ canClick: boolean }>`
    display: flex;
    flex-direction: column;
    cursor: ${(props) => (props.canClick ? 'pointer' : 'default')};
    margin: var(--rem-12px);
    padding: var(--rem-8px) var(--rem-6px);
`;

const MiniSection = styled.div`
    background-color: white;
    color: black;
    cursor: pointer;
    text-align: center;
    font-size: var(--rem-12px);
    height: 100%;
    width: 100%;
    margin-top: 8rem;
    overflow: hidden;

    &:hover {
        div {
            text-decoration: underline;
        }
    }
`;
