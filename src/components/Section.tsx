import { h, ComponentChildren } from 'preact';
import styled from 'styled-components';

interface Props {
    children: ComponentChildren;
    id?: string;
    title: string;
}

const Section = (props: Props) => (
    <Container id={props.id} data-aos="fade-up" data-aos-duration="400">
        <Title>{props.title}</Title>
        <Text>{props.children}</Text>
        <SectionDivider />
    </Container>
);
export default Section;

const Container = styled.div`
    max-width: 30rem;
    padding: 0 var(--rem-12px);
`;

const Title = styled.div`
    font-family: 'Roboto Flex', sans-serif;
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;

    h2 {
        font-size: 1.375rem;
        font-weight: 700;
        margin: 0 0 0.3rem 0;
    }

    div {
        margin: var(--rem-8px) 0;
    }
`;

const SectionDivider = styled.div`
    background-color: #eaeaea;
    height: var(--rem-1px);
    margin: var(--rem-32px) auto;
    width: 11.125rem;
`;
