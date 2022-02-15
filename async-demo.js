"use strict";

const BASE_URL = "http://numbersapi.com/";
const BASE_URL_CARDS = "http://deckofcardsapi.com/";
const HEADERS = { 'content-type': 'application/json' }
const $body = $('body');
let DECK_ID = "new";


// async function showFavNumTrivia(num) {
//   const response = await axios.get(`${BASE_URL}${num}/trivia?json`);
//   console.log(response.data.text);
// }


// async function showFavNumsTrivia() {
//   const response = await axios.get(`${BASE_URL}14,1..3,27,45/trivia?json`);
//   // const response2 = await axios.get(`${BASE_URL}${27}/trivia?json`);
//   // const response3 = await axios.get(`${BASE_URL}${3}/trivia?json`);
//   // const response4 = await axios.get(`${BASE_URL}${99}/trivia?json`);
//   // const response5 = await axios.get(`${BASE_URL}${45}/trivia?json`);
//   console.log(response.data);
//   console.log(response.data['2']);
//   console.log(response.data['14']);
//   console.log(response.data['27']);
//   console.log(response.data['45']);


// }

// showFavNumsTrivia();

// async function showFavNumTriviaFourTimes(num) {
//   const response1 =  axios.get(`${BASE_URL}${num}/trivia?json`);
//   const response2 =  axios.get(`${BASE_URL}${num}/trivia?json`);
//   const response3 =  axios.get(`${BASE_URL}${num}/trivia?json`);
//   const response4 =  axios.get(`${BASE_URL}${num}/trivia?json`);

//   let responses = [await response1, await response2, await response3, await response4];
//   for(let response of responses){
//     console.log(response.data.text);
//   }

// }

// showFavNumTriviaFourTimes(10);

// ************************** DECK OF CARDS API EXERCISE ****************************

// async function drawAndShuffleCard() {
//   const shuffleResponse = await axios.get(`${BASE_URL_CARDS}api/deck/new/shuffle/?deck_count=1`);
//   // const shuffleResponse2 = await axios.get(`${BASE_URL_CARDS}api/deck/new/draw/?count=1`);
//   const deckId = shuffleResponse.data.deck_id;
//   const drawCard = await axios.get(`${BASE_URL_CARDS}api/deck/${deckId}/draw/?count=1`);
//   console.log("shuffle response: ", drawCard.data.cards);
// }
// drawAndShuffleCard();
setUp();

async function prepareDeck() {

  if(DECK_ID === 'new'){
    let resp = await axios.get(`${BASE_URL_CARDS}api/deck/new/shuffle/?deck_count=1`);
    DECK_ID = resp.data.deck_id;
  } else{
    let card = drawCard(DECK_ID);
    let $cardImage = $("<img>").attr("src", card.data.cards[0].image);
    $("#drawn-cards").append($cardImage);
  }
  
  // return deckId;
}


async function drawCard(deckId) {
  const card = await axios.get(`${BASE_URL_CARDS}api/deck/${deckId}/draw/?count=1`);
  return card;
}


async function setUp() {

  $("#drawn-cards").empty();
  // prepare deck
  await prepareDeck();
  // let url = `${BASE_URL_CARDS}api/deck/${deckId}/draw/?count=1`;
  
}

$body.on("sumbit", prepareDeck);


// promise to be resolved (hopefully)

// const validUrl = `${BASE_URL}/1`;
// const futureResolvedPromise = axios({ url: validUrl });

// futureResolvedPromise
//     .then(console.log)
//     .catch(console.warn);
// keeps going ...
// ...
// ...

// NFW to get that answer

// promise to be rejected

// const invalidUrl = `http://nope.nope`;
// const futureRejectedPromise = axios.get(invalidUrl);

// futureRejectedPromise
//     .then(console.log)
//     .catch(console.warn);


// // promise chaining
// axios({ url: `${BASE_URL}/1` })
//     .then(function f1(r1) {
//       console.log(`#1: ${r1.data.name}`);
//       return axios({ url: `${BASE_URL}/2` });
//     })
//     .then(function f2(r2) {
//       console.log(`#2: ${r2.data.name}`);
//       return axios({ url: `${BASE_URL}/3` });
//     })
//     .then(function f3(r3) {
//       console.log(`#3: ${r3.data.name}`);
//     })
//     .catch(function (err) {
//       console.error(err);
//     });
// end


// async function getPokemonAwait() {
//   const r1 = await axios({ url: `${BASE_URL}/1/` });
//   // ...
//   console.log(`#1: ${r1.data.name}`);

//   const r2 = await axios({ url: `${BASE_URL}/2/` });
//   console.log(`#2: ${r2.data.name}`);

//   const r3 = await axios({ url: `${BASE_URL}/3/` });
//   console.log(`#3: ${r3.data.name}`);
// }
// // end


// async function getPokemonAwaitCatch() {
//   try {
//     const r1 = await axios({ url: `${BASE_URL}/1/` });
//     console.log(`#1: ${r1.data.name}`);

//     const r2 = await axios({ url: `${BASE_URL}/2/` });
//     console.log(`#2: ${r2.data.name}`);

//     const r3 = await axios({ url: `${BASE_URL}/3/` });
//     console.log(`#3: ${r3.data.name}`);
//   } catch (err) {
//     console.warn("Try again later!");
//   }
// }
// end

