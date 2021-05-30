import { Instance } from 'mobx-state-tree';
import { createContext, useContext } from 'react';
import { RootStore } from '../RootStore';

let _store: any = null;

export function initializeStore() {
  _store = RootStore.create({
    groceryListStore: { groceryList: [] },
  });
  return _store;
}

export type RootInstance = Instance<typeof RootStore>;
const RootStoreContext = createContext<null | RootInstance>(null);
export const Provider = RootStoreContext.Provider;

export function useStore(): Instance<typeof RootStore> {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}
