//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
// import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author BuidlGuidl
 */
contract Username {
    mapping(string => address) usernames;

    function registerUsername(string memory _username) public {
        require(usernames[_username] == address(0), "Username already exists");
        usernames[_username] = msg.sender;
    }

    function getUsernameAddress(string memory _username) public view returns (address) {
        return usernames[_username];
    }
	}