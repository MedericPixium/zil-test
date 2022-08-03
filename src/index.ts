import { Zilliqa } from '@zilliqa-js/zilliqa'

const zil = new Zilliqa("https://dev-api.zilliqa.com");

zil.blockchain.getTransactionStatus("5f42eb176c52b2aeaad4fd56b14a99a14d8455887611e789670e225c717ccd28").then(tx => {
    console.dir(tx)
}).catch(e => {
    console.dir(e)
})

zil.blockchain.getTransactionStatus("0x5f42eb176c52b2aeaad4fd56b14a99a14d8455887611e789670e225c717ccd28").then(tx => {
    console.dir(tx)
}).catch(e => {
    console.dir(e)
})

zil.blockchain.getTransactionStatus("aab6f20bee6f8a19037acfb24de9d47f61748f796de6f6ce83b8dda0bd2f63d9").then(tx => {
    console.dir(tx)
}).catch(e => {
    console.dir(e)
})

zil.blockchain.getTransactionStatus("0xaab6f20bee6f8a19037acfb24de9d47f61748f796de6f6ce83b8dda0bd2f63d9").then(tx => {
    console.dir(tx)
}).catch(e => {
    console.dir(e)
})