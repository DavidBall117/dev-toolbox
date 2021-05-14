import { useEffect } from 'react';

import './styles.scss';

type ToastProps = {
    show: boolean;
    title?: string;
    content: string;
    onClose: () => void;
    timeoutInMilliseconds?: number;
};

export default function Toast({ 
    show,
    title,
    content,
    onClose,
    timeoutInMilliseconds
}: ToastProps) {
    useEffect(() => {
        const timeout = setTimeout(() => {
            onClose();
        }, timeoutInMilliseconds);
        return () => clearTimeout(timeout);
    }, [onClose, timeoutInMilliseconds]);
    return (
        <div className={show ? 'toast' : 'd-none'} aria-hidden={!show}>
            {title && (
                <div>
                    <span>{title}</span>
                    {/* TODO close button, create icon button component */}
                </div>
            )}
            <p>
                {content}
            </p>
        </div>
    );
};
