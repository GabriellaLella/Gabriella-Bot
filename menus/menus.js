const menu = (prefisso, BotName, mittente) => {
  
// NON ELIMINARE QUESTO ${NickDono} né
//${numerodn} né ${BotName} né ${prefix} solo se vuoi cancellare completamente, non inserire nulla ${dentro in questo modo} QUESTE SONO DEFINIZIONI CHE STANNO TIRANDO DA settings.json, dalla cartella del proprietario, puoi solo cambiare la base tutto tranne le impostazioni, solo se vuoi cancellare l'intera impostazione.
  
reso​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╭───────────────┐
├── MENU COMANDI
├───────────────
│ Utente: @${sender.split("@")[0]}
├───────────────┐
│ COMANDI TERMUX
╞───────────────┘
│✾▹ ${prefix}Comandi-termux
│✾▹ ${prefix}Host-heroku
│✾▹ ${prefix}Config-bot
│✾▹ ${prefix}Git-bot
╰──────────┐
╭──────────┴─┐
│ MENU VARI
├────────────
│✾▹ ${prefix}Menudono
│✾▹ ${prefix}Menuadm
│✾▹ ${prefix}Menupremium
│✾▹ ${prefix}Effectsimg
│✾▹ ${prefix}Loghi
│✾▹ ${prefix}Barzellette
╰──────────┐
╭──────────┴─┐
│ COMANDI DEI MEMBRI
├────────────
│✾▹ ${prefix}Infobot
│✾▹ ${prefix}Lingue
│✾▹ ${prefix}Bug (DOMANDA)
│✾▹ ${prefix}Suggerimento (SUGGERIMENTO)
│✾▹ ${prefix}Tariffa (CHE BUONO)
╰──────────┐
╭──────────┴─┐
│ CERCA / SCARICA
├────────────
│✾▹ ${prefix}Riproduci (NOME)
│✾▹ ${prefix}Playmp4 (NOME)
│✾▹ ${prefix}Ytsearch (NOME)
│✾▹ ${prefix}Ytmp4 (LINK)
│✾▹ ${prefix}Ytmp3 (LINK)
│✾▹ ${prefisso}Tiktok (LINK)
│✾▹ ${prefix}Instagram (LINK)
│✾▹ ${prefix}Facebook (LINK)
│✾▹ ${prefix}Twitter (LINK)
│✾▹ ${prefix}Imgpralink (MARK)
│✾▹ ${prefix}Videopralink (MARK-V)
╰──────────┐
╭──────────┴─┐
│ INFORMAZIONE
├────────────
│✾▹ ${prefix}Ping (VELO)
│✾▹ ${prefix}Gitdobot
│✾▹ ${prefix}Attività
│✾▹ ${prefix}Rankativo
│✾▹ ${prefix}Checkactive (@MARCAR)
│✾▹ ${prefix}Livello di classifica (DI-TUTTI)
╰──────────┐
╭──────────┴─┐
│ GIOCHI/QUIZ
├────────────
│✾▹ ${prefix}Ppt (PIETRA/CARTA/FORBICI)
│✾▹ ${prefix}Jogodavelha (@MARCAR)
│✾▹ ${prefix}Ttt (VECCHIO BIGLIETTO)
│✾▹ ${prefix}Casinò
│✾▹ ${prefix}Quizanimals 1 / 0
│✾▹ ${prefisso}Anagramma 1 / 0
╰──────────┐
╭──────────┴─┐
│ FIGURE
├────────────
│✾▹ ${prefisso}Attp (TESTO)
│✾▹ ${prefisso}Ttp (TESTO)
│✾▹ ${prefix}Fsticker (MARK-PHOTO)
│✾▹ ${prefix}Adesivo (MARK-PHOTO)
│✾▹ ${prefix}Toimg (MARK-FIGU)
│✾▹ ${prefix}Togif (MARK-FIGU)
│✾▹ ${prefix}Ruba (TESTO/TESTO)
╰──────────┐
╭──────────┴─┐
│ COMANDI/BASE
├────────────
│✾▹ ${prefix}Gtts (LINGUA + TESTO)
│✾▹ ${prefix}Traduci ciao
│✾▹ ${prefix}Tagme
│✾▹ ${prefix}Emoji 😏/whatsapp
│✾▹ ${prefix}Emojimix 😉+🙂
│✾▹ ${prefix}Tabella (LETTERE)
│✾▹ ${prefix}Consiglio Biblico
│✾▹ ${prefix}Simi (PARLA-qualcosa)
│✾▹ ${prefix}Profilo
│✾▹ ${prefix}Calcola 1 + 1
│✾▹ ${prefix}Fazernick (NICK)
│✾▹ ${prefix}Bot
╰──────────┘

`
}

exports.menu = menu

// NON ELIMINARE QUESTO ${NickDono} né
//${numerodn} né ${BotName} né ${prefix} solo se vuoi cancellare completamente, non inserire nulla ${dentro in questo modo} QUESTE SONO DEFINIZIONI CHE STANNO TIRANDO DA settings.json, dalla cartella del proprietario, puoi solo cambiare la base tutto tranne le impostazioni, solo se vuoi cancellare l'intera impostazione.


// MENÙ AMMINISTRATORI

const adms = (prefisso, mittente) => {
 
// NON ELIMINARE QUELLO ${prefisso}, non inserire nulla ${dentro in questo modo} QUESTE SONO DEFINIZIONI CHE STAI ESTRAENDO DA settings.json, dalla cartella del proprietario, puoi solo cambiare la base di tutto, tranne le definizioni, solo se si desidera eliminare la definizione completa.

reso​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╭───────────────┐
├── MENU ADMS
├───────────────
│ Utente: @${sender.split("@")[0]}
╞───────────────┘
│✾▹ ${prefix}attivazioni
│✾▹ ${prefix}Calcia [@] (per rimuovere)
│✾▹ ${prefix}Ban (messaggio di risposta)
│✾▹ ${prefix}Promuovi [@] (Be-ADM)
│✾▹ ${prefix}Downgrade [@] (downgrade-adm)
│✾▹ ${prefix}Totag (menzionare-qualcosa)
│✾▹ ${prefix}Gruppo f/a
│✾▹ ${prefix}Stato
│✾▹ ${prefix}Cancella (invisible-text-gp)
│✾▹ ${prefix}Attività (GRUPPO DO)
│✾▹ ${prefix}Linkgp
│✾▹ ${prefix}Informazioni di gruppo
│✾▹ ${prefix}Hidetag (txt) (markup)
│✾▹ ${prefix}Mark (tds gp mark)
│✾▹ ${prefix}Marcar2 (Marca-tds-Wa.me/)
│✾▹ ${prefisso}Anagramma 1 / 0
│✾▹ ${prefisso}Antiparola 1 / 0
│✾▹ ${prefisso}Descgp (TXT)
│✾▹ ${prefix}pName (Nome)
│✾▹ ${prefix}Createtable (SCRIVI-qualcosa)
│✾▹ ${prefix}Tablelagp
╰──────────┘

`
}

