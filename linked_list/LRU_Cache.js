class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }

    put(key, value) {
        if(this.map.has(key)) {
            this.map.delete(key);
        }else if(this.map.size >= this.capacity) {
            const key = this.map.keys().next().value

            this.map.delete(key);
        }

        this.map.set(key, value);
        return null;

    }


    get(key) {
        if (!this.map.has(key)) {
            console.log(-1);
            return -1;
        }

        const value = this.map.get(key);

        this.map.delete(key);
        this.map.set(key, value);

        return value;
    }

}