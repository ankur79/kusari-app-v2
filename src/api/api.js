import axios from "axios";

export function fetchUser() {
  const d = axios({
    method: "GET",
    url: "http://localhost:3000/api/users"
  }).then(res => res.data);
  return d;
}
