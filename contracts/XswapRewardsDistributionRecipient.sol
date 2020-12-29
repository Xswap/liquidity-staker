pragma solidity ^0.5.16;

contract XswapRewardsDistributionRecipient {
    address public rewardsDistribution;

    function notifyRewardAmount(uint256 reward) external;

    modifier onlyRewardsDistribution() {
        require(msg.sender == rewardsDistribution, "Caller is not XswapRewardsDistribution contract");
        _;
    }
}
