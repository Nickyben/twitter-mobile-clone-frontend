import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth";
import { persistStore, persistReducer } from "redux-persist";
import { authPersistConfig, navPersistConfig, rootPersistConfig } from "./persist";
import navReducer from "./reducers/navigation";
const api = { name: "Nicholas" };

const combinedReducers = combineReducers({
  navReducer: persistReducer(navPersistConfig, navReducer),
  authReducer: persistReducer(authPersistConfig, authReducer),
});

const persistedRootReducer = persistReducer(rootPersistConfig, combinedReducers);

export const store = createStore(
  persistedRootReducer,
  applyMiddleware(thunk.withExtraArgument({ api }))
);

export const persistor = persistStore(store);


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch