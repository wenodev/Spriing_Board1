import axios from 'axios';
import { ACCESS_TOKEN } from '../../../constants/constants'
import { proceedWithJwt } from '../../../utils/JwtCheck'

const AUTH_API_BASE_URL = "http://localhost:8080/api/auth/current";

class CurrentUserService {

    getCurrentUser() {

        if (!localStorage.getItem(ACCESS_TOKEN)) {
            return Promise.reject("No access token set.");
        }

        let options = {
            url: AUTH_API_BASE_URL,
            method: 'GET',
        }

        const headers = proceedWithJwt();

        const defaults = { headers: headers };
        options = Object.assign({}, defaults, options);

        return fetch(options.url, options)
            .then(response => response.json()
                .then(json => {
                    if (!response.ok) {
                        return Promise.reject(json);
                    }
                    return json;
                })
            );
    }
}

export default new CurrentUserService