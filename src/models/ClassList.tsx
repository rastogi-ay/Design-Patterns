import DraggableObject, {ObjectProperties} from "./Object";
import {useState} from "react";
import AddButton from "../features/AddButton";
import '../styles/Class.css'

// ** NEED TO RENAME FILE TO: ObjectList.tsx **
function ObjectList() {
    const [objects, setObjects] = useState<ObjectProperties[]>([]);

    const onClick = () => {
        const newObjectProps = { title: "hi" }
        // const newClass = new Class("hi");
        setObjects([...objects, newObjectProps]);
    };

    return (
        // AddButton should be in App.tsx? not in ObjectList.tsx
        <div>
            <AddButton onClick={onClick}/>
            {objects.map((item, index) => (
                <DraggableObject title={item.title}/>
                // the HTML should probably be in the actual Class component
                    // ... if so, then should change Class from a class to a functional component
                    // would I need props then? because idk if something like the coordinates
                    // should be controlled by a parent component, or contained within the component
            ))}
        </div>
    );
}

export default ObjectList;