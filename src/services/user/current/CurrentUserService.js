import axios from 'axios';
import { ACCESS_TOKEN } from '../../../constants/constants'

const AUTH_API_BASE_URL = "http://localhost:8080/api/auth/current";

class CurrentUserService {

    getCurrentUser() {
        if (!localStorage.getItem(ACCESS_TOKEN)) {
            return Promise.reject("No access token set.");
        }
        return axios.get(AUTH_API_BASE_URL);
    }


}

export default new CurrentUserService