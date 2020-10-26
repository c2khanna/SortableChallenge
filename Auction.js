/**
 * This auction class standardizes the member variables for a given auction.
 * It also contains the runAuction function, which checks the auction against
 * the given constraints and returns the winning bids for the given auction
 */

const {
  getSites,
  getBidders
} = require('./configUtils');

class Auction {
  constructor(auction) {
    this.site = auction.site;
    this.units = auction.units;
    this.bids = auction.bids;
  }

  runAuction() {
    let winningBids = [];
    let maxBids = new Map();

    for (let bid of this.bids) {
      // check that bidder is allowed for this site and the unit is valid that they are bidding on
      if (getSites().get(this.site).bidders.indexOf(bid.bidder) > -1 && this.units.indexOf(bid.unit) > -1) {
        let adjustedUnitBid = this.getAdjustedBid(bid);
        if (adjustedUnitBid > getSites().get(this.site).floor) {
          if (!maxBids.has(bid.unit) || (adjustedUnitBid > maxBids.get(bid.unit).maxAdjBidVal)) {
            maxBids.set(bid.unit, {
              bid,
              maxAdjBidVal: adjustedUnitBid
            });
          }
        }
      }
    }

    for (let unit of this.units) {
      if (maxBids.has(unit)) {
        winningBids.push(maxBids.get(unit).bid);
      } else {
        winningBids.push({})
      }
    }

    return winningBids;
  }

  getAdjustedBid(bid) {
    return (bid.bid + bid.bid * getBidders().get(bid.bidder));
  }
}

module.exports = Auction;
