export default function Footer() {
  return (
    <footer className="footer">
      <h1 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h1>
      <div className="footer__info">
        <p className="footer__copyright">&#169; 2023</p>
        <ul className="footer__list">
          <li><a href="https://practicum.yandex.ru/" className="footer__link" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
          <li><a href="https://github.com" className="footer__link" target="_blank" rel="noreferrer">Github</a></li>
        </ul>
      </div>
    </footer>
  );
}
