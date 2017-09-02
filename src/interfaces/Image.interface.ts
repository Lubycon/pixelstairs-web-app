/*
    @name: Image.interface.ts
    @desc: 픽셀스테어스 이미지 데이터 규격 인터페이스
    @author: Evan Moon
    @created_at: 2017.08.27
*/

export interface Image {
    id: string;
    file: string;
    deleted: boolean;
    index: number;
    isPixelOwn: number;
}
