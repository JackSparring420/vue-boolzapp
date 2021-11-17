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
// 2.1 onde evitare conflitti fra lettere maiuscole e lettere minuscole confronto tutto con ""

let now = new Date().toUTCString();
console.log(now);
// dayjs.extend(dayjs_plugin_customParseFormat);






var app = new Vue (
    {
        el: "#back",
        data:{
            search: "",
            newMessage: {
                menuMessage: false,
                date: "now",
                text: "",
                status: "sent",
            },
            reply: {
                menuMessage: false,
                date: "now",
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
                            date: ' 10/01/2020 1 5:30:55',
                            text: ' Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            menuMessage: false,
                            date: ' 10/01/2020 1 5:50:00',
                            text: ' Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            menuMessage: false,
                            date: ' 10/01/2020 1 6:15:22',
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
                            date: ' 20/03/2020 1 6:30:00',
                            text: ' Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            menuMessage: false,
                            date: ' 20/03/2020 1 6:30:55',
                            text: ' Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            menuMessage: false,
                            date: ' 20/03/2020 1 6:35:00',
                            text: ' Mi piacerebbe ma devo andare a fare la spesa.',
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
                            date: ' 28/03/2020 1 0:10:40',
                            text: ' La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            menuMessage: false,
                            date: ' 28/03/2020 1 0:20:10',
                            text: ' Sicuro di non a ver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            menuMessage: false,
                            date: ' 28/03/2020 1 6:15:22',
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
                            date: ' 10/01/2020 1 5:30:55',
                            text: ' Lo sai che ha aperto una n uova pizzeria?',
                            status: 'sent'
                        },
                        {
                            menuMessage: false,
                            date: ' 10/01/2020 1 5:50:00',
                            text: ' Si, ma preferirei andare a l cinema',
                            status: 'received'
                        },
                    ],
                },

            ],
        },
       
        computed: {
            
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
                       date: "now",
                       text: "",
                       status: 'sent'
                    }; 
                };

                setTimeout(()=> this.contacts[index].messages.push(this.reply), 1000);
                
            },

            menuC(index, i){
                this.contacts[index].messages.forEach((message) => {
                    if(message.menuMessage === true){
                        message.menuMessage = false
                    }
                })
                
                
                if(this.contacts[index].messages[i].menuMessage === false){
                    this.contacts[index].messages[i].menuMessage = true
                } else {
                    this.contacts[index].messages[i].menuMessage = false
                }

            },
            closeMenu(index){

                this.contacts[index].messages.forEach((message) => {
                    if(message.menuMessage === true){
                        message.menuMessage = false
                    }
                })
            },
            
            deleteMessage(index, msg){
                this.contacts[index].messages.splice(msg, 1)
                this.contacts.forEach((contact) => {
                    if(contact.menus === true){
                        contact.menus = false
                    }
                })
            }
        },
    }
    );  
    