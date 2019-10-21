import * as SeparableActionTypes from '../actiontypes/separable';

import separable from '../data/separable';

const intialState = separable;

export default function Page(state = intialState, action) {
  switch (action.type) {
    case SeparableActionTypes.CHANGE_PAGE:
      console.log('changing page');
      return state;
    case SeparableActionTypes.CHANGE_PAGE_FINAL:
      console.log('changing to final page');
      return state;
    default:
      console.log('default');
      return state;
  }
}
