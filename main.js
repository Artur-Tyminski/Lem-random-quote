// ----- VARIABLES----- //

// Buttons

const buttonRandom = document.querySelector('.btnRandom');
const buttonAdd = document.querySelector('.btnAdd');
const buttonAdded = document.querySelector('.btnAdded');
const buttonRemove = document.querySelector('.btnRemove');
const buttonReset = document.querySelector('.btnReset');

// Main title

const mainTitle = document.querySelector('.main__title');

// Logo

const logoTraingle = document.querySelector('.logo__el--one');
const logoX = document.querySelector('.logo__el--two');
const logoCircle = document.querySelector('.logo__el--three');

// Quotes

const quote = document.querySelector('.quote');
const newQuote = document.querySelector('.newQuote');
const addedQuote = document.querySelector('.addedQuote');
const quoteToRemove = document.querySelector('.quoteToRemove');

// Flags

let isInProgress = false; // if true, prevents a quote from being drawn multiple times
let randomIsOpen = false;
let addIsOpen = false;
let addedIsOpen = false;
let rmIsOpen = false;
let resetIsOpen = false; // if true, stop run 'show Random'function

// ----- ARRAYS ----- //

const quotes = [
    'Ateistą jestem z powodów moralnych. Uważam, że twórcę rozpoznajemy poprzez jego dzieło. W moim odczuciu świat jest skonstruowany tak fatalnie, że wolę wierzyć, iż nikt go nie stworzył!',
    'Nie ma dobrej odpowiedzi na źle postawione pytanie.',
    'Nie ma sprawiedliwości tam, gdzie jest prawo głoszące wolność najwyższą…',
    'Pomału można doprowadzić nawet konklawe do kanibalizmu. Byle postępować stopniowo, krok za krokiem.',
    'Każda bez wyjątku nowa technologia ma awers korzyści i zarazem rewers nowych, nieznanych dotychczas bied.',
    'Im bardziej zaawansowane technicznie (doskonalsze!) medium, tym bardziej prymitywne, błahe i bezużyteczne wiadomości są przy jego pomocy przekazywane.',
    'Kiedy wszyscy są wariatami, nikt nie jest wariatem.',
    'Można przypuścić, że wszyscy ludzie mają świadomość, lecz na ogół nie wszyscy zdają sobie z tego sprawę.',
    'Jesteśmy ludźmi, kojarzymy i rozumujemy po ziemsku i wskutek tego możemy popełnić ciężkie błędy, przyjmując obce pozory za naszą prawdę, to znaczy układając pewne fakty w schematy przywiezione z Ziemi.',
    'Poeta to taki, co umie w ładny sposób być nieszczęśliwy',
    'Sporządzić mogę wszystko, co mi przyjdzie do głowy – mówił Mikromił – ale znów nie wszystko do niej przychodzi.',
    'Człowiek wyruszył na spotkanie innych światów, innych cywilizacji, nie poznawszy do końca własnych zakamarków, ślepych dróg, studni, zabarykadowanych, ciemnych drzwi.',
    'Każdy ma swoje własne zamiłowania: piłka nożna, kopulacja, picie piwa z puszki. Mnie natomiast ogromną przyjemność sprawia dowiadywanie się różnych ponurych rzeczy z trudnych książek.',
    'Człowiek potrafi owładnąć tym tylko, co może pojąć, a pojąć z kolei może jedynie to, co się da wysłowić. Niewysłowione jest niepojęte.',
    'A więc wdzięczność za akt kreacji? I ta Bogu się nie należy. Zakłada ona bowiem zniewolenie do wiary w to, że być jest na pewno lepiej aniżeli nie być; nie pojmuję, jak by to z kolei można było udowodnić.',
    '(...) na pytania o swoją "ostateczną istotę" świat odmawia "ostatecznych" odpowiedzi.',
    'Ludzie tak jak kozy potrzebują trawy, ale nie wiedzą tego tak dobrze jak one.',
    'Normalny człowiek jest istotą wysoce nielogiczną i w tym jego człowieczeństwo.',
    'Pomyśl, ponazywaliśmy wszystkie gwiazdy i planety, a może one miały już nazwy?',
    'Należy stworzyć ogólną teorię zwalczania elektro-smoków, której smok księżycowy będzie wypadkiem szczególnym, bardzo łatwym do rozwiązania.'
];

