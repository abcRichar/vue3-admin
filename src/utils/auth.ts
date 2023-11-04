import Cookies from 'js-cookie'

const TokenKey:string = 'vue3-admin'
 
export function getToken() {
   
  return Cookies.get(TokenKey)//获取键名为Admin-Token的值
}

export function setToken(token:string) {
   
  return Cookies.set(TokenKey, token)//设置键名Admin-Token，值为token
}

export function removeToken() {
   
  return Cookies.remove(TokenKey)//移除键名为Admin-Token的值
}
