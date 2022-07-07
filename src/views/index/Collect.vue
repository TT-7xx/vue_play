<template>
    <div id="main">
        <div id="banner">
            <Banner/>
        </div>
        <div id="orignal">
            <Orignal/>
        </div>
        <div id="ranking">
            <div id="ranking-left">
                <Ranking/>
            </div>
            <div id="ranking-right">
                <Black/>
            </div>
        </div>
        <div id="classify">
                <Classify/>
            </div>
        <div id="change">
            <Change/>
        </div>
        <div id="disscues">
            <Disscues/>
        </div>
    </div>
</template>

<script>
import Disscues from '@/views/index/Disscues'
import Change from '@/views/index/Change'
import Classify from '@/views/index/Classify'
import Black from '@/views/index/Black'
import Ranking from '@/views/index/Ranking'
import Banner from '@/views/index/Banner'
import Orignal from '@/views/index/Orignal'
export default {
	name:'collect',
	components:{
		Banner,
        Orignal,
        Ranking,
        Black,
        Classify,
        Change,
        Disscues
	}
}
</script>

<style scoped>
@import '~@/assets/css/collect.css';
</style>