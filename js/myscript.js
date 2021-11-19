// Visualizzazione dinamica della l ista contatti: tramite la direttiva v-for, visualizzare nome e i mmagine di ogni contatto
// 1. creo l'istanza di vue compilata con l'array di oggetti formitomi
// 2. creo un ciclo for per stampare le foto e i nomi delle chats
// 3. per stampare anche l'ultimo messaggio e l'ultima data do come posizione nel path la lunghezza dell'array-1

// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti imessaggi relativi al contatto attivo all’interno del pannello della conversazione
// 1. creo un ciclo for per stampare ogni singolo messaggio al click
// 2. creo la funzione del click e la posiziono sull'html in corrispondenza delle chats
// 3. imposto tutte le chat nel css con propietà display none e creo una classe con propieà display flex far apparire l'elemento cliccato
// 4. genero due condizioni una per dire che per ogni contatto se la propirtà ha valore true passa a false
// 4.1 la seconda condizione serve per cambiare la propietà visible in base al suo stato solo sull'elemento cliccato
// 5 genero una propietà dal nome ActiveChat che grazie alla funzione del click le andrò a dare il valore di index così da poter selezionare in maniera dinamica i percorsi e variare le posizioni in base al click

// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al t hread sopra, come messaggio verde
// 1. creo un oggetto che mi va a rappresentare il nuovo messaggio
// 2. inserisco nell'html i collegamenti della funzione al click invio (keyup.enter) e mi prelevo il valore inserito con v-model
// 3. nella funzione addMessage pusho NewMessage
// 3.1 inserisco un controllo per non far pushare nel caso non ci sia nessun carattere nella barra di testo


// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’ utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// 1. creo un oggetto che mi va a rappresentare il nuovo messaggio
// 2. inserisco nell'html i collegamenti della funzione al click invio (keyup.enter) e mi prelevo il valore inserito con v-model
// 3. nella funzione addMessage pusho NewMessage

// Ricerca utenti: s crivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti i l cui nome contiene l e l ettere i nserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
// 1.prendo il valore digitato nell'imput con v-model e lo registro in una propietà
// 2.combino al ciclo for che uso per stamparmi i contatti alla condizione (v-if) per vedere se vengono le lettere scritte sui nomi con quelle riportate nella propietà per il quale ritornerà true solo per gli elementi con una corrispondenza
// 2.1 onde evitare conflitti fra lettere maiuscole e lettere minuscole confronto tutto con ".toLowerCase()"

// var customParseFormat = require('dayjs/plugin/customParseFormat')
// dayjs.extend(customParseFormat)
let now = dayjs().format("DD MM YYYY HH:mm:ss")
console.log(now);

var app = new Vue (
    {
        el: "#back",
        data:{
            search: "",
            newMessage: {
                menuMessage: false,
                date: dayjs().format("DD MM YYYY HH:mm:ss"),
                text: "",
                status: "sent",
            },
            reply: {
                menuMessage: false,
                date: dayjs().format("DD MM YYYY HH:mm:ss"),
                text: "ok",
                status: "received"
            },
            activeChat: 0,
            contacts: [
                {
                    name: "Michele",
                    avatar: "img/avatar_1.jpg",
                    visible: true,
                    messages: [
                        {
                            menuMessage: false,
                            date: dayjs('202001105:30:55').format("DD MM YYYY HH:mm:ss"),
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            menuMessage: false,
                            date: dayjs('202001105:50:00').format("DD MM YYYY HH:mm:ss"),
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            menuMessage: false,
                            date: dayjs('202001106:15:22').format("DD MM YYYY HH:mm:ss"),
                            text: ' Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: "Fabio",
                    avatar: "img/avatar_2.jpg",
                    visible: false,
                    messages: [
                        {
                            menuMessage: false,
                            date: dayjs('202003206:30:00').format("DD MM YYYY HH:mm:ss"),
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            menuMessage: false,
                            date: dayjs('202003206:30:55').format("DD MM YYYY HH:mm:ss"),
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            menuMessage: false,
                            date: dayjs('202003206:35:00').format("DD MM YYYY HH:mm:ss"),
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: "Samuele",
                    avatar: "img/avatar_3.jpg",
                    visible: false,
                    messages: [
                        {
                            menuMessage: false,
                            date: dayjs('202003280:10:40').format("DD MM YYYY HH:mm:ss"),
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            menuMessage: false,
                            date: dayjs('202003280:20:10').format("DD MM YYYY HH:mm:ss"),
                            text: ' Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            menuMessage: false,
                            date: dayjs('202003286:15:22').format("DD MM YYYY HH:mm:ss"),
                            text: ' Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: "Luisa",
                    avatar: "img/avatar_4.jpg",
                    visible: false,
                    messages: [
                        {
                            menuMessage: false,
                            date: dayjs('202001105:30:55').format("DD MM YYYY HH:mm:ss"),
                            text: 'Lo sai che ha aperto una n uova pizzeria?',
                            status: 'sent'
                        },
                        {
                            menuMessage: false,
                            date: dayjs('202001105:50:00').format("DD MM YYYY HH:mm:ss"),
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },
                    ],
                },

            ],
        },

        methods: {
            changeChat(index){
                this.contacts.forEach((contact) => {
                    if(contact.visible === true){
                        contact.visible = false
                    }
                })

                this.contacts[index].visible = true

                this.activeChat = index
            },

            addMessage(index){
                if(this.newMessage.text !== ""){
                   this.contacts[index].messages.push(this.newMessage);
                   this.newMessage = {
                       menuMessage: false,
                       date: dayjs().format("DD MM YYYY HH:mm:ss"),
                       text: "",
                       status: 'sent'
                    }; 
                };

                setTimeout(()=> this.contacts[index].messages.push(this.reply), 1000);
                this.reply = {
                    menuMessage: false,
                    date: dayjs().format("DD MM YYYY HH:mm:ss"),
                    text: "ok",
                    status: "received"
                }
                
            },

            menuC(index, i){
                this.contacts[index].messages.forEach((message) => {
                    if(message.menuMessage === true){
                        message.menuMessage = false
                    }
                })
                
                // if(this.contacts[index].messages[i].menuMessage === false){
                    this.contacts[index].messages[i].menuMessage = true
                // } else {
                //     this.contacts[index].messages[i].menuMessage = false
                // }
            },

            closeMenu(index){
                this.contacts[index].messages.forEach((message) => {
                    if(message.menuMessage === true){
                        message.menuMessage = false
                    }
                })
            },
            
            deleteMessage(index, i){
                this.contacts[index].messages.splice(i, 1)
            },

            infoMsg(index, i){
            alert(this.contacts[index].messages[i].date)
            console.log(contacts[index].messages.length);
            },

        },
    }
    );  
    
