import './styles.scss';

type CardProps = {
    header?: JSX.Element;
    body: JSX.Element;
    footer?: JSX.Element;
};

export default function Card({ header, body, footer }: CardProps) {
    return (
        <section className="card">
            {header && (
                <div className="card-header">
                    {header}
                </div>
            )}
            <div className="card-body">
                {body}
            </div>
            {footer && (
                <div className="card-footer">
                    {footer}
                </div>
            )}
        </section>
    );
};
