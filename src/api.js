import { adalApiFetch } from "./adalConfig";

const heroesApi = {
  get() {
    return adalApiFetch(fetch, "/api/heroes", { method: "GET" }).then(result =>
      result.json()
    );
  },
  create(hero) {
    return adalApiFetch(fetch, "/api/heroes", {
      method: "POST",
      body: JSON.stringify(hero),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(result => result.json());
  },
  update(hero) {
    return adalApiFetch(fetch, `/api/heroes/${hero.id}`, {
      method: "PUT",
      body: JSON.stringify(hero),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(result => result.json());
  },
  destroy(id) {
    return adalApiFetch(fetch, `/api/heroes/${id}`, {
      method: "DELETE"
    });
  }
};

export default heroesApi;
