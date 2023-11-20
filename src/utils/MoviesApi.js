 class MoviesApi {
    constructor(setting) {
        this._baseUrl = setting.baseUrl;
    }

    _getResData(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        };
    }

    getInitialMovies() {
        return fetch(this._baseUrl, {
            headers: this._headers,
        })
            .then(this._getResData)
    }
}
const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json',
    },
});
export default moviesApi;