import { Container } from "./styles";
import { Tag } from "../Tag";

export function Card({data, ...rest}) {
    return (
        <Container {...rest}>
            <h2>{data.title}</h2>
            
            {
                data.tags &&
                <div>
                    {data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)}
                </div>
            }
        </Container>
    )
}