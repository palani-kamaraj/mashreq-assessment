import { zStore } from '@shared';
import { mmKvStorage } from '../utils/mmkv';

export const useMStore = zStore({ name: 'mStore', storage: mmKvStorage });

export const mStoreState = useMStore.getState();