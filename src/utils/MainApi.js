class MainApi {
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

    getContent(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        })
            .then(this._getResData)
    }

    getInfoUser(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
            .then(this._getResData)
    }

    getSavedMovies(token) {
        return fetch(`${this._baseUrl}/movies`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
            .then(this._getResData)
    }

    createMovies(data, token) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image:`https://api.nomoreparties.co${data.image.url}`,
                trailerLink: data.trailerLink,
                thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            })
        })
            .then(this._getResData)
    }

    deleteMovies(movieId, token) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(this._getResData)
    }

    replaceUserData(data, token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ name: data.name, email: data.email })
        })
            .then(this._getResData)
    }

    registration(data) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                password: data.password,
                email: data.email,
                name: data.name
            })
        })
            .then(this._getResData)
    }

    authorization(data) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                password: data.password,
                email: data.email
            })
        })
            .then(this._getResData)
    }

    getUserToken(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        })
            .then(this._getResData)
    }
}

const mainApi = new MainApi({
    baseUrl: 'https://api.movies.ann.nomoredomainsrocks.ru',
});
export default mainApi;