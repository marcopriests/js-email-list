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

// creo una variabile numerica per far generare n mail
const mailNum = 10

// creo un ciclo che effettui la chiamata ajax per tante volte quante inserite nella variabile mailNum
for (let i = 0; i <= mailNum; i++) {

    // effettuo la chiamata ajax
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
        console.log(resp.data.response)
    })

}