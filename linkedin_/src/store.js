import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist";
import dataReducer from '../src/dataSlice'
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
  };
  const persistedReducer=persistReducer(persistConfig,dataReducer)
export const store= configureStore({
    reducer:{
         data:persistedReducer,
    }
    }
)
export const persiststore=persistStore(store);