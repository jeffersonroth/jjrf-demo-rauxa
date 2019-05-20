<template>
  <div class="home">
    <img alt="Jeff Roth logo" src="../assets/logo.png">
    <HelloWorld msg="Tereguahê porãke / Welcome to Github Username Search App by Jeff Roth"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
