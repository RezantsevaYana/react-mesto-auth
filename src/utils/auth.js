export const BASE_URL = 'https://auth.nomoreparties.co';

// запрос на регистрацию на сервере

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then(checkResult)
      .then((data) => {
        // сохраняем токен
        localStorage.setItem('token', data.token);
      }); 
  };

// запрос на авторизацию на сервере

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then(checkResult)
      .then((data) => {
        if (data.jwt){
          localStorage.setItem('jwt', data.jwt);
          return data;
        } else {
          return;
        }
       })
  };

// проверка валидности токена и полученя email для вставки в шапку сайта

export const checkToken = (jwt) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET", 
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json",
            "Authorization" : `Bearer ${localStorage.getItem(jwt)}`
        }
        .then(checkResult) 
    })
}

 function checkResult (res)  {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}