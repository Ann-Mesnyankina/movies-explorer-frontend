import image from '../../../images/foto1.png'

export default function AboutMe() {
    return (
        <section className="about-me" id="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__container">
                <img src={image} alt="фото Виталия" className="about-me__foto" />
                <h3 className="about-me__name">Виталий</h3>
                <h4 className="about-me__profession">Фронтенд-разработчик, 30 лет</h4>
                <p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
                    Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
                    После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <a href="https://github.com/Ann-Mesnyankina" className="about-me__link about-me__link-GH" target="_blank" rel="noreferrer">Github</a>
            </div>
        </section>
    );
}
