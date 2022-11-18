import http from "../http-common";

class UserDataService {

    getAll() {
      return http.get("/animals");
    }

    get(id) {
        return http.get(`/animals/${id}`)
    }

    create(data) {
        return http.post("/animals", data);
    }

    update(id, data) {
        return http.put(`/animals/${id}`, data);
    }

    delete(id) {
        return http.delete(`/animals/${id}`);
    }

    deleteAll() {
        return http.delete(`/animals`);
    }

    findByName(name) {
        return http.get(`/animals?name=${name}`);
    }  
}

export default new UserDataService();
