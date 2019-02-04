import React, { Component } from 'react';
import axios from 'axios'
import RecordList from './RecordList';
import AddUserEdit from './AddUserEdit';
import styled from 'styled-components'

const UserImg = styled.img`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width: 30vw;
    height:45vh;
    border:5px solid blue;
`
const RecList = styled.div `
display:flex;
flex-direction:column;
justify-content:right;
align-items:right;
width: 65vw;
border:5px solid blue;
`
const Container = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
align-items:right;
width: 100vw;
height:100vh;
border:5px solid yellow;
`
const InfoContainer = styled.div `
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width: 30vw;
height:30vh;
border:5px solid #4286f4;
`





class SingleUser extends Component {
    state = {
        user: {},
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = () => {
        axios.get(`/api/users/${this.props.match.params.userId}`)
        .then((res) => {
            this.setState({ user: res.data })
            console.log("this one",this.state.user._id)
        })
    }

    deleteUser = () => {
        const userId = this.props.match.params.userId
        axios.delete(`/api/users/${userId}`)
            .then(() => this.props.history.goBack())
    }

    editUsers = () => {
        axios.get()
    }

    render() {
        console.log(this.props.match.params.userId)
        return (
            <div>
                <a class="nav-link active" href="/">Home</a>
                <Container><RecList><UserImg src={this.state.user.img} alt="..."/>      
                
                <InfoContainer>
                <span class="badge badge-pill badge-primary">{this.state.user.name}</span>
                <span class="badge badge-pill badge-primary">{this.state.user.username}</span>
                <span class="badge badge-pill badge-primary">{this.state.user.email}</span>
                </InfoContainer>
                </RecList>
                <RecordList
                userId={this.props.match.params.userId}
                />
              </Container>
        
                <AddUserEdit 
                userId={this.props.match.params.userId}
                history={this.props.history}   
                getUsers={this.getUsers}             
                />
                <div><button onClick={this.deleteUser}>Delete User</button></div>
            </div>
            
        );
    }
}

export default SingleUser;