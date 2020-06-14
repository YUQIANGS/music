export default {
    namespace: 'account',
    state: {
        menuTagList: []
    },
    reducers: {
        // 保存menuTag
        saveMenuTag(state, { payload: menu }) {
            if(state.menuTagList.filter(item => item.id == menu.id).length > 0) return;
            const menuTagList = [...state.menuTagList, menu];
            return { ...state, menuTagList };
        },

        // 移除menuTag
        delMenuTag(state, { payload: menu }) {
            const menuTagList = [...state.menuTagList].filter(item => item.id !== menu.id);
            return { ...state, menuTagList };
        }
    },
}