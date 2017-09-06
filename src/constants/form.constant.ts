/*
    @name: form.constant.ts
    @desc: 픽셀스테어스 폼 컨트롤 상수 목록
    @author: Evan Moon
    @created_at: 2017.09.07
*/
import { ArtworkForm } from 'src/interfaces/Form.interface';

export const ARTWORK_UPLOAD_FORM: Array<ArtworkForm> = [{
    title: 'Artwork upload',
    desc: 'Upload your artwork',
    type: 'image-upload'
},{
    title: 'Artwork Title',
    desc: 'Please type your artworks title',
    type: 'title'
},{
    title: 'Tags',
    desc: 'You can write down using only English',
    type: 'tag'
},{
    title: 'Descriptions',
    desc: 'Please write down some description about your artwork',
    type: 'description'
}];
