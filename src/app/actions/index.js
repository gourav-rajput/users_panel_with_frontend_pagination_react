import { fetchUsersApi } from "./apis";
import { FETCH_USERS } from "./types";


export const fetchUsers = () => {
  return (dispatch) => {
    fetchUsersApi(dispatch, FETCH_USERS);
  }
}
