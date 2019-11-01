import SHOP_DATA  from "./shop.data";

const initialState = {
  collections: SHOP_DATA
};

const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default shopReducer