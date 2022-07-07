<template>
    <div class="box">
        <One/>
        <Two/>
        <Three/>
        <Four/>
        <Five/>
        <Six/>
    </div>
</template>
<script>
import One from '@/views/books/One.vue'
import Two from '@/views/books/Two.vue'
import Three from '@/views/books/Three.vue'
import Four from '@/views/books/Four.vue'
import Five from '@/views/books/Five.vue'
import Six from '@/views/books/Six.vue'


export default {
    name : 'books',
    components:{
        One,
        Two,
        Three,
        Four,
        Five,
        Six
    }
}
</script>
<style scoped>
@import '~@/assets/css/one.css';
@import '~@/assets/css/two.css';
@import '~@/assets/css/three.css';
@import '~@/assets/css/four.css';
@import '~@/assets/css/five.css';
@import '~@/assets/css/six.css';
</style>