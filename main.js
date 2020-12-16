// Creare una todo list usando VueJS.
// Funzionalitá:
// La nostra todo list avrá alcune tasks di default predefinite
// L'utente puó inserire nuove tasks
// Cliccando sulla "X" l'utente puó cancellare una task
// Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
// Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il tasto Enter della tastiera.
// Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.

let root = new Vue ({
  el: "#root",
  data: {
    testo: "",
    lista: [
      "Studiare VueJs",
      "Studiare Jquery",
      "Ripassare Css",
    ],
  },
  created: function () {
    document.addEventListener("keyup", e =>{
      if(e.key === "ArrowRight") {
        this.add();
        this.testo = "";
      }
    })
  },
  methods: {
    remove(index){
      this.lista.splice(index, 1)
    },
    add(){
      if (this.testo.length > 3) {
        console.log(this.testo);
        this.lista.push(this.testo);
        this.testo = "";
      }
    },
    // message(){
    //   if (this.lista.length = 0) {
    //     console.log("vuota");
    //   }
    // },
  }
});
