/**
 * This file is a central utils file that processes the
 * config.json file that is given as input. It converts
 * the given JSON to Maps that are more useful based on
 * the algorithm designed. It also defines getter functions
 * that can be used in other files to get the Maps needed
 */

const config = require('./config.json');

let sites = new Map();
let bidders = new Map();

const initConfig = () => {
  for (let site of config.sites) {
    sites.set(site.name, site);
  }

  for (let bidder of config.bidders) {
    bidders.set(bidder.name, bidder.adjustment);
  }
}

const getSites = () => {
  return sites;
}

const getBidders = () => {
  return bidders;
}

module.exports = {
  initConfig,
  getSites,
  getBidders
}
