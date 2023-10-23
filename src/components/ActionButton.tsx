
interface Props {
    text: string;
    className?: string;
    onClick?: () => void;
}

function ActionButton({ text, className, onClick }: Props) {
    return (
        <button
            className={`btn ${className}`}
            onClick={onClick}>
            {text}
        </button>
    )
}

export default ActionButton