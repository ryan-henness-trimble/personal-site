import { h } from 'preact';
import Section from '../components/Section';
import { Link } from '../app';

const Contact = () => {
    return (
        <Section title="Ready to start chatting?" center>
            <div>
                Want to get in touch with me? Let's talk! Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo
            </div>
            <div>
                <div>
                    📧 <Link>ryanhenness@gmail.com</Link>
                </div>
                <div>
                    🤵 <Link>LinkedIn</Link>
                </div>
                <div>
                    👩‍💻 <Link>GitHub</Link>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
