/*
    @name: API.service.js
    @desc: Pixelstairs API 싱글톤 서비스
    @author: Evan Moon
    @created_at: 2017.08.27
*/

import axios from 'axios';
import Q from 'q';

import { CUSTOM_HEADER_PREFIX } from '../constants';
import { API_LIST } from '../constants/api.constant';

const VERSION_KEY = `${CUSTOM_HEADER_PREFIX}version`;
const DEVICE_KEY = `${CUSTOM_HEADER_PREFIX}device`;
const AUTH_KEY = `${CUSTOM_HEADER_PREFIX}token`;

class APIService {
    constructor (axios, API_LIST) {
        this._axios = axios.create({
            // baseURL: 'https://apidev.pixelstairs.com/v1',
            baseURL: 'http://192.168.99.100:8080/v1',
            headers: {
                common: {
                    [VERSION_KEY]: '1.2.0',
                    [DEVICE_KEY]: 'bs=dvc=os='
                }
            }
        });

        this._apilist = this.generateAPI(API_LIST);
    }

    set authToken (newToken) {
        this._myAuthToken = newToken;
        this._axios.defaults.headers.common[AUTH_KEY] = this._myAuthToken;
    }

    get authToken () {
        return this._myAuthToken;
    }

    destroyToken () {
        this._myAuthToken = null;
        delete this._axios.defaults.headers.common[AUTH_KEY];
    }

    resource (api, id = null) {
        return {
            get: (params) => this.GET(api, id, params),
            post: (data) => this.POST(api, id, data),
            put: (data) => this.PUT(api, id, data),
            delete: () => this.DELETE(api, id)
        };
    }

    GET (api, id, params) {
        let defer = Q.defer();
        api = this.getURI(api, id);

        this._axios.get(api, {
            params
        }).then(res => {
            defer.resolve(res.data);
        }, err => {
            defer.reject({
                status: err.response.status,
                statusText: err.response.statusText,
                data: err.response.data
            });
        });

        return defer.promise;
    }

    POST (api, id, data) {
        let defer = Q.defer();
        api = this.getURI(api, id);

        this._axios.post(api, data)
        .then(res => {
            defer.resolve(res.data);
        }, err => {
            defer.reject({
                status: err.response.status,
                statusText: err.response.statusText,
                data: err.response.data
            });
        });

        return defer.promise;
    }

    PUT (api, id, data) {
        let defer = Q.defer();
        api = this.getURI(api, id);

        this._axios.put(api, data)
        .then(res => {
            defer.resolve(res.data);
        }, err => {
            defer.reject({
                status: err.response.status,
                statusText: err.response.statusText,
                data: err.response.data
            });
        });

        return defer.promise;
    }
    DELETE (api, id) {}

    getURI (api, id, uri, list = this._apilist, index = 0) {
        let tmp = api.split('.');
        let type = typeof list[tmp[index]];

        if (list[tmp[index]]) {
            if (type === 'string') {
                uri = list[tmp[index]];
                return this.setParamsToAPI(uri, id);
            }
            else if (type === 'object') {
                return this.getURI(api, id, tmp[index], list[tmp[index]], index + 1);
            }
        }
        else {
            return uri;
        }
    }

    setParamsToAPI (uri, uriParams) {
        const regx = /\{\w+\}/gi;
        const braketRegx = /[{|}]/g;

        let params = uri.match(regx);
        if (!params) {
            return uri;
        }

        params = params.map(v => {
            return v.replace(braketRegx, '');
        });

        let uriArr = uri.split('/').map(v => {
            return v.replace(braketRegx, '');
        });

        params.forEach(v => {
            let position = uriArr.indexOf(v);
            if (position > -1) uriArr[position] = uriParams[v];
        });

        return uriArr.join('/');
    }

    generateAPI (API_LIST) {
        let tmp = {};

        Object.keys(API_LIST).forEach(v => {
            if (API_LIST[v] instanceof Function) {
                tmp[v] = API_LIST[v]();
            }
            else {
                tmp[v] = API_LIST[v];
            }
        });

        return tmp;
    }
}

const instance = new APIService(axios, API_LIST);
export default instance;
