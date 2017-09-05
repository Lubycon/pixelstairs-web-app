/*
    @name: LocalStorage.service.ts
    @desc: LocalStorage 인코딩, 디코딩 서비스
    @author: Evan Moon
    @created_at: 2017.09.02
*/

import Base64Service from 'src/services/Base64.service';

interface Dataset {
    key: string;
    value: any;
}

class LocalStorageService {
    constructor () {}

    public save(val: Dataset): void {
        const KEY: string = this._encodeKey(val.key);
        const VALUE: string = this._encodeValue(val.value);

        window.localStorage.setItem(KEY, VALUE);
    }

    public get(key: string): any {
        const KEY: string = this._encodeKey(key);
        const VALUE: any = window.localStorage.getItem(KEY);

        return this._decode(VALUE);
    }

    public clear(key: string): void {
        const KEY: string = this._encodeKey(key);

        window.localStorage.removeItem(KEY);
    }

    public clearAll(): void {
        window.localStorage.clear();
    }

    private _encodeKey(key: string): string {
        if (!key) {
            return null;
        }
        else {
            return Base64Service.encode(`lubycon-${key}`).split('').reverse().join('');
        }
    }

    private _encodeValue(value: string): string {
        if (!value) {
            return null;
        }
        else {
            value = JSON.stringify(value);
            return Base64Service.encode(value);
        }
    }

    private _decode(value: string): any {
        if (!value) {
            return null;
        }
        else {
            value = Base64Service.decode(value);
            return JSON.parse(value);
        }
    }
}

const instance = new LocalStorageService();
export default instance;
