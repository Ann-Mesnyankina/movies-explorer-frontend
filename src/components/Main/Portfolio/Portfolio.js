export default function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>

            <ul className="portfolio__links">
                <li className="portfolio__list-item">
                    <a href="https://github.com/Ann-Mesnyankina/how-to-learn" className="portfolio__link" target="_blank" rel="noreferrer">Статичный </a>
                </li>
                <li className="portfolio__list-item">
                    <a href="https://github.com/Ann-Mesnyankina/russian-travel" className="portfolio__link" target="_blank" rel="noreferrer">Адаптивный сайт</a>
                </li>
                <li className="portfolio__list-item">
                    <a href="https://github.com/Ann-Mesnyankina/react-mesto-api-full-gha" className="portfolio__link" target="_blank" rel="noreferrer">Одностраничное приложение</a>
                </li>
            </ul>
        </section>
    );
};