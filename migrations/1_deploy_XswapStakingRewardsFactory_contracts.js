const XswapStakingRewardsFactory = artifacts.require("XswapStakingRewardsFactory");

// addresses[0]: 0x38589069B6F7c7FA8Fd2B7e5c6d14C11893E358d (Xswapswap: Deployer)

module.exports = async function (deployer, network, addresses) {
  let rewardsToken;
  let stakingRewardsGenesis;
  
  if (network === 'mainnet' || network === 'mainnet-fork') {
    rewardsToken = await '0x380291A9A8593B39f123cF39cc1cc47463330b1F'; // xswapAddress
    stakingRewardsGenesis = await 1605484800; // 2020-11-16 02:00:00 +0200
  } else if (network === 'ropsten' || network === 'ropsten-fork') {
    rewardsToken = await '0x380291A9A8593B39f123cF39cc1cc47463330b1F'; // xswapAddress
    stakingRewardsGenesis = await 1605484800; // 2020-11-16 02:00:00 +0200
  } else {
    throw new Error('No Xswap Swap on this network')
  }
  
  await deployer.deploy(XswapStakingRewardsFactory, rewardsToken, stakingRewardsGenesis);
};
