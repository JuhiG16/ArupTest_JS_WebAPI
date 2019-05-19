import React, { Component } from 'react';
import * as Services from '../services/httpservices';

class BODY extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        candidate: {},
        slectedPosId: 0,
        positions: [],
        isLoaded: false,
        errorMessage : ""
    }
    async componentWillMount() {
        let pos = await Services.getPositions();
        this.setState({ positions: pos, isLoaded: true })
    }

    render() {
       
        if (this.state.errorMessage == "") {
            return (
                <div>
                    <div className="mt-4">
                        <select onChange={this.getSelectedPos.bind(this)} className="mb-3 form-control">
                            <option value="" selected disabled hidden>Select Position</option>
                            {this.state.positions.map((pos, key) => <option key={key}>{pos.name}</option>)}
                        </select>
                        <button className="btn btn-primary btn-lg" onClick={this.searchCandidates.bind(this)}>search</button>
                    </div>

                    <table className="table table-primary mt-5">
                        <thead>
                            <tr>
                                <th>Candidate Id</th>
                                <th>Skills</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.candidate.candidateId}</td>
                                <td>{this.state.candidate.skills}</td>
                                <td>{this.state.candidate.name}</td>
                                <td>{this.state.candidate.email}</td>
                                <td>{this.state.candidate.phone}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
        else {
            return (
                <div>
                    <h1>Candidate not found</h1>
                    <button className="btn btn-primary" onClick={this.goBack.bind(this)}>Go back</button>
                </div>
            );
        }
    }

    getSelectedPos(event) {
        let posId = this.state.positions.find(p => p.name == event.target.value).positionId;
        this.setState({ slectedPosId: posId })
    }
    async searchCandidates() {
       
        let cand = await Services.getCandidatebyPosId(this.state.slectedPosId);
        console.log(cand);
        if (cand.success) {
            this.setState({
                candidate: cand,
                isLoaded: true
            })
        }
        else {
            this.setState({ isLoaded: false, errorMessage : cand.message })
        }
    }
    goBack() {
        this.setState({ isLoaded: false, errorMessage: ""})
    }
}

export default BODY;