import { request } from "./request";
export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  });
}

//对首页的请求做一个单独的管理；
