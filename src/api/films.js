import request from "@/utils/request";
import qs from "qs";

export function fetchfilmsList() {
  return request({
    url: "films",
    method: "get",
  });
}

export function fetchnextfilmsList(page) {
  return request({
    url: "starships/" + "?page=" + qs.stringify(page),
    method: "get",
  });
}

export function fetchfilm(id) {
  return request({
    url: "films/" + id,
    method: "get",
  });
}
