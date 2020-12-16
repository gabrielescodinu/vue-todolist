// Create una todo list usando VueJS.
// Potete dare sfogo alla creativitá e per quanto riguarda l'HTML e il CSS.
// Se non sapere che fare, di seguito trovate uno screenshot.
// Funzionalitá:
// La nostra todo list avrá alcune tasks di default predefinite
// L'utente puó inserire nuove tasks
// Cliccando sulla "X" l'utente puó cancellare una task
// Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
// Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
// Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.

let root = new Vue ({
  el: "#root",
  data: {
    testo: "",
    lista: [
      "Studiare VueJs",
      "Studiare Jquery",
      "Ripassare Css",
    ]
  },
  methods: {
    remove(index){
      this.lista.splice(index, 1)
    },
    add(){
      if (this.testo.length > 3) {
        console.log(this.testo);
        this.lista.push(this.testo);
      }
    }
  }
});
