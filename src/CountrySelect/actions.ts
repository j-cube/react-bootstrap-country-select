import {
  INIT,
  FOCUS,
  BLUR,
  TEXT_CHANGE,
  ACTIVE_LIST_ITEM_CHANGE,
  COUNTRY_SELECT,
  CLEAR,
} from './constants';

export const init = dispatch => combinedCountries => dispatch({
  type: INIT,
  combinedCountries,
});

export const focus = dispatch => () => dispatch({
  type: FOCUS,
});

export const blur = dispatch => () => dispatch({
  type: BLUR,
});

export const textChange = dispatch => (inputText, list, activeListItemIndex) => dispatch({
  type: TEXT_CHANGE,
  inputText,
  list,
  activeListItemIndex,
});

export const activeListItemChange = dispatch => activeListItemIndex => dispatch({
  type: ACTIVE_LIST_ITEM_CHANGE,
  activeListItemIndex,
});

export const countrySelect = dispatch => () => dispatch({
  type: COUNTRY_SELECT,
});

export const clear = dispatch => () => dispatch({
  type: CLEAR,
});
