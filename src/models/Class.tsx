export interface ClassProperties {
    // make this a class instead? --> prob not, I want the benefit of the props
    // ACTUALLY. make the rendering handled by the ClassList --> <ClassList> tag
    title: string,
    methods: string[]
    xPos: number,
    yPos: number,
}

// function Class(props: ClassProperties) {
//     const {title, methods = [], xPos, yPos} = props;
//
//     const addMethod = (method: string): void => {
//         this.methods.concat(method)
//     }
//
//     return (
//         <div className="class">
//             {title}
//         </div>
//     )
// }

class Class {
    private title: string
    // private methods: string[]
    // private xPos: number
    // private yPos: number

    constructor(title: string) {
        this.title = title
    }

    public getTitle(): string {
        return this.title;
    }

}

export default Class;