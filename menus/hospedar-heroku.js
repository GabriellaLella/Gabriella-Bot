const host = (prefisso) => {
ritorno `

COME OSPITARE A HEROKU...

SAI CHE DEVI DARE I COMANDI BASE DI TERMUX, ALTRIMENTI NON VIENI NEMMENO A DARE I COMANDI PER LANCIARE HEROKU:

E RICORDANDO TUTTI :> HEROKU NON MEMORIZZA I DATI, QUINDI DOVETE DARE TUTTI I COMANDI BOT PER ABILITARE LE FUNZIONI, IN TERMUX, QUALSIASI COSA IN HEROKU CHE SI ATTIVA E SI RESETTA, TUTTO QUELLO CHE È STATO ATTIVATO RITORNA ALL'IMMAGINE PREDEFINITA, COME È STATO INVIATO .

VIDEO DEI COMANDI BASE:

[ https://youtu.be/OiWcm9INzXE ]

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

PRIMA, DEVI REGISTRARTI CON HEROKU, DOPO LE AZIONI PRECEDENTI.

SITO WEB: heroku.com

È LA REGISTRAZIONE BASE, COME QUALSIASI SITO, SE NON SAI COME FARLO SARÀ DIFFICILE SEGUIRE LOL

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

DOPO LA REGISTRAZIONE SU HEROKU, VAI SU TERMUX E COMANDA QUANTO SEGUE:

PASSERO' I COMANDI, PASSO DOPO PASSO SUCCESSIVO..


login heroku -i


QUESTO COMANDO ^ È PER COLLEGARSI ALL'ACCOUNT HEROKU, INSERIRE PRIMA L'EMAIL DELL'ACCOUNT HEROKU, E POI INSERIRE LA PASSWORD E CONFERMARE CON INVIO...

SI COLLEGA.

Comando successivo:
 
1_ COMANDO:

cd /sdcard/random-md

1.2_ COMANDO:

indice del nodo

SCANSIONA IL QRCODE CON IL BETA TEST ATTIVO, SE È LA VERSIONE MULTI-DEVICE, ALEATORIO - MD

1.3_ PASSO:

POI PREMERE IL VOLUME GIÙ IL VOLUME DEL TELEFONO E PREMERE LA LETTERA Z, DOPO SCANSIONARE IL QRCODE, ED ESEGUIRE LE PROCEDURE DI SEGUITO, RICORDARSI DI CONFIGURARE IL BOT PRIMA, HO SPIEGATO Lì PERCHÉ.

1.4_ COMANDO:

rm -rf .git

2_ COMANDO:

git init

2.1 _COMANDO:

git config --global --add safe.directory /storage/emulated/0/aleatory-md

3_ COMANDO:

app heroku: crea APPNAME

^ in APPNAME, metti il ​​tuo nome, o soprannome con i numeri, affinché lui lo accetti, deve essere una lettera di menuscula, ricorda il nome.

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

COMANDI SUCCESSIVI:

4_ COMANDO :

Pacchetti di build di heroku: aggiungi heroku/nodejs

5_ COMANDO:

pacchetti di build heroku: aggiungi https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest

6_ COMANDO:

pacchetti di build heroku: aggiungi https://github.com/clhuang/heroku-buildpack-webp-binaries.git

_7 COMANDO :

heroku git:remote -a APPNAME

In APPNAME hai messo il nome che hai messo, che avevo creato io, nel primo che ho informato.

_8 COMANDO :

git config --global user.email "tantofaz@gmail.com"
git config --global user.name "Qualunque cosa"

Incolla esattamente in questo modo, non è necessario modificare nulla...

_9 COMANDO :

git aggiungi .

_10 COMANDO :

git commit -am "blabla"

_11 COMANDO :

git push heroku master

_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

PROSSIMO :

ENTRA NEL SITO WEB: heroku.com

ACCEDI AL TUO ACCOUNT CHE HAI CREATO, ENTRA NELL'APP CHE È STATA CREATA, COME MOSTRA QUESTO LINK:

[ https://telegra.ph/file/5c2bc8d1290914de5ddc3.jpg ]

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

DOPO ESSERE ENTRATO NELL'APP

ACCEDI A QUESTA PARTE CHE È IL LINK QUI SOTTO CHE MOSTRA LA STAMPA DELLA FOTO:

[ https://telegra.ph/file/7e3b3f6b8f0a04118c8ac.jpg ]

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

FATE LO STESSO MOSTRATO NELLA STAMPA E SCRITTA.

STAMPA LINK ATTIVANDO IL PULSANTE:

[ https://telegra.ph/file/e7538214885d688e4eb06.jpg ]

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

FATE COME HO SPIEGATO PASSO DOPO PASSO, SE SI CAMBIA FINO A UNA VIRGOLA O A UN PUNTEGGIO DI QUELLO CHE HO INSEGNATO POTREBBE DARE UN ERRORE, RICORDANDO INOLTRE CHE SE SONO GIÀ STATI DATI I COMANDI BASE DI TERMUX, NON RIPETERE PERCHÉ POTREBBE CAUSARE UN ERRORE NEL TERMUX E DOVRAI RIFARE TUTTI I COMANDI DI BASE DI TERMUX..

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

COMANDO PER AGGIORNARE, SE MODIFICATE ALCUNE INFORMAZIONI O NOME BOT:

ACCEDI ALLA CARTELLA BOT CON:

_1 COMANDO :

cd /sdcard/random-md

_2 COMANDO :

sh heroku.sh

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

`
}

exports.host = host
