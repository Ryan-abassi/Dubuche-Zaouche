<template lang="html">
  <div class="global">
    <h1>Modifier votre Salarie !</h1>
    <form>
      <div class="form">
        <input type="text" v-model = "id">
      </div>
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
      <button type="button" name="Button" v-on:click="formData(id, nom, prenom, username, anniv, address, tel, mail, poste)">Modif</button>
    </form>
  </div>
</template>

<script>
import ServiceSalarie from '../services/ServiceSalarie.vue'

export default {
  data () {
    return {
      'id': id,
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
    formData: function (id, nom, prenom, username, anniv, address, tel, mail, poste) {
      ServiceSalarie.MajSalarie(id, nom, prenom, username, anniv, address, tel, mail, poste)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
