/*
    @name: Image.interface.ts
    @desc: 픽셀스테어스 API 응답 인터페이스
    @author: Evan Moon
    @created_at: 2017.09.09
*/
interface ResponseStatus {
    code: string;
    devMsg?: string;
    msg: string;
}

export interface Response {
    status: ResponseStatus;
    result: any;
}
