import { createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const authSlice = createSlice({
  name: 'userInfo',
  initialState:{
    userInfo: {}
  },
  reducers: {
    logout: (state) => {
        AsyncStorage.removeItem('AccessToken');
        state.userInfo = {};
    },
    setUserInfo: (state, action, token) => {
      state.userInfo = { ...action, token}
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { logout, setUserInfo } = authSlice.actions

export default authSlice.reducer