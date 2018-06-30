import _ from 'lodash';
import {SET_RENDIMENTOS, SET_CONTAS_A_PAGAR} from './../App/constants';

const data = _.times(12, () => {
  return {
    contas_a_pagar: [],
    rendimentos: []
  }
});
console.log("data: ", data);

const initialState = {
  months: data
};

function listMonthReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONTAS_A_PAGAR:
      console.log("state.months[action.payload.month].contas_a_pagar: ", state.months[action.payload.month]);
      state.months[action.payload.month].contas_a_pagar.push(action.payload.objectContasAPagar);
      return {...state};
    case SET_RENDIMENTOS:
      console.log("state.months[action.payload.month].rendimentos: ", state.months[action.payload.month]);
      state.months[action.payload.month].rendimentos.push(action.payload.objectSetRendimentos);
      return {...state};
    default:
      return state;
  }
}

export default listMonthReducer;
