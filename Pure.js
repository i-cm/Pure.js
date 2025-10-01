export { pure as default }

class Result {
    constructor(res) {
        this.result = res
    }
}

const pure = (new(class {
    constructor() {
        this.cache = []
        this.id = 0
        this.funcTake = (func) => {
        const ID = this.id
        this.id++
        this.cache[ID] = {}
        return (...args) => {
            if (this.cache[ID][args] != undefined) {
                return this.cache[ID][args].result
            } else {
                const result = func(...args)
                this.cache[ID][args] = new Result(result)
                return result
            }
        }
    }
    }
})).funcTake
