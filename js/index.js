
var qoutesContainer= [
{qoute:"“Be yourself; everyone else is already taken.”", author:"― Oscar Wilde"},
{qoute:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", author:"― Albert Einstein"},
{qoute:"“So many books, so little time.”", author:"― Oscar ― Frank Zappa"},
{qoute:"“A room without books is like a body without a soul.”", author:"― Marcus Tullius Cicero"},
{qoute:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", author:"― Bernard M. Baruch"},
{qoute:"“A room without books is like a body without a soul.”", author:"― Marcus Tullius Cicero"},
{qoute:"“You only live once, but if you do it right, once is enough.”", author:"― Mae West"},
{qoute:"“Be the change that you wish to see in the world.”", author:"― Mahatma Gandhi"},
{qoute:"“In three words I can sum up everything I've learned about life: it goes on.”", author:"― Robert Frost"},
{qoute:"“If you tell the truth, you don't have to remember anything.”", author:"― Mark Twain"},
{qoute:"“A friend is someone who knows all about you and still loves you.”", author:"― Elbert Hubbard"},
{qoute:"“To live is the rarest thing in the world. Most people exist, that is all.”", author:"― Oscar Wilde"},
{qoute:"“We accept the love we think we deserve.”", author:"― Stephen Chbosky, The Perks of Being a Wallflower"},
{qoute:"“Without music, life would be a mistake.”", author:"― Friedrich Nietzsche, Twilight of the Idols"},
{qoute:"“It is better to be hated for what you are than to be loved for what you are not.”", author:"― Andre Gide, Autumn Leaves"},
]



 function generateQuote(){

    var x=Math.trunc(Math.random()*qoutesContainer.length)
    document.getElementById("quoteOutput").innerHTML=qoutesContainer[x].qoute
    document.getElementById("authorOutput").innerHTML=qoutesContainer[x].author

    qoutesContainer.splice(x,1)
    y=qoutesContainer.length 
    if( y==0){
        document.getElementById("to-do").innerHTML="Quotes End , please click again to re-read quotes"
        document.getElementById("btn").innerHTML="reload"

        qoutesContainer.push (
            {qoute:"“Be yourself; everyone else is already taken.”", author:"― Oscar Wilde"},
            {qoute:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", author:"― Albert Einstein"},
            {qoute:"“So many books, so little time.”", author:"― Oscar ― Frank Zappa"},
            {qoute:"“A room without books is like a body without a soul.”", author:"― Marcus Tullius Cicero"},
            {qoute:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", author:"― Bernard M. Baruch"},
            {qoute:"“A room without books is like a body without a soul.”", author:"― Marcus Tullius Cicero"},
            {qoute:"“You only live once, but if you do it right, once is enough.”", author:"― Mae West"},
            {qoute:"“Be the change that you wish to see in the world.”", author:"― Mahatma Gandhi"},
            {qoute:"“In three words I can sum up everything I've learned about life: it goes on.”", author:"― Robert Frost"},
            {qoute:"“If you tell the truth, you don't have to remember anything.”", author:"― Mark Twain"},
            {qoute:"“A friend is someone who knows all about you and still loves you.”", author:"― Elbert Hubbard"},
            {qoute:"“To live is the rarest thing in the world. Most people exist, that is all.”", author:"― Oscar Wilde"},
            {qoute:"“We accept the love we think we deserve.”", author:"― Stephen Chbosky, The Perks of Being a Wallflower"},
            {qoute:"“Without music, life would be a mistake.”", author:"― Friedrich Nietzsche, Twilight of the Idols"},
            {qoute:"“It is better to be hated for what you are than to be loved for what you are not.”", author:"― Andre Gide, Autumn Leaves"})
    }
    if( y!==0){
        document.getElementById("to-do").innerHTML="Press the button below to recieve a random quote!"
        document.getElementById("btn").innerHTML="New Quote"
    }
  

}
























