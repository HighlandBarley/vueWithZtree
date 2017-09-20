<template>
  <div id="home">
    hello world
    <div class="content-wrapper">
      <transition name="fade" mode="out-in">
        <router-view></router-view>  
      </transition>
    </div>
  </div>
</template>



<script>
export default {
  name: 'home',
  components:{
    
  },
  data:function(){
    return{
      
    }
  },
  computed:{
      
  },
  methods:{

  }
}
</script>

<style>
@import '../common/css/common.css';
</style>
