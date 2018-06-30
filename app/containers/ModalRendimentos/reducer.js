import _ from 'lodash';
import {OPEN_CLOSE_MODAL_RENDIMENTOS} from './constants';

const initialState = {
  modal_rendimentos_is_open: false,
  month: null
};

function modalRendimentosReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_CLOSE_MODAL_RENDIMENTOS:
      return {...state, modal_rendimentos_is_open: !state.modal_rendimentos_is_open, month: action.payload.month};
    default:
      return state;
  }
}

export default modalRendimentosReducer;
