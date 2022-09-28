import { h, ComponentChildren, Fragment } from 'preact';
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
                {props.title} ● {props.length}
            </Title>
            <div>{props.children}</div>
        </Card>
    );
};

export default ExperienceCard;

const Card = styled.div`
    background-color: var(--col-personal-blue-darker);
    border-radius: var(--rem-16px);
    box-shadow: 0 5px 32px 1px rgba(0, 0, 0, 0.2);
    padding: var(--rem-16px) var(--rem-24px);
`;

const Company = styled.div`
    color: var(--col-personal-gold);
    cursor: pointer;
    font-size: var(--rem-20px);

    &:hover {
        text-decoration: underline;
    }
`;

const Title = styled.div`
    font-size: var(--rem-14px);
`;
