<template>
    <div class="contribute">
        <div class="contribute-newest">
            <span>原创投稿</span>
            <ul>
                <li><a :class="{active : current == 'Edit'}" @click="current='Edit'">编辑推荐</a></li>
                <li><a :class="{active : current == 'Newest'}" @click="current='Newest'">最新上架</a></li>
            </ul>
        </div>
        <component :is="current"></component>
    </div>
</template>

<script>
import Edit from '@/views/index/Edit'
import Newest from '@/views/index/Newest'
export default {
    name:'orignal',
    data:function(){
        return{
            current:'Edit'
        }
    },
    components:{
        Edit,
        Newest
    }
}
</script>