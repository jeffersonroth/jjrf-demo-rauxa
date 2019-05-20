<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Rauxa Coding Challenge
      <a href="https://github.com/RauxaRepo/Rauxa-UI-Code-Challenge" target="_blank" rel="noopener">Details</a>.
    </p>
    <h3>Challenges</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">Functional spec</a></li> | 
      <li><a href="https://github.com/RauxaRepo/Rauxa-UI-Code-Challenge/blob/master/fe_coding_challenge.md" target="_blank" rel="noopener">Test spec</a></li> | 
      <li><a href="https://github.com/RauxaRepo/Rauxa-UI-Code-Challenge/blob/master/tdd_coding_challenge.md" target="_blank" rel="noopener">Coding Challenge Guidelines</a></li>
    </ul>
    <h3>Jeff Roth - piá xiru</h3>
    <ul>
      <li><a href="https://github.com/jeffersonroth/" target="_blank" rel="noopener">Github</a></li> | 
      <li><a href="https://www.linkedin.com/in/jeffersonroth/" target="_blank" rel="noopener">Linkedin</a></li> | 
      <li><a href="skype:roth.jefferson?add" target="_blank" rel="noopener">Skype</a></li> | 
      <li><a href="intent://send/573208051222#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end" target="_blank" rel="noopener">Whatsapp</a></li> | 
      <li><a href="mailto:jjrothfilho@gmail.com" target="_blank" rel="noopener">Email</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
