import { LocalStorage } from './LocalStorage';
import { createAsyncStorage } from '@react-native-async-storage/async-storage';

export const storage = createAsyncStorage('appDB');

export class LocalStorageImpl implements LocalStorage {
  getItem(key: string): Promise<string | null> {
    return storage.getItem(key);
  }
  setItem(key: string, value: string): Promise<void> {
    return storage.setItem(key, value);
  }
}
