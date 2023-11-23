import { ACTIONS } from "../actions/userProfileActions";

export const initialProfileState = {};

const UserAccountProfileReducer = (state = initialProfileState, action) => {
  switch (action.type) {
    case ACTIONS.CREATE_USER_PROFILE:
      state = action.userProfile;
      return state;
    case ACTIONS.UPDATE_AIRSYN:
      return {
        ...state,
        device: {
          ...state.device,
          airsyn: action.userProfile,
        },
      };
    case ACTIONS.UPDATE_PROXIE:
      return {
        ...state,
        device: {
          ...state.device,
          proxie: action.userProfile,
        },
      };

    case ACTIONS.UPDATE_AIRSYN_READINGS:
      return {
        ...state,
        device: {
          ...state.device,
          airsyn: {
            ...state.device.airsyn,
            deviceReadings: action.userProfile,
          },
        },
      };

    default:
      return state;
  }
};

export default UserAccountProfileReducer;
