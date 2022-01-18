pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./Verification.sol";

/**
 * @title ProductProvenance
 * @dev Supply chain traceability system.
 */
contract ProductProvenance is ERC721 {

    struct Owner {
        address ownerAddress;
        bool stateVerificationStatus;
        bool ownershipAcked;
    }

    struct Product {
        uint256 tokenId;
        bytes32 serialNoHash;
        bytes32 factoryZipCode;
    }

    uint256 private lastTokenId;
    mapping(uint256 => Owner[]) private _owners;
    mapping(bytes32 => uint256) private _productTokenIdsBySerialNo;
    mapping(uint256 => Product) private _productsByTokenId;
    Verification private v;

    constructor()
    ERC721("ProductProvenance", "PP") {
        v = new Verification();
        lastTokenId = 0;
    }

    function checkStateVerificationStatus(address owner) internal view returns (bool) {
        return v.queryVerified(owner);
    }

    function manufacture(bytes32 serialNoHash, bytes32 factoryZipCode) external payable {
        _safeMint(msg.sender, lastTokenId);
        _productsByTokenId[lastTokenId] = Product({
            tokenId: lastTokenId,
            serialNoHash: serialNoHash,
            factoryZipCode: factoryZipCode
        });
        _productTokenIdsBySerialNo[serialNoHash] = lastTokenId;
        _owners[lastTokenId].push(Owner({
            ownerAddress: msg.sender,
            stateVerificationStatus: checkStateVerificationStatus(msg.sender),
            ownershipAcked: false
        }));
        lastTokenId += 1;
    }

    function transferOwnership(address to, uint256 tokenId) external payable {
        require(tokenId < lastTokenId, "The token with this ID does not exist.");
        _safeTransfer(msg.sender, to, tokenId, "");
        _owners[tokenId].push(Owner({
            ownerAddress: to,
            stateVerificationStatus: checkStateVerificationStatus(to),
            ownershipAcked: false
        }));
    }

    function acknowledgeOwnership(uint256 tokenId) external payable {
        require(tokenId < lastTokenId, "The token with this ID does not exist.");
        address mostRecentOwnerAddress = _owners[tokenId][_owners[tokenId].length - 1].ownerAddress;
        require(mostRecentOwnerAddress == msg.sender, "The most recent owner of this token is not the caller.");
	    require(!_owners[tokenId][_owners[tokenId].length - 1].ownershipAcked, "The ownership has already been approved.");
        _owners[tokenId][_owners[tokenId].length - 1].ownershipAcked = true;
    }

    function getLastTokenId() external view returns (uint256) {
        return lastTokenId;
    }

    function getProductByTokenId(uint256 tokenId) external view returns (bytes32, bytes32) {
        return (_productsByTokenId[tokenId].serialNoHash, _productsByTokenId[tokenId].factoryZipCode);
    }

    function getProductBySerialNo(bytes32 serialNo) external view returns (bytes32, bytes32) {
        uint256 tokenId = _productTokenIdsBySerialNo[serialNo];
        return (_productsByTokenId[tokenId].serialNoHash, _productsByTokenId[tokenId].factoryZipCode);
    }

    function getOwnerCountByTokenId(uint256 tokenId) external view returns (uint) {
        return _owners[tokenId].length;
    }

    function getOwnerCountBySerialNo(bytes32 serialNo) external view returns (uint) {
        uint256 tokenId = _productTokenIdsBySerialNo[serialNo];
        return _owners[tokenId].length;
    }

    function getFirstOwnerByTokenId(uint256 tokenId) external view returns (address, bool, bool) {
        return (_owners[tokenId][0].ownerAddress, _owners[tokenId][0].stateVerificationStatus, _owners[tokenId][0].stateVerificationStatus);
    }

    function getFirstOwnerBySerialNo(bytes32 serialNo) external view returns (address, bool, bool) {
        uint256 tokenId = _productTokenIdsBySerialNo[serialNo];
        return (_owners[tokenId][0].ownerAddress, _owners[tokenId][0].stateVerificationStatus, _owners[tokenId][0].stateVerificationStatus);
    }

    function getLastOwnerByTokenId(uint256 tokenId) external view returns (address, bool, bool) {
        return (_owners[tokenId][_owners[tokenId].length - 1].ownerAddress, _owners[tokenId][_owners[tokenId].length - 1].stateVerificationStatus, _owners[tokenId][_owners[tokenId].length - 1].stateVerificationStatus);
    }

    function getLastOwnerBySerialNo(bytes32 serialNo) external view returns (address, bool, bool) {
        uint256 tokenId = _productTokenIdsBySerialNo[serialNo];
        return (_owners[tokenId][_owners[tokenId].length - 1].ownerAddress, _owners[tokenId][_owners[tokenId].length - 1].stateVerificationStatus, _owners[tokenId][_owners[tokenId].length - 1].stateVerificationStatus);
    }

    function getOwnerByTokenIdAndOwnerIndex(uint256 tokenId, uint ownerIndex) external view returns (address, bool, bool) {
        return (_owners[tokenId][ownerIndex].ownerAddress, _owners[tokenId][ownerIndex].stateVerificationStatus, _owners[tokenId][ownerIndex].stateVerificationStatus);
    }

    function getOwnerBySerialNoAndOwnerIndex(bytes32 serialNo, uint ownerIndex) external view returns (address, bool, bool) {
        uint256 tokenId = _productTokenIdsBySerialNo[serialNo];
        return (_owners[tokenId][ownerIndex].ownerAddress, _owners[tokenId][ownerIndex].stateVerificationStatus, _owners[tokenId][ownerIndex].stateVerificationStatus);
    }
}
