export default function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>

            <ul className="portfolio__links">
                <li className="portfolio__list-item"> <a href="https://github.com/Ann-Mesnyankina?tab=repositories" className="portfolio__link" target="_blank" rel="noreferrer">Статичный сайт
                    <div className="portfolio__arrow"></div></a>
                </li>
                <li className="portfolio__list-item"><a href="https://github.com/Ann-Mesnyankina?tab=repositories" className="portfolio__link" target="_blank" rel="noreferrer">Адаптивный сайт
                    <div className="portfolio__arrow"></div></a>
                </li>
                <li className="portfolio__list-item"><a href="https://github.com/Ann-Mesnyankina?tab=repositories" className="portfolio__link" target="_blank" rel="noreferrer">Одностраничное приложение
                    <div className="portfolio__arrow"></div></a>
                </li>
            </ul>
        </section>
    );
};