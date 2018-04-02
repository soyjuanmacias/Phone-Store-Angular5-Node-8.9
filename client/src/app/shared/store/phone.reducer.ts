import { PhoneState } from './../model/phonestate.model';

export const GET_PHONES = 'GET_PHONES';
export const GET_PHONES_SUCCESS = 'GET_PHONES_SUCCESS';
export const GET_PHONES_ERROR = 'GET_PHONES_ERROR';

export const getPhones = () => {
  return {
    type: GET_PHONES,
  };
};

const initialState: PhoneState = {
  phones: [],
  pending: false,
  error: null,
};

export function phones (state = initialState, {type, payload}) {
  switch (type) {
    case GET_PHONES:
      return Object.assign({}, state, {pending: true, error: null});
    case GET_PHONES_SUCCESS:
      return Object.assign({}, state, { phones: payload, pending: false});
    case GET_PHONES_ERROR:
      return Object.assign({}, state, {pending: false, error: 'Error'});
    default:
      return state;
  }
};
