import {useState} from "react";
import Draggable, {DraggableData, DraggableEvent} from 'react-draggable';
import '../styles/Item.css'

export interface ItemProps {
    title: string,
    // methods: string[]
    // xPos: number,
    // yPos: number,
}

function Item(props: ItemProps) {
    const {title} = props;
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleStop = (e: DraggableEvent, data: DraggableData) => {
        setPosition({ x: data.x, y: data.y });
    };

    // const addMethod = (newMethod: string): void => {
    //     methods.concat(newMethod);
    // }

    return (
        <Draggable position={position} onStop={handleStop}>
            <div className="item">
                {title}
            </div>
        </Draggable>
    )
}

export default Item;