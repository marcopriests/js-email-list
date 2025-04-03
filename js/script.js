// creo la funzione in cui creerò l'elemento in cui andrò a salvare la mail generata
const generateMails = () => {
    // recupero l'elemento dal dom
    const lista = document.getElementById('mail-list')

    // creo l'elemento 
    const li = document.createElement('li')

    li.append('test@mail.com')

    lista.appendChild(li)
}

generateMails()
