import Vue from 'vue';
import Skeleton from '../components/Skeleton/skeleton-2';
import Skeleton1 from '../components/Skeleton/skeleton-1';

export default new Vue({
    components: {
        Skeleton,
        Skeleton1
    },
    render: h => h(Skeleton),
});