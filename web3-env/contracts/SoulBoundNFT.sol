// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SoulBoundNFT is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    using Strings for uint256;

    uint256 public constant MAX_SUPPLY = 10000;
    uint256 public constant MAX_MINT = 20;
    uint256 public constant PRICE = 0.05 ether;
    uint256 public constant MAX_RESERVE = 100;

    bool public saleIsActive = false;
    bool public reserveIsActive = false;

    string private _baseTokenURI;

    constructor() ERC721("SoulBoundNFT", "SOUL") {}


    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        _baseTokenURI = baseURI;
    }

    function setSaleState(bool _state) public onlyOwner {
        saleIsActive = _state;
    }

    function setReserveState(bool _state) public onlyOwner {
        reserveIsActive = _state;
    }


}


    