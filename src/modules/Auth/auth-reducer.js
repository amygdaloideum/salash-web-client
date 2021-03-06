import ActionCreator from '../../util/action-creator';

export const ActionCreators = {
  tokenRequested: new ActionCreator('TOKEN_REQUESTED'),
  tokenRecieved: new ActionCreator('TOKEN_RECIEVED'),
  userSignedOut: new ActionCreator('USER_SIGNED_OUT'),
};

const initialState = {
  error: '',
  message: '',
  authenticated: false,
  token: '',
  fetching: false,
  user: {}
};

const AuthReducer = (state = initialState, action) => {
  let partialState;

  switch (action.type) {
    case ActionCreators.tokenRequested.type:
      partialState = { fetching: true };
      break;
    case ActionCreators.tokenRecieved.type:
      partialState = {
        fetching: false,
        token: action.payload.token,
        user: action.payload.user,
      };
      break;
    case ActionCreators.userSignedOut.type:
      return initialState;
    default:
      return state;
  }

  return { ...state, ...partialState };
}

export const getMessage = state => state.auth.message;

export default AuthReducer;
