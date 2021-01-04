import axios from 'axios';
import { proceedWithJwt } from '../../../utils/JwtCheck'

const AUTH_API_BASE_URL = "http://localhost:8080/api/auth";

class AuthService {

    signUp(member) {
        return axios.post(AUTH_API_BASE_URL + "/signup", member)
    }

    signIn(member) {

        let options = {
            url: AUTH_API_BASE_URL + "/signin",
            method: 'POST',
            body: JSON.stringify(member)
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

export default new AuthService