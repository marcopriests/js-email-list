// creo la funzione in cui creerò l'elemento in cui andrò a salvare la mail generata
// aggiungo un parametro numerico
const generateMails = (num) => {
    // recupero l'elemento dal dom
    const lista = document.getElementById('mail-list')

    // sposto la chiamata ajax all'interno della funzione

    // creo un ciclo che effettui la chiamata ajax per tante volte quante inserite nella variabile mailNum
    for (let i = 0; i <= num; i++) {

        // effettuo la chiamata ajax
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {

            // creo l'elemento 
            const li = document.createElement('li')

            // appendo la mail generata all'elemento creato
            li.append(resp.data.response)

            // appendo il nuovo elemento creato alla lista come figlio
            lista.appendChild(li)
        })
    }
}

// creo una variabile numerica per far generare n mail
const mailNum = 10

// richiamo la funzione
generateMails(mailNum)