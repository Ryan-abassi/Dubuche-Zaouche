<template lang="html">
  <div class="global">
    <h1>Supprimer Projet</h1>
    <form>
      <div class="form">
        <input type="text" v-model = "id">
      </div>
      <button type="button" name="Button" v-on:click="formData(id)">Supprimer</button>
    </form>
  </div>
</template>

<script>
import ServiceProjet from '../services/ServiceProjet.vue'

export default {
  data () {
    return {
      id: '',
      isVisible: false
    }
  },
  methods: {
    formData: function (id){
      ServiceProjet.SupprProjet(id)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
