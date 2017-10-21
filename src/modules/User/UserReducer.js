import ActionCreator from '../../util/action-creator';

export const ActionCreators = {
  userRecieved: new ActionCreator('USER_RECIEVED'),
};

const initialState = {};

const UserReducer = (state = initialState, action) => {
  let partialState;

  switch (action.type) {
    case ActionCreators.userRecieved.type:
      partialState = action.payload;
      break;
    default:
      return state;
  }

  return { ...state, ...partialState };
};

export const getUser = state => state.user;

export default UserReducer;