const quotesDefault = [
    'Ateistą jestem z powodów moralnych. Uważam, że twórcę rozpoznajemy poprzez jego dzieło. W moim odczuciu świat jest skonstruowany tak fatalnie, że wolę wierzyć, iż nikt go nie stworzył!',
    'Nie ma dobrej odpowiedzi na źle postawione pytanie.',
    'Nie ma sprawiedliwości tam, gdzie jest prawo głoszące wolność najwyższą…',
    'Pomału można doprowadzić nawet konklawe do kanibalizmu. Byle postępować stopniowo, krok za krokiem.',
    'Każda bez wyjątku nowa technologia ma awers korzyści i zarazem rewers nowych, nieznanych dotychczas bied.',
    'Im bardziej zaawansowane technicznie (doskonalsze!) medium, tym bardziej prymitywne, błahe i bezużyteczne wiadomości są przy jego pomocy przekazywane.',
    'Kiedy wszyscy są wariatami, nikt nie jest wariatem.',
    'Można przypuścić, że wszyscy ludzie mają świadomość, lecz na ogół nie wszyscy zdają sobie z tego sprawę.',
    'Jesteśmy ludźmi, kojarzymy i rozumujemy po ziemsku i wskutek tego możemy popełnić ciężkie błędy, przyjmując obce pozory za naszą prawdę, to znaczy układając pewne fakty w schematy przywiezione z Ziemi.',
    'Poeta to taki, co umie w ładny sposób być nieszczęśliwy',
    'Sporządzić mogę wszystko, co mi przyjdzie do głowy – mówił Mikromił – ale znów nie wszystko do niej przychodzi.',
    'Człowiek wyruszył na spotkanie innych światów, innych cywilizacji, nie poznawszy do końca własnych zakamarków, ślepych dróg, studni, zabarykadowanych, ciemnych drzwi.',
    'Każdy ma swoje własne zamiłowania: piłka nożna, kopulacja, picie piwa z puszki. Mnie natomiast ogromną przyjemność sprawia dowiadywanie się różnych ponurych rzeczy z trudnych książek.',
    'Człowiek potrafi owładnąć tym tylko, co może pojąć, a pojąć z kolei może jedynie to, co się da wysłowić. Niewysłowione jest niepojęte.',
    'A więc wdzięczność za akt kreacji? I ta Bogu się nie należy. Zakłada ona bowiem zniewolenie do wiary w to, że być jest na pewno lepiej aniżeli nie być; nie pojmuję, jak by to z kolei można było udowodnić.',
    '(...) na pytania o swoją "ostateczną istotę" świat odmawia "ostatecznych" odpowiedzi.',
    'Ludzie tak jak kozy potrzebują trawy, ale nie wiedzą tego tak dobrze jak one.',
    'Normalny człowiek jest istotą wysoce nielogiczną i w tym jego człowieczeństwo.',
    'Pomyśl, ponazywaliśmy wszystkie gwiazdy i planety, a może one miały już nazwy?',
    'Należy stworzyć ogólną teorię zwalczania elektro-smoków, której smok księżycowy będzie wypadkiem szczególnym, bardzo łatwym do rozwiązania.'
];

// ----- FUNCTIONS ----- //

// Heading animation - after hover btnRandom 

const headingFxIn = () => {
    mainTitle.classList.toggle('mainTitleFx');
}

const headingFxOut = () => {
    mainTitle.classList.remove('mainTitleFx');
}

// Logo animation - after click btnRandom 

const changeClrEl = function (element, time) {
    setTimeout(() => {
        element.classList.add('elClrIn');
    }, time);
    setTimeout(() => {
        element.classList.remove('elClrIn')
    }, time + 600);
    setTimeout(() => {
        element.classList.add('elClrIn')
    }, time + 1200);
    setTimeout(() => {
        element.classList.remove('elClrIn')
    }, time + 1800);
}

