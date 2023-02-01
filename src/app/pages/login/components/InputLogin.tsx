interface IInputLoginProps {
    label: string;
}

export const InputLogin: React.FC<IInputLoginProps> = (props) => {
    return (
        <label htmlFor="">
            <span>props.label</span>
            <input type="text" />
        </label>
    )
}