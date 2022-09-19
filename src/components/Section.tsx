import { h, ComponentChildren } from 'preact';
import styled from 'styled-components';

interface Props {
    children: ComponentChildren;
    title: string;
}

const Section = (props: Props) => (
    <Container>
        <Title>{props.title}</Title>
        <Text>{props.children}</Text>
    </Container>
);
export default Section;

const Container = styled.div`
    min-height: 40rem;
    padding: 0 12px;
`;

const Title = styled.div`
    font-family: 'Roboto Flex', sans-serif;
    font-size: 38px;
    font-weight: 700;
`;

const Text = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;

    div {
        margin: 8px 0;
    }
`;
