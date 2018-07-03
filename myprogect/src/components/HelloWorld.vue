<template>
  <div class="hello">
    <button @click="turn">{{msg}}</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'class3'
    }
  },
  methods: {
    turn () {
      alert('succeed')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
