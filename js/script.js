// recupero l'elemento dal dom
const lista = document.getElementById('mail-list')

// creo una variabile numerica per far generare n mail
const mailNum = 10

// creo la funzione in cui creerò l'elemento in cui andrò a salvare la mail generata
const generateMails = (list, num) => {

    // creo un ciclo che effettui la chiamata ajax per tante volte quante inserite nella variabile mailNum
    for (let i = 0; i < num; i++) {

        // inizializzo il parametro list vuoto in modo che si azzeri ogni volta che viene richiamata la funzione
        list.innerHTML = ''

        // effettuo la chiamata ajax
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {

            // appendo la mail generata all'elemento creato
            list.innerHTML += `<li>${resp.data.response}</li>`
        })
    }
}

// richiamo la funzione
generateMails(lista, mailNum)

// recupero il bottone dal dom
const button = document.querySelector('.btn')

// richiamo la funzione al click del bottone
button.addEventListener('click', () =>{
    generateMails(lista, mailNum)
})

