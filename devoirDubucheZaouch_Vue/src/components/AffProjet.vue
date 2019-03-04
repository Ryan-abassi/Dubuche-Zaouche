<template lang="html">
  <div class="global">
    <h1>Afficher Projet</h1>
    <form>
      <div class="form">
        <input type="text" v-model = "id">
      </div>
      <button type="button" name="Button" v-on:click="formData(id)">Afficher</button>
    </form>
    <div class="">
      <p>nom: {{ projet.nom }}</p>
      <p>descritpion: {{ projet.desc }}</p>
      <p>debut date: {{ projet.debdate }}</p>
      <p>fin date: {{ projet.findate }}</p>
      <p>monant : {{ projet.montant }}</p>
      <p>statut : {{ projet.statut }}</p>
    </div>
  </div>
</template>

<script>
  import ServiceProjet from '../services/ServiceProjet.vue'

  export default {
    data () {
      return {
        id: '',
        projet: [],
        isVisible: false
      }
    },
    methods: {
      formData: function (id) {
        ServiceProjet.AffProjet(id)
        .then((data) => {
        console.log(data)
        this.projet = data
        })
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
