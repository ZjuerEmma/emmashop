import { request } from "./request";
export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  });
}
export function getHomeGoods(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page
    }
  });
}

//对首页的请求做一个单独的管理；
//此处的URL对应老师baseurl中的url
