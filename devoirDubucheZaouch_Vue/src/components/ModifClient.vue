<template lang="html">
  <div class="global">
    <h1>Modif votre client !</h1>
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
      <div class="form">
        <input type="text" v-model = "id">
      </div>
      <button type="button" name="Button" v-on:click="formData(id,nom,address,contact,secteur)">Modifier</button>
    </form>
  </div>
</template>

<script>
import ServiceClient from '../services/ServiceClient.vue'

export default {
  data () {
    return {
      'id': id,
      'nom': nom,
      'address': address,
      'contact': contact,
      'secteur': secteur,
      isVisible: false
    }
  },
  methods: {
    formData: function (id, nom, address, contact, secteur) {
      ServiceClient.MajClient(id, nom, address, contact, secteur)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
