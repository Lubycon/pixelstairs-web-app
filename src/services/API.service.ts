/*
    @name: API.service.ts
    @desc: Pixelstairs API 싱글톤 서비스
    @author: Evan Moon
    @created_at: 2017.08.27
*/

import axios from 'axios';
import Q from 'q';

import { CUSTOM_HEADER_PREFIX } from '../constants';
import { API_LIST } from '../constants/api.constant';

const VERSION_KEY: string = `${CUSTOM_HEADER_PREFIX}version`;
const DEVICE_KEY: string = `${CUSTOM_HEADER_PREFIX}device`;
const AUTH_KEY: string = `${CUSTOM_HEADER_PREFIX}token`;

class APIService {
    private _axios: any;
    private _apilist: any;
    private _myAuthToken: string;

    constructor(axios: any, API_LIST: any) {
        this._axios = axios.create({
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

    set authToken (newToken: string) {
        this._myAuthToken = newToken;
        this._axios.defaults.headers.common[AUTH_KEY] = this._myAuthToken;
    }

    get authToken (): string {
        return this._myAuthToken;
    }

    public destroyToken (): void {
        this._myAuthToken = null;
        delete this._axios.defaults.headers.common[AUTH_KEY];
    }

    public resource(api: string, id: any = null): any {
        return {
            get: (params) => this.GET(api, id, params),
            post: (data) => this.POST(api, id, data),
            put: (data) => this.PUT(api, id, data),
            delete: () => this.DELETE(api, id)
        }
    }

    private GET (api: string, id: any = null, params: any) {
        let defer: any = Q.defer();
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

    private POST (api: string, id: string = null, data: any): any {
        let defer: any = Q.defer();
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

    private PUT (api, id, data) {
        let defer: any = Q.defer();
        api = this.getURI(api, id);

        this._axios.put(api, data)
        .then(res => {
            defer.resolve(res.data)
        }, err => {
            defer.reject({
                status: err.response.status,
                statusText: err.response.statusText,
                data: err.response.data
            });
        });

        return defer.promise;
    }
    private DELETE (api, id) {}

    private getURI (api: string, id: any = null, uri: string = null, list: any = this._apilist, index: number = 0): string {
        let tmp: string[] = api.split('.');
        let type: string = typeof list[tmp[index]];
        uri = uri;

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

    private setParamsToAPI (uri:string, uriParams:any): string {
        const regx = /\{\w+\}/gi;
        const braket_regx = /[\{|\}]/g;

        let params: string[] = uri.match(regx);
        if (!params) {
            return uri;
        }

        params = params.map(v => {
            return v.replace(braket_regx, '');
        });

        let uriArr: string[] = uri.split('/').map(v => {
            return v.replace(braket_regx, '');
        });

        params.forEach(v => {
            let position: number = uriArr.indexOf(v);
            if (position > -1) uriArr[position] = uriParams[v];
        });

        return uriArr.join('/');
    }

    private generateAPI (API_LIST: any): any {
        let tmp: any = {};

        Object.keys(API_LIST).forEach((v: string) => {
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
