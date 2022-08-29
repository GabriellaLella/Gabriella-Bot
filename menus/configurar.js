const configbot = (prefisso) => {
ritorno `
​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

 COME CONFIGURARE IL BOT, PER POSSEDARLO.
 
 Per prima cosa accendi il bot in termux e vai su WhatsApp del bot in privato, usa i seguenti comandi.

╭───────────────


⏣➣ Per cambiare il nome del bot:

⏣➣ ${prefix}botname Nome che desideri

⏣➣ Puoi inserire anche lettere modificate 🙂


╰───────────────



╭───────────────


⏣➣ Proprietario del bot Nick Do:

⏣➣ ${prefix}proprietario del nick Nick il tuo


╰───────────────
  
  
  
╭───────────────
  
  
⏣➣ Configura il numero del proprietario
  
⏣➣ ${prefix}numero-proprietario 55xxxxxx

⏣➣ il numero deve essere insieme, non può contenere il simbolo + o - e non può avere il 9 dell'operatore, deve essere lo stesso numero del tuo numero whatsapp.
  
  
╰───────────────


╭───────────────


⏣➣ Prefisso bot:

⏣➣ ${prefisso}prefisso-bot #

Puoi usare qualsiasi simbolo, se il tuo simbolo è ${prefisso} cambierà in # in base a ciò che hai modificato.


╰───────────────



Buona fortuna, se hai intenzione di utilizzare il bot sulla piattaforma heroku, configuralo prima di inviarlo lì, perché heroku non memorizza dati, qualsiasi funzione che verrà attivata in gruppo, deve essere in termux, prima di avviarlo per heroku.
  
  `
  
}

exports.configbot = configbot
