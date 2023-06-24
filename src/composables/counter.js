import { EventBus } from '../event-bus.js'

export default {
    data() {
        return {
            count: 0
        }
    },
    created() {
        EventBus.$on('countChanged', count => {
            this.count = count
        })
    },
    methods: {
        increment() {
            this.count++
            EventBus.$emit('countChanged', this.count)
        }
    }
}