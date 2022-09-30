import { h } from 'preact';
import styled from 'styled-components';

interface Props {
    color: {
        r: number;
        g: number;
        b: number;
    };
    imageUrl: string;
    title: string;
}

const SkillCard = (props: Props) => {
    return (
        <Card
            r={props.color.r}
            g={props.color.g}
            b={props.color.b}
            data-aos="fade-left"
            data-aos-duration="400">
            <img src={props.imageUrl} alt={props.title} />
            <Details>{props.title}</Details>
        </Card>
    );
};

export default SkillCard;

const Card = styled.div<{ r: number; g: number; b: number }>`
    align-items: center;
    background: rgb(255, 255, 255);
    background: linear-gradient(
        0deg,
        white 0%,
        rgba(${(props) => props.r}, ${(props) => props.g}, ${(props) => props.b}, 0.15) 100%
    );
    border: var(--rem-1px) solid var(--col-persona-gray);
    border-radius: var(--rem-12px);
    box-shadow: 0 5px 28px 1px rgba(0, 0, 0, 0.06);
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
