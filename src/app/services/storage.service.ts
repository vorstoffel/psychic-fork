import { Injectable } from '@angular/core';

export interface IStorage {
    getItem(key: string): string;
    setItem(key: string, value: string): void;
}

@Injectable({
    providedIn: 'root'
})
export class StorageService implements IStorage {

    getItem(key: string): string {
        return localStorage.getItem(key);
    }

    setItem(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    removeItem(key: string) {
        localStorage.removeItem(key);
    }
}

export class InMemoryStorage implements IStorage {
    private values = new Map<string, string>();

    getItem(key: string): string {
        return this.values.get(key);
    }

    setItem(key: string, value: string): void {
        this.values.set(key, value);
    }
}
