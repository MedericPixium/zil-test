import { Zilliqa } from '@zilliqa-js/zilliqa'

const zil = new Zilliqa("https://dev-api.zilliqa.com");

// zil.blockchain.getTransactionStatus("5f42eb176c52b2aeaad4fd56b14a99a14d8455887611e789670e225c717ccd28").then(tx => {
//     console.dir(tx)
// }).catch(e => {
//     console.dir(e)
// })

// zil.blockchain.getTransactionStatus("0x5f42eb176c52b2aeaad4fd56b14a99a14d8455887611e789670e225c717ccd28").then(tx => {
//     console.dir(tx)
// }).catch(e => {
//     console.dir(e)
// })

// zil.blockchain.getTransactionStatus("aab6f20bee6f8a19037acfb24de9d47f61748f796de6f6ce83b8dda0bd2f63d9").then(tx => {
//     console.dir(tx)
// }).catch(e => {
//     console.dir(e)
// })

// zil.blockchain.getTransactionStatus("0xaab6f20bee6f8a19037acfb24de9d47f61748f796de6f6ce83b8dda0bd2f63d9").then(tx => {
//     console.dir(tx)
// }).catch(e => {
//     console.dir(e)
// })

zil.blockchain.getRecentTransactions().then(async (txs) => {
    if (txs?.result?.TxnHashes && txs.result.TxnHashes.length > 0) {
        for await (const tx of txs.result.TxnHashes) {
            try {
                console.dir(await zil.blockchain.getTransactionStatus(tx))

            } catch (error) {
                console.log(tx)
                console.log(error)
            }
        }
    }
})
