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
        <Fragment>
            <Company onClick={() => window.open(props.companyUrl)}>{props.company}</Company>
            <Title>
                {props.title} ● {props.length}
            </Title>
            <div>{props.children}</div>
        </Fragment>
    );
};

export default ExperienceCard;

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
