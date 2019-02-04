import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AddRecordForm from './AddRecordForm';


const GeneralStyles = styled.div`
    text-align: center;
`
const UserImg = styled.img`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width: 25vw;
height:35vh;
border:5px solid #4286f4;
`
const RecImg = styled.div `
display: flex;
flex-direction:row;
justify-content:center;
width:35vw;
color: #4286f4;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #4286f4;
border-radius: 3px;
display: block;
`
const RecContainer = styled.div `
display: flex;
flex-direction:row;
justify-content:center;
align-content: center;
width:62vw;
background-color:#55DBD9;
border: 5px solid #4286f4;

`

class RecordList extends Component {
    state = {
        records: [],
        addRecord: false
    }

    componentDidMount() {
        this.getRecords()
    }

    getRecords = async () => {
        const res = await axios.get(`/api/users/${this.props.userId}/records`)
        console.log(res.data)
        this.setState({records: res.data})
        console.log(this.state.records)
    }

    toggleAddRecordForm = () => {
        this.setState({ addRecord: !this.state.addRecord})
    }

    render() {
      


        return (
            <GeneralStyles>
                <h1>Add Some New Tunes Dudes!</h1>
                <button className="btn btn-secondary btn-sm" onClick={this.toggleAddRecordForm}>Add Record</button>
                {this.state.addRecord ? <AddRecordForm
                    getUsers={this.getUsers}
                    toggleAddRecordForm={this.toggleAddRecordForm}
                    userId= {this.props.userId}
                    /> : null}
                    <div>
                {this.state.records.map((record, i) => {
                    return (
                        <div key={i}>
                        <Link to={`/users/${record._id}`}>
                        </Link>
                        <RecContainer>
                        <UserImg src={record.img} alt="..."/>
                        <RecImg>
                        <h3>{record.title}</h3>
                        <h3>{record.band}</h3>
                        <h3>{record.genre}</h3>
                        <h3>${record.price}</h3>
                        </RecImg>
                        </RecContainer>
                    </div>
                    )
                }
                    
                )}
                </div>
            </GeneralStyles>
           
        );
    }
}

export default RecordList;