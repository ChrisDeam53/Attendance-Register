import axios from 'axios';
import authHeader from './AuthHeader';

const API_URL = 'http://localhost:3050/petshop/security/';

class SecurityDataService {
  getPublicContent() {
    return axios.get(API_URL + 'public');
  }

  getProtectedContent() {
    return axios.get(API_URL + 'protected', 
    { headers: authHeader() });
  }

}

export default new SecurityDataService();
