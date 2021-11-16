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

var app = new Vue (
    {
        el: "#container",
        data:{
            newMessage: {
                date: "now",
                text: "",
                status: "sent"
            },
            auto: {
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
                            date: ' 10/01/2020 1 5:30:55',
                            text: ' Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: ' 10/01/2020 1 5:50:00',
                            text: ' Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
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
                            date: ' 20/03/2020 1 6:30:00',
                            text: ' Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: ' 20/03/2020 1 6:30:55',
                            text: ' Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
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
                            date: ' 28/03/2020 1 0:10:40',
                            text: ' La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: ' 28/03/2020 1 0:20:10',
                            text: ' Sicuro di non a ver sbagliato chat?',
                            status: 'sent'
                        },
                        {
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
                            date: ' 10/01/2020 1 5:30:55',
                            text: ' Lo sai che ha aperto una n uova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: ' 10/01/2020 1 5:50:00',
                            text: ' Si, ma preferirei andare a l cinema',
                            status: 'received'
                        },
                    ],
                },

            ],
        },
       
        methods: {
            changeChat(index){
                if(this.contacts[0].visible === true){
                    this.contacts[0].visible = false
                };
                if(this.contacts[1].visible === true){
                    this.contacts[1].visible = false
                };
                if(this.contacts[2].visible === true){
                    this.contacts[2].visible = false
                };
                if(this.contacts[3].visible === true){
                    this.contacts[3].visible = false
                };

                if (this.contacts[index].visible !== true){
                    this.contacts[index].visible = true
                } else {
                    this.contacts[index].visible = false
                };

                this.activeChat = index
            },

            addMessage(index){
                if(this.newMessage.text !== ""){
                   this.contacts[index].messages.push(this.newMessage);
                        this.newMessage = {
                            date: "now",
                            text: "",
                            status: 'sent'
                        }; 
                    };
                // setTimeout(reply, 1000);
                // function reply(){
                //     this.contacts[index].messages.push(this.auto);
                // }
            },

            reply(index){
                this.contacts[index].messages.push(this.auto);
            }
        }
    }
    );
    
    