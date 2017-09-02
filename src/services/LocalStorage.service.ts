/*
    @name: LocalStorage.service.ts
    @desc: Cookie 인코딩, 디코딩 서비스
    @author: Evan Moon
    @created_at: 2017.09.02
*/

import Cookies from 'js-cookie';
import Base64Service from 'src/services/Base64.service';

interface Cookie {
    key: string;
    value: any;
    options: any;
}

class LocalStorageService {
    private _cookie: any;
    constructor (CookieModule: any) {
        this._cookie = CookieModule;
    }

    public save(val: Cookie): void {
        const KEY: string = this._encodeKey(val.key);
        const VALUE: string = this._encodeValue(val.value);

        localStorage.setItem(KEY, VALUE);
    }

    public get(key: string): any {
        const KEY: string = this._encodeKey(key);
        const VALUE: any = localStorage.getItem(KEY);

        return this._decode(VALUE);
    }

    public clear(): void {
        localStorage.clear();
    }

    private _encodeKey(key: string): string {
        if(!key) {
            return null;
        }
        else {
            return Base64Service.encode(`lubycon-${key}`).split('').reverse().join('');
        }
    }

    private _encodeValue(value: string): string {
        if(!value) {
            return null;
        }
        else {
            value = JSON.stringify(value);
            return Base64Service.encode(value);
        }
    }

    private _decode(value: string): any {
        if(!value) {
            return null;
        }
        else {
            value = Base64Service.decode(value);
            return JSON.parse(value);
        }
    }
}

const instance = new LocalStorageService(Cookies);
export default instance;
