// Creare una todo list usando VueJS.
// Funzionalitá:
// La nostra todo list avrá alcune tasks di default predefinite
// L'utente puó inserire nuove tasks
// Cliccando sulla "X" l'utente puó cancellare una task
// Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
// Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il tasto Enter della tastiera.
// Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.

// Istruzioni Bonus (da mettere in una cartella bonus):
// L'utente vuole poter modificare una task giá inserita
// ma vuole anche poter indicare che la task é stata completata
// inoltre se una task é stata completa allora vuole che venga inserita in un'altra colonna tipo "tasks completate"
// ah non é finita, dice che quando cancella una task, non vuole che questa venga subito rimossa, ma vuole che resti visibile ma venga spostata in una colonna tipo "cestino"
// si, l'utente é un ropi scatole, dice infine che vuole poter rimuovere tutte le tasks nel cestino cliccando su un pulsante tipo "svuota cestino"

let root = new Vue ({
  el: "#root",
  data: {
    testo: "",
    lista: [
      "Studiare VueJs",
      "Studiare Jquery",
      "Ripassare Css",
    ],
    completati: [],
  },
  methods: {
    remove(index){
      this.completati.push(this.lista[index]);
      this.lista.splice(index, 1);
    },
    add(){
      if (this.testo.length > 3) {
        console.log(this.testo);
        this.lista.push(this.testo);
        this.testo = "";
      }
    },
    deleteAll(index){
      this.completati.splice(index);
      console.log(this.completati);
    },
  }
});
