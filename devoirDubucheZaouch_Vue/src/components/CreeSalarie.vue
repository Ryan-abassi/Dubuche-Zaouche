<template lang="html">
  <div class="global">
    <h1>Créer votre Salarie !</h1>
    <form>
      <div class="form">
        <input type="text" v-model = "nom">
      </div>
      <div class="form">
        <input type="text" v-model = "prenom">
      </div>
      <div class="form">
        <input type="text" v-model = "username">
      </div>
      <div class="form">
        <input type="text" v-model = "anniv">
      </div>
      <div class="form">
        <input type="text" v-model = "address">
      </div>
      <div class="form">
        <input type="text" v-model = "tel">
      </div>
      <div class="form">
        <input type="text" v-model = "mail">
      </div>
      <div class="form">
        <input type="text" v-model = "poste">
      </div>
      <button type="button" name="Button" v-on:click="formData(nom, prenom, username, anniv, address, tel, mail, poste)">Créer</button>
    </form>
  </div>
</template>

<script>
import ServiceSalarie from '../services/ServiceSalarie.vue'

export default {
  data () {
    return {
      'nom': nom,
      'prenom': prenom,
      'username': username,
      'anniv': anniv,
      'address': address,
      'tel': tel,
      'mail': mail,
      'poste': poste,
      isVisible: false
    }
  },
  methods: {
    formData: function (nom, prenom, username, anniv, address, tel, mail, poste) {
      ServiceSalarie.CreeSalarie(nom, prenom, username, anniv, address, tel, mail, poste)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
