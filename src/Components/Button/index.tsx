import './styles.scss';

// TODO add disabled param

type ButtonProps = {
    name: string;
    content: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    secondary?: boolean;
    type?: 'button' | 'submit' | 'reset' | undefined;
};

export default function Button({ name, content, onClick, secondary, type }: ButtonProps) {
    return (
        <button
            name={name}
            aria-label={name}
            onClick={onClick}
            className={secondary ? 'secondary-btn' : 'primary-btn'}
            type={type ?? 'button'}
        >
            {content}
        </button>
    );
};
