var app = new Vue (
    {
        el: "#container",
        data:{
            activeChat: 0,
            contacts: [
                {
                    name: "Michele",
                    avatar: "img/avatar_1.jpg",
                    visible: true,
                    messages: [
                        {
                            date: ' 10/01/2020 1 5:30:55',
                            text: ' Hai portato a spasso i l cane?',
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
            }
        }
    }
);