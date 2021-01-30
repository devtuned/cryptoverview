import { Currency } from './lib'

const currencies = [
  new Currency('BTC', {
    imgSrc: 'btc.png',
  }),
]

// // THIS IS JUST FOR SANDBOX UNTIL THERE'S A COMPONENT FRAMEWORK
// // ugly -- don't keep this
// const el = document.querySelector('.dashboard')
// for (const currency of currencies) {
//   if (!el) continue

//   el.innerHTML += `
//     <div class="crypto">
//       <header>
//         <div class="crypto-icon" data-imgsrc="${currency.imgSrc}"></div>
//         <div class="crypto-summary">
//           <div class="definition">
//             <span class="definition-title">Symbol</span>
//             <span class="definition-content">${currency.symbol}</span>
//           </div>
//           <div class="definition">
//             <span class="definition-title">Value</span>
//             <span class="definition-content">${currency.value} $</span>
//           </div>
//         </div>
//       </header>
//     </div>
//   `
// }
