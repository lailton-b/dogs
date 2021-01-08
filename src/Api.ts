const API_URL = 'https://dogsapi.origamid.dev/json';

/* USER_POST */
export const USER_POST = (data: { username: string, password: string, email: string }) => {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
  }
}

/* TOKEN_POST */
export const TOKEN_POST = (data: { username: string, password: string }) => {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
  }
}

/* TOKEN_VALIDATE_POST */
export const TOKEN_VALIDATE_POST = (token: string) => {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  }
}

/* USER_GET */
export const USER_GET = (token: string) => {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  } 
};


/* PHOTO_POST */
export const PHOTO_POST = (data: FormData, token: string) => {
  return {
    url: API_URL + '/api/photo',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: data
    }
  }
}

/****** PHOTO GET **********
 * 
 * photos: '/api/photo',
 * photos_query: '/api/photo/?_total=9&_page=1&_user=0',
 * photo: '/api/photo/:id',
 *
**********************************************************/
export const PHOTO_GET = (filter: string) => {
  return {
    url: API_URL + '/api/photo' + filter,
    options: {
      method: 'GET',
      cache: 'no-store'
    }
  }
}

/* COMMENT_POST */
export const COMMENT_POST = (token: string, comment: { comment: string }, id: number) => {
  return {
    url: API_URL + '/api/comment/' + id,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(comment),
    }
  }
}

/* PHOTO_DELETE */
export const PHOTO_DELETE = (token: string, id: number) => {
  return {
    url: API_URL + '/api/photo/' + id,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  }
};

/* STATES_GET */
export const STATS_GET = (token: string) => {
  return {
    url: API_URL + '/api/stats',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  }
}

/* PASSWORD_LOST_POST */
export const PASSWORD_LOST_POST = (body: { login: string, url: string }) => {
  return {
    url: API_URL + '/api/password/lost',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }
  }
}

/* PASSWORD_RESET_POST */
export const PASSWORD_RESET_POST = (body: { login: string, password: string, key: string }) => {
  return {
    url: API_URL + '/api/password/reset',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }
  }
};