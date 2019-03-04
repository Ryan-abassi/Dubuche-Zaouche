<script>
const UrlCree = 'http://localhost:3000/api/v1/CreeClient'
const UrlModif = 'http://localhost:3000/api/v1/MajClient/'
const UrlAff = 'http://localhost:3000/api/v1/AffClient/'
const UrlAffAll = 'http://localhost:3000/api/v1/AffClients'
const UrlSuppr = 'http://localhost:3000/api/v1/SupprClient/'

export default {
  AffAllClient () {
    return fetch(UrlAffAll)
      .then((response) => {
        return response.json()
      })
  },
  CreeClient (nom, address, contact, secteur) {
    return fetch(UrlCree, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'nom': nom,
          'address': address,
          'contact': contact,
          'secteur': secteur
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  SupprClient (id) {
    console.log(UrlSuppr + id)
    return fetch(UrlSuppr + id)
      .then((response) => {
        return response.json()
      })
  },
  MajClient (id, nom, address, contact, secteur) {
    return fetch(UrlModif + id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'nom': nom,
          'address': contact,
          'contact': contact,
          'secteur': secteur
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  AffClient (id) {
    console.log(UrlAff + id)
    return fetch(UrlAff + id)
      .then((response) => {
        return response.json()
      })
  }
}
</script>
