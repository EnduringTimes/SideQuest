// Default parameter varibles
let count = 10;
let category = 0;
let difficulty = 0;
let type = 0;
// Url construction
const baseUrl = "https://opentdb.com/api.php?";
const urlParameters = `amount=${count}&category=${category}&difficulty=${difficulty}&type=${type}`;
const quizUrl = `${baseUrl}${urlParameters}`;



fetch(quizUrl) 
    .then(response =>{
        if (!response.ok) {
            throw new Error('response is not okay bud'+ response.statusText);
        }
        return response.json();
    })
    .then(data =>{
        console.log(data);
const quizData = data;
    })

    
    