exports.adms = adms

// NON ELIMINARE QUELLO ${prefisso}, non inserire nulla ${dentro in questo modo} QUESTE SONO IMPOSTAZIONI CHE STAI ESTRAENDO DA settings.json, dalla cartella del proprietario, puoi solo cambiare la base di tutto, tranne le impostazioni, solo sedesidera cancellare l'impostazione completa.


// MENU' PROPRIETARIO

const menudono = (prefisso, mittente) => {

// NON ELIMINARE QUELLO ${prefisso}, non inserire nulla ${dentro in questo modo} QUESTE SONO DEFINIZIONI CHE STAI ESTRAENDO DA settings.json, dalla cartella del proprietario, puoi solo cambiarlo tutto, tranne le definizioni , solo se si desidera eliminare la definizione completa.

reso​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

╭───────────────┐
├── MENU DEL PROPRIETARIO
├───────────────
│ Utente: @${sender.split("@")[0]}
├───────────────┐
│ Config: ${prefix}Config-bot
╞───────────────┘
│✾▹ ${prefix}activations_owner
│✾▹ ${prefix}Pulsanti
│✾▹ ${prefix}Bangp
│✾▹ ${prefix}Unbangp
│✾▹ ${prefix}Photomenu (MARK-IMG)
│✾▹ ${prefix}Blockcmd (cmd)
│✾▹ ${prefix}Unblockcmd (cmd)
│✾▹ ${prefix}Foreign_Caption (msg)
│✾▹ ${prefix}Legendabv (quale qr)
│✾▹ ${prefix}Didascalie in uscita (cosa qr)
│✾▹ ${prefix}Legendasaiu2 (cosa qr)
│✾▹ ${prefix}Legendabv2 (quale qr)
│✾▹ ${prefix}Simbolo Prefix_type2
│✾▹ ${prefix}Prefix_type_off
│✾▹ ${prefix}Fondo di benvenuto (mark-img)
│✾▹ ${prefix}Fundosaiiu (mark-img)
│✾▹ ${prefix}Serpremium
│✾▹ ${prefix}Listagp
│✾▹ ${prefix}Anti-imprecazione 1 / 0
│✾▹ ${prefix}Antilink 1 / 0
│✾▹ ${prefix}Addword (imprecazione)
│✾▹ ${prefix}Delword (imprecazione)
│✾▹ ${prefix}Attivo
│✾▹ ${prefix}Mancante (dì-cosa-fai)
│✾▹ ${prefix}Delpremium @(marca)
│✾▹ ${prefix}Addpremium @(marca)
│✾▹ ${prefix}Clone [@] (ruba ft da prf)
│✾▹ ${prefix}Fotobot (img, = foto BT)
│✾▹ ${prefix}Descriptiongp (digita-qualcosa)
│✾▹ ${prefix}Blocca [@] (impedisci l'utilizzo di cmds)
│✾▹ ${prefix}Sblocca [@] (sblocca)
│✾▹ ${prefix}Setprefix (prefix-new)
│✾▹ ${prefix}Proprietario2 @marca
│✾▹ ${prefix}Proprietario3 @marca
│✾▹ ${prefix}Proprietario4 @marca
│✾▹ ${prefix}Proprietario5 @marca
│✾▹ ${prefisso}Bcgp (MEMBRI TM-PRA-PV)
╰──────────┘
`

}

exports.menudono = menudono

// MENU' LOGHI

const menulogos = (prefisso, mittente) => {
  
// NON ELIMINARE QUELLO ${prefisso}, non inserire nulla ${dentro in questo modo} QUESTE SONO DEFINIZIONI CHE STAI ESTRAENDO DA settings.json, dalla cartella del proprietario, puoi solo cambiare la base di tutto, tranne le definizioni, solo se si desidera eliminare la definizione completa.
  
  reso​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

╭───────────────┐
├── MENU' LOGHI
├───────────────
│ Utente: @${sender.split("@")[0]}
╰──────────┐
╭──────────┴─┐
│ 1 loghi di testo
├────────────
│✾▹ ${prefix}Txtcomics (txt)
│✾▹ ${prefix}HackNeon (txt)
│✾▹ ${prefix}TeamMascot (txt)
│✾▹ ${prefix}FFavatar (txt)
│✾▹ ${prefix}Lavagna (txt)
│✾▹ ${prefix}Angelglx (txt)
│✾▹ ${prefix}WingEffect (txt)
│✾▹ ${prefix}Angelwing (txt)
│✾▹ ${prefix}Blackpink (txt)
│✾▹ ${prefix}Girlmascot (txt)
│✾▹ ${prefix}Mascotgame (txt)
│✾▹ ${prefix}Fpsmascot (txt)
│✾▹ ${prefix}Logogame (txt)
│✾▹ ${prefisso}Glitch2 (txt)
│✾▹ ${prefisso}3DGold (txt)
│✾▹ ${prefisso}Placaloli (txt)
│✾▹ ${prefix}Phadow (txt)
│✾▹ ${prefix}Effetto neon (txt)
│✾▹ ${prefix}Cimitero (txt)
│✾▹ ${prefix}Metalgold (txt)
│✾▹ ${prefix}Narutologo (txt)
│✾▹ ${prefix}Fuoco (txt)
│✾▹ ${prefix}Romantico (txt)
│✾▹ ${prefix}Fumo (txt)
│✾▹ ${prefix}Carta (txt)
│✾▹ ${prefix}Lovemsg (txt)
│✾▹ ${prefix}Lovemsg2 (txt)
│✾▹ ${prefix}Lovemsg3 (txt)
│✾▹ ${prefix}Caffè (txt)
│✾▹ ${prefix}Coffecup2 (txt)
│✾▹ ${prefix}Coppa (txt)
│✾▹ ${prefix}Florwooden (txt)
│✾▹ ${prefix}Lobometal (txt)
│✾▹ ${prefisso}Harryp (txt)
│✾▹ ${prefix}Txtbutterfly (txt)
│✾▹ ${prefix}Madeira (txt)
│✾▹ ${prefix}Pornhub (txt)
│✾▹ ${prefix}Scudo (txt)
│✾▹ ${prefix}Trasformatore (txt)
│✾▹ ${prefix}America (txt)
│✾▹ ${prefix}Demongreen (txt)
│✾▹ ${prefix}Vetro bagnato (txt)
│✾▹ ${prefix}Tossico (txt)
│✾▹ ${prefix}Neon3 (txt)
│✾▹ ${prefix}Neondevil (txt)
│✾▹ ${prefix}Neongreen (txt)
│✾▹ ${prefisso}Lava (txt)
│✾▹ ${prefix}Halloween (txt)
│✾▹ ${prefix}Neondevil (txt)
│✾▹ ${prefix}DemonFire (txt)
│✾▹ ${prefix}DemonGreen (txt)
│✾▹ ${prefix}Thunderv2 (txt)
│✾▹ ${prefisso
}Tuono(txt)
│✾▹ ${prefisso}Colaq (txt)
│✾▹ ${prefix}Lusso (txt)
│✾▹ ${prefisso}Bacca (txt)
│✾▹ ${prefix}Trasformatore (txt)
│✾▹ ${prefisso}Matrice (txt)
│✾▹ ${prefix}Horror (txt)
│✾▹ ${prefix}Cloud (txt)
│✾▹ ${prefix}Neon (txt)
│✾▹ ${prefix}Neon1 (txt)
│✾▹ ${prefisso}Neon2 (txt)
│✾▹ ${prefix}Neon3d (txt)
│✾▹ ${prefix}NeonGreen (txt)
│✾▹ ${prefix}Neon3 (txt)
│✾▹ ${prefix}Neve (txt)
│✾▹ ${prefix}Sabbia (txt)
│✾▹ ${prefix}Vetro (txt)
│✾▹ ${prefix}Stile (txt)
│✾▹ ${prefix}Rosa (txt)
│✾▹ ${prefix}Carbon (txt)
│✾▹ ${prefix}Tetalblue (txt)
│✾▹ ${prefix}Tossico (txt)
│✾▹ ${prefix}Jeans (txt)
│✾▹ ${prefix}Bones (txt)
│✾▹ ${prefix}Asfalto (txt)
│✾▹ ${prefix}Natale (txt)
│✾▹ ${prefix}Joker (txt)
│✾▹ ${prefix}Sangue (txt)
│✾▹ ${prefix}Pausa (txt)
│✾▹ ${prefix}Fiction (txt)
│✾▹ ${prefisso}3dstone (txt)
│✾▹ ${prefisso}Lapis (txt)
│✾▹ ${prefix}Ghiaccio (txt)
│✾▹ ${prefix}Arcobaleno (txt)
│✾▹ ${prefix}Metalfire (txt)
╰──────────┐
╭──────────┴─┐
│ 2 loghi di testo
├────────────
│✾▹ ${prefix}Comporn (txt/txt)
│✾▹ ${prefix}Glitch (txt/txt)
│✾▹ ${prefisso}Glitch3 (txt/txt)
│✾▹ ${prefix}Grafity (txt-txt)
│✾▹ ${prefix}Spazio (txt/txt)
│✾▹ ${prefix}Marvel (txt/txt)
│✾▹ ${prefix}GamePlay (txt/txt)
│✾▹ ${prefix}Stone (txt/txt)
│✾▹ ${prefix}Acciaio (txt/txt)
│✾▹ ${prefix}Ffbanner (txt/txt)
│✾▹ ${prefix}Mascotavatar (txt/txt)
╰──────────┘
`
}

exports.menulogos = menulogos

// MODIFICA DEL MENU AUDIO E VIDEO

const changers = (prefisso, mittente) => {

// NON ELIMINARE QUELLO ${prefisso}, non inserire nulla ${dentro in questo modo} QUESTE SONO DEFINIZIONI CHE STAI ESTRAENDO DA settings.json, dalla cartella del proprietario, puoi solo cambiare la base di tutto, tranne le definizioni, solo se si desidera eliminare la definizione completa.

ritorno`
╭───────────────┐
├ Cambia audio/video
├───────────────
│ Utente: @${sender.split("@")[0]}
╰──────────┐
╭──────────┴─┐
│ Cambia video
├────────────
│✾▹ ${prefix}Videoslow (marca)
│✾▹ ${prefix}Videorapido (marchio)
│✾▹ ${prefix}Video contrario (marca)
╰──────────┐
╭──────────┴─┐
│ Cambia audio
├────────────
│✾▹ ${prefix}Audiolent (marca)
│✾▹ ${prefix}Audiorapido (marca)
│✾▹ ${prefix}Grave (mark)
│✾▹ ${prefisso}Grave2 (segno)
│✾▹ ${prefix}Scoiattolo (marchio)
│✾▹ ${prefix}Burst (segno)
│✾▹ ${prefix}Bassi (marca)
│✾▹ ${prefix}Bass2 (marca)
│✾▹ ${prefix}Voiceboy (marca)
╰──────────┘
`
}

exports.changers = cambia

// MENÙ PREMIUM

const menuprem = (prefisso, mittente) => {

// NON ELIMINARE QUELLO ${prefisso}, non inserire nulla ${dentro in questo modo} QUESTE SONO DEFINIZIONI CHE STAI ESTRAENDO DA settings.json, dalla cartella del proprietario, puoi solo cambiare la base di tutto, tranne le definizioni, solo se si desidera eliminare la definizione completa.

ritorno `
╭───────────────┐
├─ Menu Premium
├───────────────
│ Utente: @${sender.split("@")[0]}
╰──────────┐
╭──────────┴─┐
│✾▹ ${prefix}Sblocca
│✾▹ ${prefisso}Sblocca2
│✾▹ ${prefisso}DDD (DDD)
│✾▹ ${prefix}Zip (NUMERO)
│✾▹ ${prefix}Genera CPF
│✾▹ ${prefix}Lista Premium
│✾▹ ${prefix}ShortenLink (LINK)
╰──────────┘
`
}

exports.menuprem = menuprem

// MENU' GIOCA..

const scherzi = (prefisso, mittente) => {

// NON ELIMINARE QUELLO ${prefisso}, non inserire nulla ${dentro in questo modo} QUESTE SONO DEFINIZIONI CHE STAI ESTRAENDO DA settings.json, dalla cartella del proprietario, puoi solo cambiare la base di tutto, tranne le definizioni, solo se si desidera eliminare la definizione completa.

reso​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

╭───────────────┐
├─ Menu Riproduci
├───────────────
│ Utente: @${sender.split("@")[0]}
╰──────────┐
╭──────────┴─┐
│✾▹ ${prefix}Gay ((@) mark)
│✾▹ ${prefix}Brutto segno (+(@))
│✾▹ ${prefix}Clacson ((@) mark)
│✾▹ ${prefix}Squint (@ mark)
│✾▹ ${prefix}Ubriaco (@ mark)
│✾▹ ${prefix}Buonissimo (segno (@))
│✾▹ ${prefix}Hot (segno (@))
│✾▹ ${prefix}Bacio (@ mark)
│✾▹ ${prefix}Uccidi (+(@) mark)
│✾▹ ${prefix}Slap (@ mark)
│✾▹ ${prefix}Calcio (+(@) mark)
│✾▹ ${prefix}Dogolpe (segno (@))
│✾▹ ${prefix}Marchio nazista (@))
│✾▹ ${prefix}Possibilità (dì qualcosa)
│✾▹ ${prefix}Coppia
│✾▹ ${prefix}Rankgay
│✾▹ ${prefix}Rankgado
│✾▹ ${prefix}Rankhorn
│✾▹ ${prefix}Rankyummy
│✾▹ ${prefix}Rankgostosa
│✾▹ ${prefix}Grado nazista
│✾▹ ${prefix}Rankotakus
│✾▹ ${prefix}Rankpau
╰──────────┘
`
}

exports.brincadeiras = scherzi

// MENU EFFETTI IMMAGINE, MONTAGGIO Tops Kkk

const effects = (prefisso, mittente) => {

// NON ELIMINARE QUELLO ${prefisso}, non inserire nulla ${dentro in questo modo} QUESTE SONO DEFINIZIONI CHE STAI ESTRAENDO DA settings.json, dalla cartella del proprietario, puoi solo cambiare la base di tutto, tranne le definizioni, solo se si desidera eliminare la definizione completa.

return​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
​​​​​​​​​​​​​​​​​​​​​​​​​
╭───────────────┐
├─ Menu Effetti
├───────────────
│ Utente: @${sender.split("@")[0]}
╰──────────┐
╭──────────┴─┐
│✾▹ ${prefisso}Didascalia (segno)-(img)
│✾▹ ${prefix}Ricercato (mark)-(img)
│✾▹ ${prefix}Hitler (mark)-(img)
│✾▹ ${prefix}Bloccato (segno)-(img)
│✾▹ ${prefix}Cestino (contrassegno)-(img)
│✾▹ ${prefix}Deletef(mark)-(img)
│✾▹ ${prefix}Dead (mark)-(img)
│✾▹ ${prefix}Lgbt (mark)-(img)
│
╰──────────┘
`
}

exports.effects = effetti
