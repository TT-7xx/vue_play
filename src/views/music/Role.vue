<template>
    <div class="Banner-Rank">
        <div class="Banner-wr">
            <ul class="in-banner">
                <li>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/role1.png" alt="崩坏三" class="img-1">
                    <span class="in-banner-name-1 in-banner-name-box">崩坏三
                        <span class="icon-right"></span>
                    </span>
                    </a>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/role2.png" alt="崩坏三" class="img-2">
                    <span class="in-banner-name-2 in-banner-name-box">崩坏三
                        <span class="icon-right"></span>
                    </span>
                    </a>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/role3.png" alt="崩坏三" class="img-3">
                    <span class="in-banner-name-3 in-banner-name-box">崩坏三
                        <span class="icon-right"></span>
                    </span>
                    </a>
                     <a href="javascript">
                      <img src="@/assets/images/pictures/role4.png" alt="崩坏三" class="img-4">
                    <span class="in-banner-name-4 in-banner-name-box">崩坏三
                        <span class="icon-right"></span>
                    </span>
                    </a>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/role5.png" alt="崩坏三" class="img-5">
                    <span class="in-banner-name-5 in-banner-name-box">崩坏三
                        <span class="icon-right"></span>
                    </span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
     name:'role',
    data:function(){
		return {
        }
	},

		methods: {
			show: function (value) {
				this.$router.push({name: value});//页面跳转
			}
		}
	}
</script>

<style scoped>
.in-banner img:hover{
  margin-top: 5px;
  margin-right: 5px;
}
</style>
