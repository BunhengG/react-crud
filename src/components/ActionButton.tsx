import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    icon: any;
    text: string;
    className?: string;
    onClick: (e: React.MouseEvent) => void;
}

function ActionButton({ icon, text, className, onClick }: Props) {
    return (
        <button
            className={`btn ${className}`}
            onClick={onClick}>
            {text}
            <FontAwesomeIcon icon={icon} />
        </button>
    )
}

export default ActionButton