import { Link as ReactRouterLink } from 'react-router-dom';

import './styles.scss';

type LinkProps = {
    path: string;
    text: string;
    secondary?: boolean;
    external?: boolean;
};

export default function Link({ path, text, secondary, external }: LinkProps) {
    const getLinkClass = (): string => secondary ? 'secondary-link' : 'primary-link';
    return (
        <>
            {external ? (
                <a
                    href={path}
                    className={getLinkClass()}
                >
                    {text}
                </a>
            ) : (
                <ReactRouterLink
                    to={path}
                    className={getLinkClass()}
                >
                    {text}
                </ReactRouterLink>
            )}
        </>
    );
};
