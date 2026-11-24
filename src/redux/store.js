import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { storage } from "./storages/localStorage.storage";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import authReducer from './slices/auth.slice'
import reportsReducer from './slices/reports.slice'


const appReducer = combineReducers({
  auth: authReducer,
  reports: reportsReducer
})

const persistConfig = {
  key: "app",
  storage
}

export const store = configureStore({
  reducer: persistReducer(persistConfig, appReducer),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
})

export const persistor = persistStore(store)