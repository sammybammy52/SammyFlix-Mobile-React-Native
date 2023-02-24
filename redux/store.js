import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth'

export default configureStore({
    reducer: {
        userInfo: authReducer,
    }
});