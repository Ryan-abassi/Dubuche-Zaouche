<template lang="html">
  <div class="global">
    <h1>Créer votre Client !</h1>
    <form>
      <div class="form">
        <input type="text" v-model = "nom">
      </div>
      <div class="form">
        <input type="text" v-model = "address">
      </div>
      <div class="form">
        <input type="text" v-model = "contact">
      </div>
      <div class="form">
        <input type="text" v-model = "secteur">
      </div>
      <button type="button" name="Button" v-on:click="formData(nom,address,contact,secteur)">Créer</button>
    </form>
  </div>
</template>

<script>
import ServiceClient from '../services/ServiceClient.vue'

export default {
  data () {
    return {
      'nom': nom,
      'address': address,
      'contact': contact,
      'secteur': secteur,
      isVisible: false
    }
  },
  methods: {
    formData: function (nom, address, contact, secteur) {
      ServiceClient.CreeClient(nom, address, contact, secteur)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
