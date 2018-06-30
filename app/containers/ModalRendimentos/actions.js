import {OPEN_CLOSE_MODAL_RENDIMENTOS} from './constants';

export function openCloseModalRendimentos(month = null) {
  return {
    type: OPEN_CLOSE_MODAL_RENDIMENTOS,
    payload: {month}
  };
}
