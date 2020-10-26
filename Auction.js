const {getSites, getBidders} = require('./configUtils');

class Auction {
  constructor(auction) {
    this.site = auction.site;
    this.units = auction.units;
    this.bids = auction.bids;
  }

  runAuction() {
    let winningBids = [];

    for (let unit of this.units) {
      let unitBids = this.bids.filter(bid => {
        return (bid.unit === unit &&
          getSites().get(this.site).bidders.indexOf(bid.bidder) > -1)
      });

      let maxBid = null;

      for (let unitBid of unitBids) {
        let adjustedUnitBid = this.getAdjustedBid(unitBid);
        if (adjustedUnitBid > getSites().get(this.site).floor) {
          if (!maxBid) {
            maxBid = unitBid;
          } else if(adjustedUnitBid > this.getAdjustedBid(maxBid)) {
            maxBid = unitBid
          }
        }
      }

      if (maxBid) {
        winningBids.push(maxBid);
      } else {
        winningBids.push({});
      }
    }

    return winningBids;
  }

  getAdjustedBid(bid) {
    return (bid.bid+bid.bid*getBidders().get(bid.bidder));
  }
}

module.exports = Auction;
