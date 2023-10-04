import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate();

    function handleGoBack(){
        navigate(-1);
    };

    return (
        <main className="content">
            <section className="not-found-page">
                <h1 className="not-found-page__title">404</h1>
                <p className="not-found-page__description">Страница не найдена</p>
                <button className="not-found-page__link" type="button" onClick={handleGoBack}>Назад</button>
            </section>
        </main>
    );
}