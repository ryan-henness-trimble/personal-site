import { h } from 'preact';
import styled from 'styled-components';
import useAosAnimation from '../../hooks/useAosAnimation';

interface Props {
    animationDelay?: number;
    color: {
        r: number;
        g: number;
        b: number;
    };
    imageUrl: string;
    title: string;
}

const SkillCard = (props: Props) => {
    const [aosClassName, aosId] = useAosAnimation();

    return (
        <Card
            className={aosClassName}
            r={props.color.r}
            g={props.color.g}
            b={props.color.b}
            data-aos="fade-left"
            data-aos-anchor="#skill-cards-anchor"
            data-aos-delay={props.animationDelay}
            data-aos-duration="400"
            data-aos-id={aosId}>
            <img src={props.imageUrl} alt={props.title} />
            <Details>{props.title}</Details>
        </Card>
    );
};

export default SkillCard;

const Card = styled.div<{ r: number; g: number; b: number }>`
    align-items: center;
    background: linear-gradient(
        0deg,
        ${(props) => (props.theme.type === 'dark' ? props.theme.background : 'white')} 0%,
        rgba(${(props) => props.r}, ${(props) => props.g}, ${(props) => props.b}, 0.15) 100%
    );
    border: var(--rem-1px) solid var(--col-persona-gray);
    border-radius: var(--rem-12px);
    box-shadow: var(--box-shadow-sm);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    height: 3rem;
    line-height: 1rem;
    margin: var(--rem-6px);
    padding: var(--rem-4px) var(--rem-12px);
    width: 100%;

    img {
        border-radius: 50%;
        height: var(--rem-32px);
        margin-right: var(--rem-12px);
        width: var(--rem-32px);
    }

    @media (max-width: 450px) {
        padding: var(--rem-6px);

        img {
            height: var(--rem-24px);
            margin-right: var(--rem-6px);
            width: var(--rem-24px);
        }
    }
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    justify-content: center;
`;
