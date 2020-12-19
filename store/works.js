import worksData from '~/assets/json/works.json';

//　状態の管理
export const state = () => ({
    data: worksData,
})

// getters
export const getters = {
    getAll: (state) => {
        return state.data
    }
}