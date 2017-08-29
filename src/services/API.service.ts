/*
    @name: API.service.ts
    @desc: Pixelstairs API 싱글톤 서비스
    @author: Evan Moon
    @created_at: 2017.08.27
*/

import axios from 'axios';
import $ from 'jquery';

import { CUSTOM_HEADER_PREFIX } from '../constants';
import { API_LIST } from '../constants/api.constant';

const VERSION_KEY: string = `${CUSTOM_HEADER_PREFIX}version`;
const DEVICE_KEY: string = `${CUSTOM_HEADER_PREFIX}device`;
const AUTH_KEY: string = `${CUSTOM_HEADER_PREFIX}token`;

class APIService {
    private _axios: any;
    private _apilist: any;
    private _authToken: string;

    constructor(axios: any, API_LIST: any) {
        this._axios = axios.create({
            baseURL: 'http://192.168.99.100:8080/v1',
            timeout: 2000
        });
        this._apilist = this.generateAPI(API_LIST);

        this._axios.defaults.headers.common[VERSION_KEY] = '1.2.0';
        this._axios.defaults.headers.common[DEVICE_KEY] = 'bs=dvc=os=';
    }

    // set authToken (newToken: string) {
    //     this._authToken = newToken;
    //     this._axios.defaults.headers.common[AUTH_KEY] = this._authToken;
    // }
    //
    // get authToken () {
    //     return this.authToken;
    // }

    public resource(api: string, id: string = null): any {
        return {
            get: (params) => this.GET(api, id, params),
            post: (data) => this.POST(api, id, data),
            put: (data) => this.PUT(api, id, data),
            delete: () => this.DELETE(api, id)
        }
    }

    private GET (api: string, id: string, params: any) {

    }
    private POST (api: string, id: string, data: any): any {
        let defer:any = $.Deferred();
        api = this.getURI(api, id);
        console.log(api);

        return this._axios.post(api, data, {

        });
    }
    private PUT (api, id, data) {}
    private DELETE (api, id) {}

    private getURI (api: string, id: string, uri: string = null, list: any = this._apilist, index: number = 0): string {
        let tmp: string[] = api.split('.');
        let type: string = typeof list[tmp[index]];
        uri = uri;

        if(list[tmp[index]]) {
            if(type === 'string') {
                uri = list[tmp[index]];
                return this.setParamsToAPI(uri, id);
            }
            else if(type === 'object') {
                return this.getURI(api, id, tmp[index], list[tmp[index]], index + 1);
            }
        }
        else {
            return uri;
        }
    }

    private setParamsToAPI (uri:string, uriParams:any): string {
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

    private generateAPI (API_LIST: any): any {
        let tmp: any = {};

        Object.keys(API_LIST).forEach((v: string) => {
            if(API_LIST[v] instanceof Function) {
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
