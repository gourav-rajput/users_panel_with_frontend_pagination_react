
export const fetchUsersApi = async (dispatch, actionType) => {
  let apiUrl = "http://demo9197058.mockable.io/users";
  fetch(apiUrl, {
      method: "GET"
   })
  .then(response => response.json())
  .then(response => {
    dispatch({
      type: actionType,
      payload: response
    })
  }).catch(error => {
    console.log(error);
  })
}