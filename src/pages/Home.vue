<template>
  <div>
    this is template {{count}}
    <button @click="increment">+</button>
  </div>
</template>

<script>
  export default{
      computed: {
        count () {
          return this.$store.getters.count
        }
      },
      methods: {
        increment () {
          this.$store.commit('increment')
        }
      }
  }
</script>
