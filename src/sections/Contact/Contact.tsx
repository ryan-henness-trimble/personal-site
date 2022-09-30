import { h } from 'preact';
import Section, { SectionGroup } from '../components/Section';
import { Link } from '../../app';
import styled from 'styled-components';
import { useEffect, useState } from 'preact/hooks';

const Contact = () => {
    const [stars, setStars] = useState(0);
    const [forks, setForks] = useState(0);

    useEffect(() => {
        fetch('https://api.github.com/repos/trimble-oss/modus-web-components')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setStars(data.stargazers_count);
                setForks(data.forks_count);
            });
    }, []);

    return (
        <Section title="Ready to start chatting?" center>
            <SectionGroup>Feel free to reach out!</SectionGroup>
            <SectionGroup>
                <Info
                    canClick
                    onClick={() => window.open('https://www.linkedin.com/in/ryan-henness')}>
                    🤵 <Link>LinkedIn</Link>
                </Info>
                <Info
                    canClick
                    onClick={() => window.open('https://github.com/ryan-henness-trimble')}>
                    💻 <Link>GitHub</Link>
                </Info>
                <Info>
                    📧 <span>ryanhenness@gmail.com</span>
                </Info>
                <Info>
                    📞 <span>971.282.7844</span>
                </Info>
                <MiniSection
                    onClick={() =>
                        window.open('https://github.com/ryan-henness-trimble/personal-site')
                    }
                    title="About this site"
                    light
                    center>
                    <div>Designed & developed by Ryan Henness</div>
                    <div>Built with the Preact CLI</div>
                    <span>
                        ⭐{stars} 🍴{forks}
                    </span>
                </MiniSection>
            </SectionGroup>
        </Section>
    );
};

export default Contact;

const Info = styled.div<{ canClick: boolean }>`
    background-color: var(--col-personal-blue-darker);
    border-radius: var(--rem-4px);
    box-shadow: 0 5px 28px 1px rgba(0, 0, 0, 0.12);
    cursor: ${(props) => (props.canClick ? 'pointer' : 'default')};
    margin: var(--rem-12px);
    padding: var(--rem-8px) var(--rem-6px);

    @media (min-width: 450px) {
        &:hover {
            background-color: ${(props) =>
                props.canClick ? 'var(--col-personal-blue-mid)' : 'none'};
            span {
                text-decoration: ${(props) => (props.canClick ? 'underline' : 'none')};
            }
        }
    }
`;

const MiniSection = styled.div`
    background-color: var(--col-personal-blue);
    color: white;
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
