import ObjectList from "./models/ClassList";

function Canvas() {

    return (
        <div>
            <ObjectList/>
        </div>
    )
}

// function Canvas() {
//     const [, drop] = useDrop(() => ({
//         accept: 'OBJECT', // again, can change in the future
//     }))
//
//     return (
//         <div ref={drop}>
//             <ObjectList/>
//         </div>
//     )
// }

export default Canvas;