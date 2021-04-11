import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/blog";
export function getBlog() {
  return http.get(apiEndpoint);
}

export function postBlog(blog) {
  return http.post(apiEndpoint, {
    title: blog.title,
    body: blog.body,
    authorId: blog.authorId,
  });
}
export function putBlog(id, blog) {
  return http.put(apiEndpoint + `/${id}`, {
    title: blog.title,
    body: blog.body,
    authorName: blog.authorName,
    authorId: blog.authorId,
  });
}
export function getBlogById(id) {
  return http.get(apiEndpoint + `/${id}`);
}
export function getBlogByUserId(id) {
  return http.get(apiEndpoint + `/blog/${id}`);
}
export function deleteBlog(id) {
  return http.delete(apiEndpoint + `/${id}`);
}
