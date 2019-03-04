<template lang="html">
  <div class="global">
    <h1>Afficher Client</h1>
    <form>
      <div class="form">
        <input type="text" v-model = "id">
      </div>
      <button type="button" name="Button" v-on:click="formData(id)">Afficher</button>
    </form>
    <div class="">
      <p>nom: {{ client.nom }}</p>
      <p>addresse: {{ client.address }}</p>
      <p>contact: {{ client.contact }}</p>
      <p>secteur: {{ client.secteur }}</p>
    </div>
  </div>
</template>

<script>
import ServiceClient from '../services/ServiceClient.vue'

export default {
  data () {
    return {
      id: '',
      client: [],
      isVisible: false
    }
  },
  methods: {
    formData: function (id) {
      ServiceClient.AffClient(id)
      .then((data) => {
      console.log(data)
      this.client = data
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
