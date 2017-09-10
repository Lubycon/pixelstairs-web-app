/*
    @name: LocalStorage.service.ts
    @desc: LocalStorage 인코딩, 디코딩 서비스
    @author: Evan Moon
    @created_at: 2017.09.02
*/

import Base64Service from 'src/services/Base64.service';

class LocalStorageService {
    save (val) {
        const KEY = this._encodeKey(val.key);
        const VALUE = this._encodeValue(val.value);

        window.localStorage.setItem(KEY, VALUE);
    }

    get (key) {
        const KEY = this._encodeKey(key);
        const VALUE = window.localStorage.getItem(KEY);

        return this._decode(VALUE);
    }

    clear (key) {
        const KEY = this._encodeKey(key);

        window.localStorage.removeItem(KEY);
    }

    clearAll () {
        window.localStorage.clear();
    }

    _encodeKey (key) {
        if (!key) {
            return null;
        }
        else {
            return Base64Service.encode(`lubycon-${key}`).split('').reverse().join('');
        }
    }

    _encodeValue (value) {
        if (!value) {
            return null;
        }
        else {
            value = JSON.stringify(value);
            return Base64Service.encode(value);
        }
    }

    _decode (value) {
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