// Close functions
/*
- close selected field when other is clicked to open
- depends on flag
- used in show functions
*/

const closeRandom = () => {
    randomIsOpen = false;
    isInProgress = false;
    resetIsOpen = false;
    quote.classList.remove('openRandom');
    buttonRandom.textContent = 'Losowa myśl';
    return;
}

const closeAdd = () => {
    addIsOpen = false;
    resetIsOpen = false;
    newQuote.value = ''; // clear add field after click 'btnAdd'
    buttonAdd.textContent = 'Dodaj myśl';
    newQuote.classList.remove('openToAdd');
    buttonAdd.classList.remove('textIn')
    return;
}

const closeAdded = () => {
    addedIsOpen = false;
    resetIsOpen = false;
    addedQuote.classList.remove('openAdded');
    buttonAdded.textContent = 'Pokaż dodane';
    addedQuote.textContent = '';
    return;
}

const closeToRemove = () => {
    rmIsOpen = false;
    resetIsOpen = false;
    quoteToRemove.value = '';
    quoteToRemove.classList.remove('openRemoved');
    buttonRemove.classList.remove('textIn')
    buttonRemove.textContent = 'Usuń myśl';
    return;
}

// Quote field 
/*
- used in 'add new quote' & 'remove quote'
- 'quote' parameter used to select specific quote field
*/

const changeQuoteField = (quote, quoteValue, quotePlaceholder, quoteStyle) => {
    setTimeout(() => {
        quote.value = quoteValue; // clear added text to specific quote field
        quote.placeholder = quotePlaceholder; // change placeholder text after input true or false value
        quote.classList.add(quoteStyle); // add diffrent border style if true or false
    }, 0);
    setTimeout(() => {
        quote.classList.remove(quoteStyle)
    }, 150);
}

// Button
/*
- used by btnAdd & btnReset
- change button text and style 
- depend on added value to quote field
*/

const accentAddBtn = function () {
    if (!newQuote.value) {
        buttonAdd.textContent = 'Ukryj';
        buttonAdd.classList.remove('textIn')
        return;
    } else {
        buttonAdd.textContent = 'Dodaj';
        buttonAdd.classList.add('textIn')
    }
}

const accentRmBtn = function () {
    if (!quoteToRemove.value) {
        buttonRemove.textContent = 'Ukryj';
        buttonRemove.classList.remove('textIn')
        return;
    } else {
        buttonRemove.textContent = 'Usuń';
        buttonRemove.classList.add('textIn')
    }
}

// ---------- SHOW FUNCTIONS ---------- //
/*
- depend on flag
- if true: open field after click btn
- if false: close field after click btn
*/

// Random quote

const showRandom = (e) => {
    e.preventDefault();
    closeAdd();
    closeAdded();
    closeToRemove();

    if (isInProgress) {
        return;
    }

    if (randomIsOpen) { // if true -> close field 
        randomIsOpen = false;
        quote.classList.remove('openRandom');
        buttonRandom.textContent = 'Losowa myśl';
        return
    } else {
        isInProgress = true
        changeClrEl(logoTraingle, 200);
        changeClrEl(logoX, 400);
        changeClrEl(logoCircle, 600);
    }

    setTimeout(() => {
        if (addIsOpen || addedIsOpen || rmIsOpen || resetIsOpen) { // stop run this function if other btn is clicked
            return;
        }
        isInProgress = false;
        randomIsOpen = true;
        quote.classList.add('openRandom');
        buttonRandom.textContent = 'Ukryj';
        quote.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    }, 3000); // draw random quote
}

// Added quotes

