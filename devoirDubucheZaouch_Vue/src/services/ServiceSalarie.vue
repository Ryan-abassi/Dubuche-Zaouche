<script>
const UrlCree = 'http://localhost:3000/api/v1/CreeSalarie'
const UrlModif = 'http://localhost:3000/api/v1/MajSalarie/'
const UrlAff = 'http://localhost:3000/api/v1/AffSalarie/'
const UrlSuppr = 'http://localhost:3000/api/v1/SupprSalarie/'

export default {
  getProducts () {
    return fetch(UrlCree)
      .then((response) => {
        return response.json()
      })
  },
  CreeSalarie (nom, prenom, username, anniv, address, tel, mail, poste) {
    return fetch(UrlCree, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'nom': nom,
          'prenom': prenom,
          'username': username,
          'anniv': anniv,
          'address': address,
          'tel': tel,
          'mail': mail,
          'poste': poste
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  SupprSalarie (id) {
    console.log(UrlSuppr + id)
    return fetch(UrlSuppr + id)
      .then((response) => {
        return response.json()
      })
  },
  MajSalarie (id, nom, prenom, username, anniv, address, tel, mail, poste) {
    return fetch(UrlModif + id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'nom': nom,
          'prenom': prenom,
          'username': username,
          'anniv': anniv,
          'address': address,
          'tel': tel,
          'mail': mail,
          'poste': poste
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  AffSalarie (id) {
    console.log(UrlAff + id)
    return fetch(UrlAff + id)
      .then((response) => {
        return response.json()
      })
  }
}
</script>
