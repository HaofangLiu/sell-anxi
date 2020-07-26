import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectD = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