const showAdded = function (e) {
    e.preventDefault();
    closeRandom();
    closeAdd();
    closeToRemove();

    addedQuote.textContent = '';

    if (addedIsOpen) { // if true -> close field 
        addedIsOpen = false;
        addedQuote.classList.remove('openAdded');
        buttonAdded.textContent = 'Pokaż dodane';
        // whenIsOpen(addedQuote, 'openAdded', buttonAdded, 'Pokaż dodane')
    } else {
        addedIsOpen = true;
        addedQuote.classList.add('openAdded');
        buttonAdded.textContent = 'Ukryj';

        let addedDocumentFr = document.createDocumentFragment();

        for (let i = 0; i < quotes.length; i++) {
            p = document.createElement('p');
            p.classList.add('form__p');
            addedDocumentFr.appendChild(p);
            p.textContent = `${i}. ${quotes[i]}`;
        }
        addedQuote.appendChild(addedDocumentFr);
    }
}

// Add new quote

const showAddBox = () => { // open & close field on btn click
    addIsOpen = !addIsOpen;
    newQuote.classList.toggle('openToAdd');
    buttonAdd.classList.remove('textIn');
    buttonAdd.textContent = 'Dodaj myśl';
}

const addNew = (e) => {
    e.preventDefault();
    closeRandom();
    closeAdded();
    closeToRemove();

    newQuote.placeholder = 'Dodaj myśl..';

    if (!addIsOpen) { // if false -> open field
        showAddBox();
        buttonAdd.textContent = 'Ukryj';
    } else if (newQuote.value) { // if true(opened field) & added value -> add new value to array & close field
        quotes.push(newQuote.value);
        changeQuoteField(newQuote, '', 'Dodana', 'corectValue');
        setTimeout(() => {
            showAddBox();
        }, 150);
    } else { // if true(opened field) & nothing is added -> close field
        showAddBox();
    }
}

// Remove quote

const showRemoveBox = () => { // open & close field on btn click
    rmIsOpen = !rmIsOpen;
    quoteToRemove.classList.toggle('openRemoved');
    buttonRemove.classList.remove('textIn');
    buttonRemove.textContent = 'Usuń myśl';
}

const removeQuote = (e) => {
    e.preventDefault();
    closeRandom();
    closeAdd();
    closeAdded();

    quoteToRemove.placeholder = 'Podaj numer myśli do usunięcia..';

    if (!rmIsOpen) { // if false -> open field
        showRemoveBox();
        buttonRemove.textContent = 'Ukryj';
    } else if (quoteToRemove.value.length === 0) { // close opened field with no value added
        showRemoveBox();
    } else if (quoteToRemove.value > quotes.length - 1 || quoteToRemove.value < 0 || !quoteToRemove.value.match(/^[0-9]+$/)) { // change btn & field style if value is incorect
        buttonRemove.classList.remove('textIn');
        buttonRemove.textContent = 'Ukryj';
        changeQuoteField(quoteToRemove, '', 'Nieprawidłowa wartość!', 'invalidValue');
    } else if (quoteToRemove.value) { // remove selected quote from array
        quotes.splice(quoteToRemove.value, 1);
        changeQuoteField(quoteToRemove, '', 'Usunięto', 'corectValue');
        setTimeout(() => { // close quote field
            showRemoveBox();
        }, 150);
    }
}

// Reset
/*
- reset main array to default
*/

const resetToDefault = function (e) {
    e.preventDefault();
    closeRandom();
    closeAdd();
    closeAdded();
    closeToRemove();
    resetIsOpen = true;
    quotes.splice(0, quotes.length, ...quotesDefault); // clear main array & add to main arr default array elements
}

// ----- EVENTS ----- //

// Show adwice
buttonRandom.addEventListener('click', showRandom);
buttonRandom.addEventListener('mouseover', headingFxIn);
buttonRandom.addEventListener('mouseout', headingFxOut);

// Add new
buttonAdd.addEventListener('click', addNew);
newQuote.addEventListener('input', accentAddBtn);

// Show added
buttonAdded.addEventListener('click', showAdded);

// Remove selected

buttonRemove.addEventListener('click', removeQuote);
quoteToRemove.addEventListener('input', accentRmBtn);

// Reset to default

buttonReset.addEventListener('click', resetToDefault);