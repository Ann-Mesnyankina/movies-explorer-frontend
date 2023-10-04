export default function AboutProject() {
    return (
        <section className="about-project" id="about-project">
            <h2 className="about-project__title">О проекте</h2>
            <ul className="about-project__specs">
                <li className="about-project__item">
                    <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className="about-project__item">
                    <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <div className="about-project__execution-time">
                <div className="about-project__scale">
                    <p className="about-project__execution-time-beckend">1 неделя</p>
                    <p className="about-project__execution-time-caption">Back-end</p>
                </div>
                <div className="about-project__scale">
                    <p className="about-project__execution-time-frontend">4 недели</p>
                    <p className="about-project__execution-time-caption">Front-end</p>
                </div>
            </div>
        </section>
    );
}