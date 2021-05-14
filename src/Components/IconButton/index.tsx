import './styles.scss';

// TODO pass in icon, remove secondary param, add disabled param

type IconButtonProps = {
    name: string;
    content: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    secondary?: boolean;
    type?: 'button' | 'submit' | 'reset' | undefined;
};

export default function IconButton({ name, content, onClick, secondary, type }: IconButtonProps) {
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
