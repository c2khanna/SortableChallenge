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
