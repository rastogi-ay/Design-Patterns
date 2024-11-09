import Class from "./Class";
import {useState} from "react";
import AddButton from "../features/AddButton";
import '../styles/Class.css'

function ClassList() {
    const [classes, setClasses] = useState<Class[]>([]);

    const onClick = () => {
        const newClass = new Class("hi");
        setClasses([...classes, newClass]);
        // console.log("hi")
    };

    return (
        <div>
            {/*className="App"*/}
            <AddButton onClick={onClick}/>
            {classes.map((item, index) => (
                <div className="class">
                    {item.getTitle()}
                </div>
            ))}
        </div>
    );
}

export default ClassList;