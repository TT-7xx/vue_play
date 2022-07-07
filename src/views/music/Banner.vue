<template>
    <div class="Nav-title">
        <ul  class="tags-list">
            <li><a :class="{active : current=='Risk'}" @click="current='Risk'">冒险</a></li>
            <li><a :class="{active : current=='Role'}" @click="current='Role'">角色扮演</a></li>
            <li><a :class="{active : current=='Sports'}" @click="current='Sports'">竞技</a></li>
            <li><a :class="{active : current=='Love'}" @click="current='Love'">恋爱</a></li>
            <li><a :class="{active : current=='Cultivate'}" @click="current='Cultivate'">养成</a></li>     
        </ul>
        <component :is="current">
			
		</component>
    </div>
</template>

<script>
import Risk  from '@/views/music/Risk'
import Role  from '@/views/music/Role'
import Sports  from '@/views/music/Sports'
import Love from '@/views/music/Love'
import Cultivate from '@/views/music/Cultivate'


export default {
    name:'banner',
    data: function(){
		return {
			current: 'Risk' 
		}
	},
    components: {
  	Risk,
    Role,
    Sports,
    Love,
    Cultivate
  }
}
</script>

<style scoped>

</style>