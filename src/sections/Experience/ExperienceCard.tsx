import { h, ComponentChildren } from 'preact';
import styled from 'styled-components';

interface Props {
    title: string;
    length: string;
    company: string;
    companyUrl: string;
    children: ComponentChildren;
}

const ExperienceCard = (props: Props) => {
    return (
        <Card>
            <Company onClick={() => window.open(props.companyUrl)}>{props.company}</Company>
            <Title>
                <div>{props.title}</div>
                <div>{props.length}</div>
            </Title>
            <Content>{props.children}</Content>
        </Card>
    );
};

export default ExperienceCard;

const Card = styled.div`
    background-color: var(--col-personal-blue-mid);
    border-radius: var(--rem-16px);
    box-shadow: var(--box-shadow-md);
    padding: var(--rem-16px) var(--rem-24px);

    ${(props) =>
        props.theme.type === 'dark' && `background-color: var(--dark-col-personal-blue-mid)`};
`;

const Company = styled.div`
    color: var(--col-personal-gold);
    cursor: pointer;
    margin: var(--rem-8px) 0 var(--rem-2px) 0;
    font-family: 'Roboto Flex', sans-serif;
    font-size: var(--rem-24px);

    @media (hover: hover) {
        &:hover {
            text-decoration: underline;
        }
    }
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    font-size: var(--rem-12px);
    margin: 0 0 var(--rem-4px) 0;

    @media (max-width: 400px) {
        font-size: 0.82rem;
    }
`;

const Content = styled.div`
    margin: var(--rem-16px) 0;

    @media (max-width: 400px) {
        font-size: 0.92rem;
    }
`;
