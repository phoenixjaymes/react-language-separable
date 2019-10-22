import * as SeparableActionTypes from '../actiontypes/separable';

import separable from '../data/separable';

const intialState = separable;

export default function Page(state = intialState, action) {
  switch (action.type) {
    case SeparableActionTypes.CHANGE_PAGE:
      return {
        ...state,
        page: action.page,
      };
    case SeparableActionTypes.CHANGE_PAGE_FINAL:
      return {
        ...state,
        page: action.page,
        lang: action.lang,
      };
    default:
      return state;
  }
}
