import Link from '../../Link';
import routes from '../../../Constants/routes';

import './styles.scss';

export default function NavDrawer() {
    return (
        <div className="nav-drawer">
            <ul>
                {routes.map(route => (
                    <li>
                        <Link
                            path={route.path}
                            text={route.friendlyName}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
