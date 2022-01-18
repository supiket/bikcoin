pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Verification
 * @dev Keeps legal entities of state and their verification status.
 */
contract Verification {

    mapping(address => bool) legalEntityVerifications;

    constructor() {}

    /**
     * @dev Verify a legal entity.
     * @param entity Address of entity to verify.
     */
    function verify(address entity) external payable  {
        require(!legalEntityVerifications[entity], "This address is already verified in state.");
        legalEntityVerifications[entity] = true;
    }

    /**
     * @dev Read the verification status of an entity.
     * @param entity the address of the entity to query.
     * @return verificationStatus_ the verification status of the given entity.
     */
    function queryVerified(address entity) public view returns (bool verificationStatus_) {
        verificationStatus_ = legalEntityVerifications[entity];
    }

}
