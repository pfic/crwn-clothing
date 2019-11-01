import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections =>
      //collections.find(item => item.id === COLLECTION_ID_MAP[collectionId])
     collections[collectionUrlParam]
  );
