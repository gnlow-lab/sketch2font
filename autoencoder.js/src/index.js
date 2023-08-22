import Autoencoder from "autoencoder"
import fs from "fs"

const X = fs
  .readFileSync("node_modules/autoencoder/data/birds.csv")
  .toString()
  .split('\n')
  .filter((line, i) => i > 0 && line.includes(','))
  .map(row => row
    .split(',')
    .splice(1)
    .map(x => parseFloat(x))
  )

const ae = new Autoencoder({
    nInputs: X[0].length,
    nHidden: 2,
    nLayers: 2,
    activation: "relu",
})

ae.fit(X, {
    batchSize: 100,
    iterations: 5000,
    method: "adagrad",
    stepSize: 0.01,
})