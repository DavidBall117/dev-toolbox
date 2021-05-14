import './styles.scss';

export default function Footer() {
    return (
        <footer className="footer">
            &copy; {new Date().getFullYear()}, {process.env.REACT_APP_NAME}
        </footer>
    );
};
