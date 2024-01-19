// provide 注册了数据后，所有的子组件都可以通过 inject 获取数据，
// 这两个函数官方文档介绍得比较详细，我在这里就不过多解释了。
import {inject,reactive} from 'vue'
const STORE_KEY = '__store__'

function useStore() {
    return inject(STORE_KEY)
}

function createStore(options) {
    return new Store(options)
}

class Store {
    constructor() {
        this._state = reactive({
            data: options.state()
        })
    }
    get state() {
        return this._state.data
    }
    commit = (type, payload) => {
        const entry = this._mutations[type]
        entry && entry(this.state, payload)
    }
    // main.js 映入app.use(store的时候会之星install函数)
    install(app) {
        app.provide(STORE_KEY, this)
    }
}

export {
    createStore,
    useStore
}