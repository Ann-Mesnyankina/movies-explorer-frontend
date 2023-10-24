import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

import Main from '../Main/Main.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Movies from '../Movies/Movies.js';
import Profile from '../Profile/Profile.js';
import NotFoundPage from '../NotFoundPage/NotFoundPage.js';
import mainApi from '../../utils/MainApi.js';
import { ErrorContext } from '../../contexts/ErrorContext.js';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [savedMovies, setSavedMovies] = useState([]);
  const [isPreloader, setPreloader] = useState(false)
  const [isError, setError] = useState(false);
  const [isAchieve, setAchieve] = useState('')
  const [isErrorServer, setErrorServer] = useState('')

  const transfer = useNavigate()
  const location = useLocation();
  const path = location.pathname

  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getSavedMovies(localStorage.jwt), mainApi.getInfoUser(localStorage.jwt)])
        .then(([infoMovie, infoUser]) => {
          setCurrentUser(infoUser.data)
          setSavedMovies(infoMovie.data)
          setLoggedIn(true)
        })
        .catch((error) => {
          localStorage.clear()
          console.error(`Не получилось загрузить данные ${error}`)
        })
    }
  }, [loggedIn])

  useEffect(() => {
    if (localStorage.jwt) {
      mainApi.getUserToken(localStorage.jwt)
        .then(() => {
          setLoggedIn(true)
          transfer(path);
        })
        .catch((error => console.error(`Не получилось авторизоваться повторно ${error}`)))
    } else {
      setLoggedIn(false)
    }
  }, [])

  function handleRegister(data) {
    mainApi.registration(data)
      .then(() => {
        setLoggedIn(true)
        handleAuthorize(data)

      })
      .catch((error) => {
        setError(true)
        console.error(`Не получилоcь зарегистрироваться ${error}`)
      })
  }

  function handleAuthorize(data) {
    mainApi.authorization(data)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true)
        transfer('/movies')
      })
      .catch((error) => {
        setError(true)
        console.error(`Не получилоcь авторизоваться ${error}`)
      })
  }

  function updateUserInfo(data) {
    setPreloader(true);
    mainApi.replaceUserData(data, localStorage.jwt)
      .then((res) => {
        setCurrentUser(res.data);
        setLoggedIn(true);
        setAchieve('Успешно изменили данные')
      })
      .catch((error) => {
        setErrorServer('При обновлении профиля произошла ошибка.')
        console.error(`Не получилось отредактировать профиль ${error}`);
      })
      .finally(() => {
        setPreloader(false);
      });
  }

  function handleMovieLike(data) {
    const isLiked = savedMovies.some((element) => element.movieId === data.id);
    const isDeleteById = savedMovies.filter((element) => { return data.id === element.movieId })
    if (!isLiked) {
      mainApi.createMovies(data, localStorage.jwt)
        .then((data) => {
          setSavedMovies([data, ...savedMovies]);
        })
        .catch((error => console.error(`Не получилось изменить лайк ${error}`)))
    } else {
      hadleRemoveMovies(isDeleteById[0]._id)
    }
  }

  function hadleRemoveMovies(movieId) {
    mainApi.deleteMovies(movieId, localStorage.jwt)
      .then(() => {
        setSavedMovies(savedMovies.filter((data) => {
          return data._id !== movieId          
        }))
      })
      .catch((error) => {
        console.error(`Не получилоcь удалить фильм ${error}`)
      })
  }


  return (
    <div className="page-container">
      <CurrentUserContext.Provider value={currentUser}>
        <ErrorContext.Provider value={isError}>                     
            <Routes>
              <Route path="/" element={<Main
                loggedIn={loggedIn} />} />
              <Route path="/movies"
                element={<ProtectedRoute
                  loggedIn={loggedIn}
                  element={Movies}
                  savedMovies={savedMovies}
                  setError={setError}
                  setErrorServer={setErrorServer}
                  isErrorServer={isErrorServer}
                  isPreloader={isPreloader}
                  setPreloader={setPreloader}
                  onLikeMovie={handleMovieLike}
                />}
              />
              <Route path="/saved-movies"
                element={<ProtectedRoute
                  loggedIn={loggedIn}
                  element={SavedMovies}
                  savedMovies={savedMovies}
                  setError={setError}
                  onDeleteMovie={hadleRemoveMovies} />}
              />
              <Route path="/profile"
                element={<ProtectedRoute
                  element={Profile}
                  onSubmitProfile={updateUserInfo}
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                  isAchieve={isAchieve}
                  setAchieve={setAchieve}
                  setErrorServer={setErrorServer}
                  isErrorServer={isErrorServer} />}
              />
              <Route path="/signup" element={<Register
                onRegister={handleRegister} setError={setError} />} />
              <Route path="/signin" element={<Login
                onLogin={handleAuthorize} setError={setError} />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </ErrorContext.Provider>
      </CurrentUserContext.Provider>
      </div >
  );
}

export default App;
