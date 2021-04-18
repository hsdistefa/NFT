pragma solidity ^0.6.6;

import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {
    AggregatorV3Interface internal priceFeed;

    /**
     * Network: Rinkeby
     * Aggregator: BTC/USD
     * Address: 0xECe365B379E1dD183B20fc5f022230C044d51404
     */
     constructor() public {
         priceFeed = AggregatorV3Interface(0xECe365B379E1dD183B20fc5f022230C044d51404);
     }

    /**
     * Returns the latest price
     */ 
    function getThePrice() public view returns(int) {
        (
            uint80 roundId,
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        return price;
    }
}