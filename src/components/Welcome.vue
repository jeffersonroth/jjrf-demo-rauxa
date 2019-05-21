<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br/>
    <br/>
    <p>
      Rauxa Coding Challenge
      <a href="https://github.com/RauxaRepo/Rauxa-UI-Code-Challenge" target="_blank" rel="noopener">Details</a>.
    </p>
    <br/>
    -
    <br/>
    <h3>Challenges</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">Functional spec</a></li> | 
      <li><a href="https://github.com/RauxaRepo/Rauxa-UI-Code-Challenge/blob/master/fe_coding_challenge.md" target="_blank" rel="noopener">Test spec</a></li> | 
      <li><a href="https://github.com/RauxaRepo/Rauxa-UI-Code-Challenge/blob/master/tdd_coding_challenge.md" target="_blank" rel="noopener">Coding Challenge Guidelines</a></li>
    </ul>
    <br/>
    -
    <br/>
    <h3>Source Code</h3>
    <ul>
      <li><a href="https://github.com/jeffersonroth/jr-rauxa-gh/" target="_blank" rel="noopener">Github</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
