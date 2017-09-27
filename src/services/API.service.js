/*
    @name: API.service.js
    @desc: Pixelstairs API 싱글톤 서비스
    @author: Evan Moon
    @created_at: 2017.08.27
*/

import axios from 'axios';
import Q from 'q';

import { CUSTOM_HEADER_PREFIX } from '../constants';
import { API_BASE_URL } from 'src/constants/env.constant';
import { API_LIST } from '../constants/api.constant';

const VERSION_KEY = `${CUSTOM_HEADER_PREFIX}version`;
const AUTH_KEY = `${CUSTOM_HEADER_PREFIX}token`;

class APIService {
    constructor (axios, API_LIST) {
        this._axios = axios.create({
            baseURL: API_BASE_URL,
            headers: {
                common: {
                    [VERSION_KEY]: '1.2.0'
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
            delete: (data) => this.DELETE(api, id, data)
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
            defer.reject(this.onError(err));
        });

        return defer.promise;
    }

    POST (api, id, data) {
        let defer = Q.defer();
        api = this.getURI(api, id);

        this._axios.post(api, data)
        .then(res => {
            console.log('=======API_SERVICE:GET RESPONSE!=======');
            defer.resolve(res.data);
        }, err => {
            defer.reject(this.onError(err));
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
            defer.reject(this.onError(err));
        });

        return defer.promise;
    }

    DELETE (api, id, data) {
        let defer = Q.defer();
        api = this.getURI(api, id);

        this._axios.delete(api, data)
        .then(res => {
            defer.resolve(res.data);
        }, err => {
            defer.reject(this.onError(err));
        });

        return defer.promise;
    }

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

    onError (err) {
        let error;
        if (err instanceof Error) {
            error = {
                status: 9999,
                statusText: err.message
            };
        }
        else {
            error = {
                status: err.response.status,
                statusText: err.response.statusText,
                data: err.response.data
            };
        }
        return error;
    }
}

const instance = new APIService(axios, API_LIST);
export default instance;
