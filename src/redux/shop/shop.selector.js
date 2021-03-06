import { createSelector } from "reselect";
import memoize from "lodash.memoize";

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

const selectShop = (state) => state.shop;

export const shopDataSelect = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectColeection = memoize((param) =>
  createSelector([shopDataSelect], 
  (collections) => collections ? collections[param]: null)
);

export const selectCollectionsKeys = createSelector(
  [shopDataSelect],
  (collections) => collections 
    ? Object.keys(collections).map((key) => collections[key])
    : []
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
)
