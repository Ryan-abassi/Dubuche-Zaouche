<template lang="html">
  <div class="global">
    <h1>Supprimer Client</h1>
    <form>
      <div class="form">
        <input type="text" v-model = "id">
      </div>
      <button type="button" name="Button" v-on:click="formData(id)">Supprimer</button>
    </form>
  </div>
</template>

<script>
import ServiceClient from '../services/ServiceClient.vue'

export default {
  data () {
    return {
      id: '',
      isVisible: false
    }
  },
  methods: {
    formData: function (id){
      ServiceClient.SupprClient(id)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
