/**
 * This is the first file that is run. It initializes the central
 * utils file as well as reads the input from stdin
 */

'use strict';

const fs = require('fs');
const Auction = require('./Auction');
const {initConfig, getSites} = require('./configUtils');

// reading file using readFileSync in stdin
try {
  const auctions = JSON.parse(fs.readFileSync(0).toString());
  initConfig();

  let allWinningBids = [];
  for (let auction of auctions) {
    let currAuction = new Auction(auction);
    if (getSites().has(currAuction.site)) {
      allWinningBids.push(currAuction.runAuction());
    } else {
      allWinningBids.push([])
    }
  }

  console.log(allWinningBids);
} catch (e) {
  console.error(`Config Initialization failed or Invalid input ${e}`);
}
