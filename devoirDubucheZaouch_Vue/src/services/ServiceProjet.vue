<script>
const UrlCree = 'http://localhost:3000/api/v1/creeprojet'
const UrlModif = 'http://localhost:3000/api/v1/MajProjet/'
const UrlAff = 'http://localhost:3000/api/v1/AffProjet/'
const UrlSuppr = 'http://localhost:3000/api/v1/SupprProjet/'

export default {
  getProducts () {
    return fetch(UrlCree)
      .then((response) => {
        return response.json()
      })
  },
  CreeProjet (nom, desc, debdate, findate, montant, statut) {
    return fetch(UrlCree, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'nom': nom,
          'desc': desc,
          'debdate': debdate,
          'findate': findate,
          'montant': montant,
          'statut': statut
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  SupprProjet (id) {
    console.log(UrlSuppr + id)
    return fetch(UrlSuppr + id)
      .then((response) => {
        return response.json()
      })
  },
  MajProjet (id, nom, desc, debdate, findate, montant, statut) {
    return fetch(UrlModif + id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'nom': nom,
          'desc': desc,
          'debdate': debdate,
          'findate': findate,
          'montant': montant,
          'statut': statut
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  AffProjet (id) {
    console.log(UrlAff + id)
    return fetch(UrlAff + id)
      .then((response) => {
        return response.json()
      })
  }
}
</script>
