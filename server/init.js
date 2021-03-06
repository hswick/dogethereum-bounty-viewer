Meteor.startup( function() {

    console.log('startmeup');


    web3 = new Web3(new Web3.providers.HttpProvider(Meteor.settings.ethNodeUrl));

    dogeDAO = {
        address: '0xdbf03b407c01e7cd3cbea99509d93f8dddc8c6fb',
        abi: [ { "constant": true, "inputs": [ { "name": "", "type": "uint256", "typeShort": "uint", "bits": "256", "displayName": "", "template": "elements_input_uint", "value": "" } ], "name": "proposals", "outputs": [ { "name": "recipient", "type": "address" }, { "name": "amount", "type": "uint256" }, { "name": "description", "type": "string" }, { "name": "votingDeadline", "type": "uint256" }, { "name": "executed", "type": "bool" }, { "name": "proposalPassed", "type": "bool" }, { "name": "numberOfVotes", "type": "uint256" }, { "name": "currentResult", "type": "int256" }, { "name": "proposalHash", "type": "bytes32" } ], "type": "function", "displayName": "proposals" }, { "constant": false, "inputs": [ { "name": "proposalNumber", "type": "uint256", "typeShort": "uint", "bits": "256", "displayName": "proposal Number", "template": "elements_input_uint" }, { "name": "transactionBytecode", "type": "bytes", "typeShort": "bytes", "bits": "", "displayName": "transaction Bytecode", "template": "elements_input_bytes" } ], "name": "executeProposal", "outputs": [ { "name": "result", "type": "int256" } ], "type": "function", "displayName": "execute Proposal" }, { "constant": true, "inputs": [ { "name": "", "type": "address", "typeShort": "address", "bits": "", "displayName": "", "template": "elements_input_address", "value": "" } ], "name": "memberId", "outputs": [ { "name": "", "type": "uint256", "value": "0", "displayName": "" } ], "type": "function", "displayName": "member Id" }, { "constant": true, "inputs": [], "name": "numProposals", "outputs": [ { "name": "", "type": "uint256", "value": "0", "displayName": "" } ], "type": "function", "displayName": "num Proposals" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256", "typeShort": "uint", "bits": "256", "displayName": "", "template": "elements_input_uint", "value": "1" } ], "name": "members", "outputs": [ { "name": "member", "type": "address", "value": "0xd1220a0cf47c7b9be7a2e6ba89f429762e7b9adb", "displayName": "member" }, { "name": "canVote", "type": "bool", "value": true, "displayName": "can Vote" }, { "name": "name", "type": "string", "value": "AvsA", "displayName": "name" }, { "name": "memberSince", "type": "uint256", "value": "1451337584", "displayName": "member Since" } ], "type": "function", "displayName": "members" }, { "constant": true, "inputs": [], "name": "debatingPeriodInMinutes", "outputs": [ { "name": "", "type": "uint256", "value": "10000", "displayName": "" } ], "type": "function", "displayName": "debating Period In Minutes" }, { "constant": true, "inputs": [], "name": "minimumQuorum", "outputs": [ { "name": "", "type": "uint256", "value": "0", "displayName": "" } ], "type": "function", "displayName": "minimum Quorum" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0xd1220a0cf47c7b9be7a2e6ba89f429762e7b9adb", "displayName": "" } ], "type": "function", "displayName": "owner" }, { "constant": false, "inputs": [ { "name": "targetMember", "type": "address", "typeShort": "address", "bits": "", "displayName": "target Member", "template": "elements_input_address", "value": "0x1db3439a222c519ab44bb1144fc28167b4fa6ee6" }, { "name": "canVote", "type": "bool", "typeShort": "bool", "bits": "", "displayName": "can Vote", "template": "elements_input_bool", "value": true }, { "name": "memberName", "type": "string", "typeShort": "string", "bits": "", "displayName": "member Name", "template": "elements_input_string", "value": "Vitalik (Personal)" } ], "name": "changeMembership", "outputs": [], "type": "function", "displayName": "change Membership" }, { "constant": true, "inputs": [], "name": "majorityMargin", "outputs": [ { "name": "", "type": "int256", "value": "0", "displayName": "" } ], "type": "function", "displayName": "majority Margin" }, { "constant": false, "inputs": [ { "name": "beneficiary", "type": "address", "typeShort": "address", "bits": "", "displayName": "beneficiary", "template": "elements_input_address" }, { "name": "etherAmount", "type": "uint256", "typeShort": "uint", "bits": "256", "displayName": "ether Amount", "template": "elements_input_uint" }, { "name": "JobDescription", "type": "string", "typeShort": "string", "bits": "", "displayName": " Job Description", "template": "elements_input_string" }, { "name": "transactionBytecode", "type": "bytes", "typeShort": "bytes", "bits": "", "displayName": "transaction Bytecode", "template": "elements_input_bytes" } ], "name": "newProposal", "outputs": [ { "name": "proposalID", "type": "uint256" } ], "type": "function", "displayName": "new Proposal" }, { "constant": false, "inputs": [ { "name": "minimumQuorumForProposals", "type": "uint256", "typeShort": "uint", "bits": "256", "displayName": "minimum Quorum For Proposals", "template": "elements_input_uint" }, { "name": "minutesForDebate", "type": "uint256", "typeShort": "uint", "bits": "256", "displayName": "minutes For Debate", "template": "elements_input_uint" }, { "name": "marginOfVotesForMajority", "type": "int256", "typeShort": "int", "bits": "256", "displayName": "margin Of Votes For Majority", "template": "elements_input_int" } ], "name": "changeVotingRules", "outputs": [], "type": "function", "displayName": "change Voting Rules" }, { "constant": false, "inputs": [ { "name": "proposalNumber", "type": "uint256", "typeShort": "uint", "bits": "256", "displayName": "proposal Number", "template": "elements_input_uint" }, { "name": "supportsProposal", "type": "bool", "typeShort": "bool", "bits": "", "displayName": "supports Proposal", "template": "elements_input_bool" }, { "name": "justificationText", "type": "string", "typeShort": "string", "bits": "", "displayName": "justification Text", "template": "elements_input_string" } ], "name": "vote", "outputs": [ { "name": "voteID", "type": "uint256" } ], "type": "function", "displayName": "vote" }, { "constant": true, "inputs": [ { "name": "proposalNumber", "type": "uint256", "typeShort": "uint", "bits": "256", "displayName": "proposal Number", "template": "elements_input_uint", "value": "" }, { "name": "beneficiary", "type": "address", "typeShort": "address", "bits": "", "displayName": "beneficiary", "template": "elements_input_address", "value": "" }, { "name": "etherAmount", "type": "uint256", "typeShort": "uint", "bits": "256", "displayName": "ether Amount", "template": "elements_input_uint", "value": "" }, { "name": "transactionBytecode", "type": "bytes", "typeShort": "bytes", "bits": "", "displayName": "transaction Bytecode", "template": "elements_input_bytes", "value": "" } ], "name": "checkProposalCode", "outputs": [ { "name": "codeChecksOut", "type": "bool", "value": false, "displayName": "code Checks Out" } ], "type": "function", "displayName": "check Proposal Code" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address", "typeShort": "address", "bits": "", "displayName": "new Owner", "template": "elements_input_address" } ], "name": "transferOwnership", "outputs": [], "type": "function", "displayName": "transfer Ownership" }, { "inputs": [ { "name": "minimumQuorumForProposals", "type": "uint256", "typeShort": "uint", "bits": "256", "displayName": "minimum Quorum For Proposals", "template": "elements_input_uint", "value": "" }, { "name": "minutesForDebate", "type": "uint256", "typeShort": "uint", "bits": "256", "displayName": "minutes For Debate", "template": "elements_input_uint", "value": "10000" }, { "name": "marginOfVotesForMajority", "type": "int256", "typeShort": "int", "bits": "256", "displayName": "margin Of Votes For Majority", "template": "elements_input_int", "value": "" }, { "name": "congressLeader", "type": "address", "typeShort": "address", "bits": "", "displayName": "congress Leader", "template": "elements_input_address", "value": "" } ], "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "proposalID", "type": "uint256" }, { "indexed": false, "name": "recipient", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }, { "indexed": false, "name": "description", "type": "string" } ], "name": "ProposalAdded", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "proposalID", "type": "uint256" }, { "indexed": false, "name": "position", "type": "bool" }, { "indexed": false, "name": "voter", "type": "address" }, { "indexed": false, "name": "justification", "type": "string" } ], "name": "Voted", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "proposalID", "type": "uint256" }, { "indexed": false, "name": "result", "type": "int256" }, { "indexed": false, "name": "quorum", "type": "uint256" }, { "indexed": false, "name": "active", "type": "bool" } ], "name": "ProposalTallied", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "member", "type": "address" }, { "indexed": false, "name": "isMember", "type": "bool" } ], "name": "MembershipChanged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "minimumQuorum", "type": "uint256" }, { "indexed": false, "name": "debatingPeriodInMinutes", "type": "uint256" }, { "indexed": false, "name": "majorityMargin", "type": "int256" } ], "name": "ChangeOfRules", "type": "event" } ]
    };

    dogeDAOContract = web3.eth.contract(dogeDAO.abi).at(dogeDAO.address);

    let delay = 1000 * 60 * 5; // 5 minutes
    getContractData();
    Meteor.setInterval( getContractData, delay )

});


function getContractData() {
    console.log('getting contract data');

    const members = () => {
        let moreMembers = true;
        let members = [];
        let count = 0;
        while(moreMembers) {
            try {
                members.push(dogeDAOContract.members.call(count++)[2]);
            } catch (e) {
                moreMembers = false;
            }
        }

        return members.filter( member => member.length > 0 );
    };

    const proposals = () => {
        let numProposals = +dogeDAOContract.numProposals.call().toString(10);
        let range = _.range(1,numProposals);
        return range.map( num => {
            let prop = dogeDAOContract.proposals.call(num);
            let name = prop[2];
            let executed = prop[4];

            return {
                name: name,
                executed: executed
            }

        });
    };

    let contractData = {
        balance : web3.fromWei(web3.eth.getBalance(dogeDAO.address),'ether').toString(10),

        members : members(),

        proposals : proposals(),

        key: 'muchwow'
    };

    Contracts.upsert(
        { key: 'muchwow' },
        contractData
    );
}