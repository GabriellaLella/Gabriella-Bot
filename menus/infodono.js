const infodono = (prefisso, numberdn, BotName, mittente) => {

// NON ELIMINARE QUESTO ${NickDono} né
//${numerodn} né ${BotName} né ${prefix} solo se vuoi cancellare completamente, non inserire nulla ${dentro in questo modo} QUESTE SONO DEFINIZIONI CHE STANNO TIRANDO DA settings.json, dalla cartella del proprietario, puoi solo cambiare la base tutto tranne le impostazioni, solo se vuoi cancellare l'intera impostazione.

ritorno`
╭───────────────┐
├ INFORMAZIONI SUL PROPRIETARIO
├───────────────
│ CMD richiesto: @${sender.split("@")[0]}
├───────────────┐
│ Proprietario: wa.me/${numerodn}
╞───────────────┘
╰──────────┐
╭──────────┴─┐
│ INFORMAZIONI SUL BOT
├────────────
│Prefisso: ⩺ ${prefisso}
│Nome: ⩺ ${NomeBot}
╰─────────────╯
`
}

exports.infodono = infodono
