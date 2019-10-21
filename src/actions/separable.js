import * as SeparableActionTypes from '../actiontypes/separable';

export const changePage = (page) => (
  {
    type: SeparableActionTypes.CHANGE_PAGE,
    page,
  }
);

export const changePageFinal = (page, lang) => (
  {
    type: SeparableActionTypes.CHANGE_PAGE_FINAL,
    page,
    lang,
  }
);
