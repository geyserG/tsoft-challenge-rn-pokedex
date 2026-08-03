export interface LocalStorage {
  setItem(key: string, value: string): void;
  getItem(key: string): Promise<string | null>;
}
