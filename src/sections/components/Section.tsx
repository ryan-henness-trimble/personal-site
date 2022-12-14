import { h, ComponentChildren } from 'preact';
import styled from 'styled-components';
import useAosAnimation from '../../hooks/useAosAnimation';

interface Props {
    center?: boolean;
    children: ComponentChildren;
    id?: string;
    colored?: boolean;
    padding?: string;
    title: string;
}

const Section = (props: Props) => {
    const [aosClassName, aosId] = useAosAnimation();

    return (
        <SectionContainer id={props.id} colored={props.colored} padding={props.padding}>
            <InnerContainer
                className={aosClassName}
                center={props.center}
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-id={aosId}>
                <Title>{props.title}</Title>
                <Text center={props.center} colored={props.colored}>
                    {props.children}
                </Text>
            </InnerContainer>
        </SectionContainer>
    );
};
export default Section;

const SectionContainer = styled.div<{ colored: boolean; padding: string }>`
    background-color: ${(props) => (props.colored ? 'var(--col-personal-blue)' : 'white')};
    color: ${(props) => (props.colored ? 'white' : '#2b2b2b')};
    display: flex;
    justify-content: center;
    overflow: hidden;
    padding: ${(props) => (props.padding ? props.padding : '2.5rem 0')};
    width: 100%;

    ${(props) =>
        props.theme.type === 'dark' &&
        `
            background-color: ${
                props.colored ? 'var(--dark-col-personal-blue)' : props.theme.background
            };
            color: white;
    `}
`;

const InnerContainer = styled.div`
    align-items: ${(props) => (props.center ? 'center' : 'flex-start')};
    display: flex;
    flex-direction: column;
    max-width: 40rem;
    padding: 0 var(--rem-24px);
`;

const Title = styled.div`
    font-family: 'Roboto Flex', sans-serif;
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
`;

const Text = styled.div<{ center: boolean; colored: boolean }>`
    align-items: ${(props) => (props.center ? 'center' : 'normal')};
    color: ${(props) => (props.colored ? 'white' : '#2b2b2b')};
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    text-align: ${(props) => (props.center ? 'center' : 'start')};

    h2 {
        font-size: 1.375rem;
        font-weight: 700;
        margin: 0 0 0.3rem 0;
    }

    ${(props) => props.theme.type === 'dark' && `color: white`}
`;

export const SectionGroup = styled.div`
    margin: var(--rem-8px) 0;
`;
