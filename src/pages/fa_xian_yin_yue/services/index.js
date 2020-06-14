import request from '@/utils/request';
import { MUSIC_BASE_PATH } from  '../../../config/project';

export function getPlayList(params) {
    return request({
        url: MUSIC_BASE_PATH + 'personalized',
        method: 'GET',
        params
    });
}