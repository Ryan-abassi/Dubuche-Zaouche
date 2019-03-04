<template lang="html">
  <div class="global">
    <h1>Modifier votre Projet !</h1>
    <form>
      <div class="form">
        <input type="text" v-model = "id">
      </div>
      <div class="form">
        <input type="text" v-model = "nom">
      </div>
      <div class="form">
        <input type="text" v-model = "description">
      </div>
      <div class="form">
        <input type="text" v-model = "debdate">
      </div>
      <div class="form">
        <input type="text" v-model = "findate">
      </div>
      <div class="form">
        <input type="text" v-model = "montant">
      </div>
      <div class="form">
        <input type="text" v-model = "statut">
      </div>
      <button type="button" name="Button" v-on:click="formData(id, nom,description,debdate,findate,montant,statut)">Modif</button>
    </form>
  </div>
</template>

<script>
import ServiceProjet from '../services/ServiceProjet.vue'

export default {
  data () {
    return {
      'id': id,
      'nom': nom,
      'desc': desc,
      'debdate': debdate,
      'findate': findate,
      'montant': montant,
      'statut': statut,
      isVisible: false
    }
  },
  methods: {
    formData: function (id, nom,description,debdate,findate,montant,statut) {
      ServiceProjet.MajProjet(id, nom,description,debdate,findate,montant,statut)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
