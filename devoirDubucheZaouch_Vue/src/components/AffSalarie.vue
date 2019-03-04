<template lang="html">
  <div class="global">
    <h1>Afficher Salarie</h1>
    <form>
      <div class="form">
        <input type="text" v-model = "id">
      </div>
      <button type="button" name="Button" v-on:click="formData(id)">Afficher</button>
    </form>
    <div class="">
      <p>nom: {{ salarie.nom }}</p>
      <p>prenom: {{ salarie.prenom }}</p>
      <p>username: {{ salarie.username }}</p>
      <p>anniv: {{ salarie.anniv }}</p>
      <p>address : {{ salarie.address }}</p>
      <p>tel : {{ salarie.tel }}</p>
      <p>mail : {{ salarie.mail }}</p>
      <p>poste : {{ salarie.poste }}</p>
    </div>
  </div>
</template>

<script>
  import ServiceSalarie from '../services/ServiceSalarie.vue'

  export default {
    data () {
      return {
        id: '',
        salarie: [],
        isVisible: false
      }
    },
    methods: {
      formData: function (id) {
        ServiceSalarie.AffSalarie(id)
        .then((data) => {
        console.log(data)
        this.salarie = data
        })
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
