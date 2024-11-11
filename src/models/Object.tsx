import {useState} from "react";
import Draggable, {DraggableData, DraggableEvent} from 'react-draggable';

export interface ObjectProperties {
    title: string,
    // methods: string[]
    // xPos: number,
    // yPos: number,
}

function DraggableObject(props: ObjectProperties) {
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
            <div className="class">
                {title}
            </div>
        </Draggable>
    )
}

// function DraggableObject(props: ObjectProperties) {
//     const {title} = props;
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//     const [{ isDragging }, drag] = useDrag(() => ({
//         type: 'OBJECT', // this can later be just 'CLASS' or 'INTERFACE'
//         collect: (monitor) => ({
//             isDragging: monitor.isDragging(),
//         }),
//         end: (item, monitor) => {
//             // Get the offset position when dragging ends
//             const offset = monitor.getDifferenceFromInitialOffset();
//             if (offset) {
//                 setPosition((prevPosition) => ({
//                     x: prevPosition.x + offset.x,
//                     y: prevPosition.y + offset.y,
//                 }));
//             }
//         },
//     }));

export default DraggableObject;