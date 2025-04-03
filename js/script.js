// creo la funzione in cui creerò l'elemento in cui andrò a salvare la mail generata
const generateMails = () => {
    // recupero l'elemento dal dom
    const lista = document.getElementById('mail-list')

    // creo l'elemento 
    const li = document.createElement('li')

    // appendo la mail generata all'elemento creato
    li.append('test@mail.com')

    // appendo il nuovo elemento creato alla lista come figlio
    lista.appendChild(li)
}

// richiamo la funzione
generateMails()

// effettuo la chiamata ajax
axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
    console.log(resp.data.response)
})
