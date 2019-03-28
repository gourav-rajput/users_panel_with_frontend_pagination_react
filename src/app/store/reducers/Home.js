import INITIAL_STATE from "../models/Home";
import { FETCH_USERS } from "../../actions/types"

const HomeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, allUsers: [ ...action.payload ], loading: false };
    default:
      return state;
  }
}

export default HomeReducer;
