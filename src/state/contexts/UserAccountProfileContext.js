import { ref, update } from "firebase/database";
import { createContext, useReducer } from "react";
import { db } from "../../firebase/firebase";
import UserAccountProfileReducer, {
  initialProfileState,
} from "../reducers/UserAccountProfileReducer";

export const UserAccountProfileContext = createContext();

const UserAccountProfileProvider = ({ children }) => {

  const [userProfile, dipsatchUserProfile] = useReducer(
    UserAccountProfileReducer,
    initialProfileState
  );

  const toggleSwitch = (userId, deviceId, state) => {
    console.log(userId, deviceId, state, 'na the toggle be this')
    update(ref(db, `/users/${userId}/device/proxie/${deviceId}`), {
        deviceState: state
    }).then(() => {
        console.log('data updated')
    }).catch((error) => {
        console.log('something happened', error)
    })
  }

  console.log(userProfile, "userProfile");

  return (
    <UserAccountProfileContext.Provider
      value={{ userProfile, dipsatchUserProfile, toggleSwitch }}
    >
      {children}
    </UserAccountProfileContext.Provider>
  );
};

export default UserAccountProfileProvider;
