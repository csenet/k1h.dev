export const state = () => {
    counter: 0
}

export const mutations = {
    increment(stats) {
        state.counter++
    }
}