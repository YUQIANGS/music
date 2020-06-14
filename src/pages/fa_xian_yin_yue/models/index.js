import { getPlayList } from  '../services';
export default {
    namespace: 'fa_xian_yin_yue',
    state: {
        playList: []
    },
    reducers: {
        saveState(state, { payload: data }) {
            return {...state, ...data}
        }
    },
    effects: {
        * getPlayList({ payload: limit }, { call, put }) {
            try {
                const res = yield call(getPlayList, { limit });
                yield put({
                    type: 'saveState',
                    payload: {
                        playList: res.data,
                    }
                })
                return res;
            } catch (error) {
                console.log(error);
            }
        }
    }
}