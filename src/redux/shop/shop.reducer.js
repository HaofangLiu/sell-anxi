import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage : ''
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONC_START:
      return {
        ...state,
        isFetching:true
      }
    case ShopActionTypes.FETCH_COLLECTIONC_SUCCESS:
      return {
        ...state,
        isFetching:false,
        collections: action.payload,
      };
      case ShopActionTypes.FETCH_COLLECTIONC_FAILURE:
        return {
          ...state,
          isFetching:false,
          errorMessage:action.payload
        }
    default:
      return state;
  }
};

export default shopReducer;
