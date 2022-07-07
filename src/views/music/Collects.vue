<template>
   <div id="content">
       <div id="Top">
           <Notice/>
           <Slide/>
           <List/>
       </div>
       <div id="center">
            <Comic/>
            <Game/>
       </div>
       <div id="bottom">
           <div id="bottom-left">
               <Banner/>
           </div>
           <div id="bottom-right">
                <Rank/>
           </div>
           
           
       </div>
   </div>
</template>

<script>
import Notice from '@/views/music/Notice'
import Slide from '@/views/music/Slide'
import List  from '@/views/music/List'
import Comic from '@/views/music/Comic'
import Game from '@/views/music/Game'
import Banner from '@/views/music/Banner'
import Rank from '@/views/music/Rank'
export default {
    name:'collects',
    components:{
        Notice,
        Slide,
        List,
        Comic,
        Game,
        Banner,
        Rank
    }
}
</script>

<style scoped>
@import '~@/assets/css/music.css';
</style>