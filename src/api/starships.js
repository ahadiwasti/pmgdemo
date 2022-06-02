import request from "@/utils/request";
// import qs from "qs";

export function fetchshipsList() {
  return request({
    url: "starships",
    method: "get",
  });
}

export function fetchnextshipsList(page) {
  return request({
    url: "starships/" + "?page=" + page,
    method: "get",
  });
}

export function fetchship(id) {
  return request({
    url: "starships/" + id,
    method: "get",
  });
}
