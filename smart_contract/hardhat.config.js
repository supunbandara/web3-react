//https://eth-goerli.g.alchemy.com/v2/OAx8rLcQDlr5y_2kQM-qaotGvIheYTly

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/OAx8rLcQDlr5y_2kQM-qaotGvIheYTly",
      accounts: [
        "b98fdfaa19776e95ec96a826ebafcd3176c3c93a237a6de61a23ffb59b90822c",
      ],
    },
  },
};
