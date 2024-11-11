import {useState} from "react";
import AddButton from "../features/AddButton";
import Item, {ItemProps} from "./Item";

function Canvas() {
    // should I make it a useState of type Item instead?
    const [items, setItems] = useState<ItemProps[]>([]);

    // should the logic of adding a new object be handled within the Item.tsx?
    // if so, how can I have the onClick event from AddButton let Item.tsx know it needs to do something?
    const onClick = () => {
        const newItemProps = { title: "hi" }
        setItems([...items, newItemProps]);
    };

    return (
        <div>
            <AddButton onClick={onClick}/>
            {items.map((item, index) => (
                <Item title={item.title}></Item>
            ))}
        </div>
    )
}

export default Canvas;