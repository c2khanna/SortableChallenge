'use strict';

const fs = require('fs');
const Auction = require('./Auction');
const {initConfig, getSites} = require('./configUtils');

// reading file using readFileSync in stdin
const auctions = JSON.parse(fs.readFileSync(0).toString());
initConfig();

let res = [];
for (let auction of auctions) {
  let auctionClassObj = new Auction(auction);
  if (getSites().has(auctionClassObj.site)) {
    res.push(auctionClassObj.runAuction());
  } else {
    res.push([])
  }
}

console.log(res);
