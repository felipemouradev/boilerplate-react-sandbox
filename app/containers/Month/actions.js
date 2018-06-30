import {SET_CONTAS_A_PAGAR,SET_RENDIMENTOS} from './../App/constants';

export function setContasAPagar(month, objectContasAPagar) {
  return {
    type: SET_CONTAS_A_PAGAR,
    payload: {month, objectContasAPagar}
  };
}

export function setRendimentos(month, objectSetRendimentos) {
  return {
    type: SET_RENDIMENTOS,
    payload: {month, objectSetRendimentos}
  };
}
