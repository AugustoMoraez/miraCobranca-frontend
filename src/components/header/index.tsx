import { Button, Container, HeaderOptions, Title } from "./style";

type Prop = {
    title: string;
    options?: {
        content: string;
        func: () => void;
    }[];
};

export const Header = ({ title, options }: Prop) => {
    return (
        <Container>
            <Title>{title}</Title>
            <HeaderOptions>
                {options && options.map((item, index) => (
                    <Button key={index} onClick={item.func}>
                        {item.content}
                    </Button>
                ))}
            </HeaderOptions>
        </Container>
    );
};
