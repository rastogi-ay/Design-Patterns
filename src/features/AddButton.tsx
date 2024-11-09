import '../styles/AddButton.css'

interface AddButtonProps {
    onClick: () => void
}

function AddButton(props: AddButtonProps) {
    const { onClick } = props;

    // const onClick = () => {
    //     // const newClass: ClassProperties = {
    //     //
    //     // }
    // };

    return (
        <div className="add-button" onClick={onClick}>
            {/*add a 'plus' sign here*/}
        </div>
    )
}

export default AddButton;