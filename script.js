const quotes=[
    {
        name:'Albert Einstein',
        quote:"If you can't explain it to a six year old, you don't understand it yourself."
    },
    {
        name:'Paulo Coelho',
        quote:"Tears are words that need to be written."
    },
    {
        name:'Anne Frank',
        quote:"I can shake off everything as I write; my sorrows disappear, my courage is reborn."
    },
    {
        name:'Benjamin Franklin',
        quote:"Either write something worth reading or do something worth writing."
    },
    {
        name:'Mahatma Gandhi',
        quote:"Be the change that you wish to see in the world."
    },
    {
        name:'Lala Lajpat Rai',
        quote:"Every blow on our bodies this afternoon is like a nail driven into the coffin of British imperialism."
    },
    {
        name: 'Dr.APJ Abdul Kalam', 
        quote:"“You have to dream before your dreams can come true."
    },
    {
        name:'Isaac Newton',
        quote:"Truth is ever to be found in simplicity, and not in the multiplicity and confusion of things."
    },
    {
        name:'William Shakespeare',
        quote:"Love looks not with the eyes, but with the mind, And therefore is winged Cupid painted blind."
    },
    {
        name:'Mother Teresa',
        quote:"Spread love everywhere you go. Let no one ever come to you without leaving happier."
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');


quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){

    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}
