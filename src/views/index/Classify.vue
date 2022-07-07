<template>
    <div class="classify-box">
        <div class="classify-header">
            <ul>
                <li><a :class="{active : current == 'Love'}" @click="current='Love'" >恋爱</a></li>
                <li><a :class="{active : current == 'School'}" @click="current='School'" >校园</a></li>
                <li><a :class="{active : current == 'Plot'}" @click="current='Plot'">剧情</a></li>
                <li><a :class="{active : current == 'Ancient'}" @click="current='Ancient'">古风</a></li>
                <li><a :class="{active : current == 'Strange'}" @click="current='Strange'">奇幻</a></li>
                <li><a :class="{active : current == 'Innovative'}" @click="current='Innovative'">原创</a></li>
                <li ><a class="move">更多分类</a></li>
            </ul>
        </div>
        <component :is="current"></component>
    </div>
</template>

<script>
import Love from '@/views/index/Love'
import School from '@/views/index/School'
import Plot from '@/views/index/Plot'
import Ancient from '@/views/index/Ancient'
import Innovative from '@/views/index/Innovative'
import Strange from '@/views/index/Strange'
export default {
    name:'classify',
    data:function(){
        return{
            current:'Love'
        }
    },
   components:{
        Love,
        School,
        Plot,
        Ancient,
        Strange,
        Innovative
    }

}
</script>