let langOption   = document.querySelectorAll('select');
let fromText     = document.querySelector('.fromText');
let transText    = document.querySelector('.toTranslate');
let fromVoice    = document.querySelector('.from');
let toVoice      = document.querySelector('.to');
let cpyBtn       = document.querySelector('.bx-copy');
let countValue   = document.querySelector('.code__length');
let exchangLang  = document.querySelector('.bx-transfer');

langOption.forEach((get, con) =>{
    for(let countryCode in language){

        let selected;
        if(con == 0 && countryCode == "ru-RU"){
            selected = "selected";
        }else if(con == 1 && countryCode == "en-GB"){
            selected = "selected";
        }

        let option = `<option value="${countryCode}" ${selected}>${language[countryCode]}</option>`;
        get.insertAdjacentHTML('beforeend', option);

    }
})

fromText.addEventListener('input', function() {
    let content = fromText.value;
    fromContent = langOption[0].value;
    transContent= langOption[1].value;

    let transLINK = `https://api.mymemory.translated.net/get?q=${content}!&langpair=${fromContent}|${transContent}`;

    fetch(transLINK).then(translate => translate.json()).then(data => {
        transText.value = data.responseData.translatedText;
    })
})

fromVoice.addEventListener('click', function() {
    let fromTalk;
    fromTalk = new SpeechSynthesisUtterance(fromText.value);
    fromTalk.lang = langOption[0].value;
    speechSynthesis.speak(fromTalk)
})

toVoice.addEventListener('click', function() {
    let toTalk;
    toTalk = new SpeechSynthesisUtterance(transText.value);
    toTalk.lang = langOption[1].value;
    speechSynthesis.speak(toTalk)
})

cpyBtn.addEventListener('click', function myFunction() {
    navigator.clipboard.writeText(transText.value);
})

fromText.addEventListener('keyup', function() {
    countValue.innerHTML = `${fromText.value.length}/5000`;
})

exchangLang.addEventListener('click', function() {
    let tempText = fromText.value;
    fromText.value = transText.value;
    transText.value = tempText;

    let tempOpt = langOption[0].value;
    langOption[0].value = langOption[1].value;
    langOption[1].value = tempOpt;
})