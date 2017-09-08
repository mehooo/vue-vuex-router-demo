<template>
  <div>
    this is template {{msg}}
    <button @click="writed">写</button>
  </div>
</template>

<script>
  export default{
    computed:{
      msg(){
        return this.$store.getters.msg
      }
    },
    methods:{
      writed(){
        this.$store.dispatch('write')
      }
    }
  }
</script>
