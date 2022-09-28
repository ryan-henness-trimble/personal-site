import { h } from 'preact';
import Section, { SectionGroup } from './components/Section';
import { Link } from '../app';

const Contact = () => {
    return (
        <Section title="Ready to start chatting?" center>
            <SectionGroup>
                Want to get in touch with me? Let's talk! Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo
            </SectionGroup>
            <SectionGroup>
                <div>
                    🤵{' '}
                    <Link onClick={() => window.open('https://www.linkedin.com/in/ryan-henness')}>
                        LinkedIn
                    </Link>
                </div>
                <div>
                    💻{' '}
                    <Link onClick={() => window.open('https://github.com/ryan-henness-trimble')}>
                        GitHub
                    </Link>
                </div>
                <div>
                    📧 <span>ryanhenness@gmail.com</span>
                </div>
                <div>
                    📞 <span>971.282.7844</span>
                </div>
            </SectionGroup>
        </Section>
    );
};

export default Contact;
