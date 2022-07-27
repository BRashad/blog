import http from "../http-common";

class PostDataService {
  getAll() {
    return http.get("/posts");
  }
  get(id: any) {
    return http.get(`/posts/${id}`);
  }
  create(data: any) {
    return http.post("/posts", data);
  }
  update(id: any, data: any) {
    return http.put(`/posts/${id}`, data);
  }
  delete(id: any) {
    return http.delete(`/posts/${id}`);
  }
  deleteAll() {
    return http.delete(`/posts`);
  }
  findByTitle(title: any) {
    return http.get(`/posts?title=${title}`);
  }
}
export default new PostDataService();
