"use strict";

const BASE_URL = "http://numbersapi.com/";
const HEADERS = {'content-type': 'application/json'}
const $body = $('body');

async function showFavNumTrivia(num) {
  const response = await axios.get(`${BASE_URL}${num}/trivia?json`);
  console.log(response.data.text);
}


async function showFavNumsTrivia() {
  const response = await axios.get(`${BASE_URL}14,1..3,27,45/trivia?json`);
  // const response2 = await axios.get(`${BASE_URL}${27}/trivia?json`);
  // const response3 = await axios.get(`${BASE_URL}${3}/trivia?json`);
  // const response4 = await axios.get(`${BASE_URL}${99}/trivia?json`);
  // const response5 = await axios.get(`${BASE_URL}${45}/trivia?json`);
  console.log(response.data);
  console.log(response.data['2']);
  console.log(response.data['14']);
  console.log(response.data['27']);
  console.log(response.data['45']);


}

showFavNumsTrivia();
















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

