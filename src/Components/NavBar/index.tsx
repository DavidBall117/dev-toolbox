import Link from '../Link';
import routes from '../../Constants/routes';

// TODO
// import Logo from '../../Assets/Logo.png';
import './styles.scss';

type NavBarProps = {
    header?: JSX.Element;
    body: JSX.Element;
    footer?: JSX.Element;
};

export default function NavBar({ header, body, footer }: NavBarProps) {
    return (
        <div className="nav-bar">
            {/* <img src={Logo} alt="logo" /> */}
            <span>
                {process.env.REACT_APP_NAME}
            </span>
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
