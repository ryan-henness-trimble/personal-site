import { h, ComponentChildren } from 'preact';
import styled from 'styled-components';

interface Props {
    children: ComponentChildren;
    id?: string;
    title: string;
}

const Section = (props: Props) => (
    <Container id={props.id} data-aos="fade-up" data-aos-duration="1200">
        <Title>{props.title}</Title>
        <Text>{props.children}</Text>
        <SectionDivider />
    </Container>
);
export default Section;

const Container = styled.div`
    max-width: 26rem;
`;

const Title = styled.div`
    font-family: 'Roboto Flex', sans-serif;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 16px;
`;

const Text = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;

    h2 {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 8px;
    }

    div {
        margin: 12px 0;
    }
`;

const SectionDivider = styled.div`
    background-color: #eaeaea;
    height: 1px;
    margin: 24px auto;
    width: 178px;
`;
