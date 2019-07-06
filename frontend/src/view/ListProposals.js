import React from "react";

const ListProposals = ({ proposals, onAnswerProposal }) => (
    <div>
        <h2>{ "Projects" }</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>From</th>
                    <th>Description</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    proposals.map((proposal, index) => (
                        <tr key={index}> 
                            <td>{proposal.investorUsername}</td>
                            <td>{proposal.description}</td>
                            <td><button onClick={() => onAnswerProposal("accept")}>Accept</button></td>
                            <td><button onClick={() => onAnswerProposal("decline")}>Decline</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
);

export default ListProposals;