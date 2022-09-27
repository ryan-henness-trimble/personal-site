import { h, ComponentChildren } from 'preact';
import styled from 'styled-components';

interface Props {
    center?: boolean;
    children: ComponentChildren;
    id?: string;
    light?: boolean;
    title: string;
}

const Section = (props: Props) => (
    <SectionContainer id={props.id} light={props.light}>
        <InnerContainer center={props.center} data-aos="fade-up" data-aos-duration="400">
            <Title>{props.title}</Title>
            <Text center={props.center}>{props.children}</Text>
        </InnerContainer>
    </SectionContainer>
);
export default Section;

const SectionContainer = styled.div<{ light: boolean }>`
    background-color: ${(props) => (props.light ? 'white' : '#648feb')};
    color: ${(props) => (props.light ? 'black' : 'white')};
    display: flex;
    justify-content: center;
    padding: 2.5rem 0;
    width: 100%;
`;

const InnerContainer = styled.div`
    align-items: ${(props) => (props.center ? 'center' : 'flex-start')};
    display: flex;
    flex-direction: column;
    max-width: 30rem;
    padding: 0 var(--rem-24px);
`;

const Title = styled.div`
    font-family: 'Roboto Flex', sans-serif;
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
`;

const Text = styled.div<{ center: boolean }>`
    align-items: ${(props) => (props.center ? 'center' : 'normal')};
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

    div {
        margin: var(--rem-8px) 0;
    }
`;
