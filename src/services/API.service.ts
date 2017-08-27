/*
    @name: API.service.ts
    @desc: Pixelstairs API 싱글톤 서비스
    @author: Evan Moon
    @created_at: 2017.08.27
*/

import axios from 'axios';
import { CUSTOM_HEADER_PREFIX } from '../constants';
import { API_LIST } from '../constants/api.constant';

const VERSION_KEY: string = `${CUSTOM_HEADER_PREFIX}version`;
const DEVICE_KEY: string = `${CUSTOM_HEADER_PREFIX}device`;
const AUTH_KEY: string = `${CUSTOM_HEADER_PREFIX}token`;

class APIService {
    private _axios: any;
    private _apilist: any;
    private _authToken: string;

    constructor(axios: any, apilist: any) {
        this._axios = axios.create({
            baseURL: 'http://192.168.99.100:8080/v1',
            timeout: 2000
        });
        this._apilist = apilist;

        this._axios.defaults.headers.common[VERSION_KEY] = '1.2.0';
        this._axios.defaults.headers.common[DEVICE_KEY] = 'bs=dvc=os=';
    }

    set authToken (newToken: string) {
        this._authToken = newToken;
        this._axios.defaults.headers.common[AUTH_KEY] = this._authToken;
    }

    get authToken () {
        return this.authToken;
    }
}

const instance = new APIService(axios, API_LIST);
export default instance;

function __getURI__(api: string, id: string, uri: string, list: any = API_LIST, index: number = 0): string {
    let tmp: string[] = api.split('.');
    let type: string = typeof list[tmp[index]];
    uri = uri;

    if(list[tmp[index]]) {
        if(type === 'string') {
            uri = list[tmp[index]];
            return __setParamsToAPI__(uri, id);
        }
        else if(type === 'object') {
            return __getURI__(api, id, tmp[index], list[tmp[index]], index + 1);
        }
    }
    else {
        return uri;
    }
}

function __setParamsToAPI__(uri:string, uriParams:any): string {
    const regx = /\{.+\}/gi;
    const braket_regx = /[\{|\}]/g;

    let params: string[] = uri.match(regx);
    if(!params) {
        return uri;
    }

    params = params.map(v => {
        return v.replace(braket_regx, '');
    });

    let uriArr: string[] = uri.split('/').map(v => {
        return v.replace(braket_regx, '');
    });

    params.forEach(v => {
        let position: number = uri.indexOf(v);
        if(position > -1) uriArr[position] = uriParams[v];
    });

    return uriArr.join('/');
}
