import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import {Container,Header, Menu, Grid, Table, Icon, Button} from 'semantic-ui-react';

class AdminDisplayContent extends Component {
    constructor(props){
        super(props);
        this.state = { 
            activeItem: 'content',
        }
    }

    render(){
        return(
            <div>
            <div style={{overflow:'auto' }}>
            <Table inverted celled singleLine>

                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Studio</Table.HeaderCell>
                    <Table.HeaderCell>Runtime</Table.HeaderCell>
                    <Table.HeaderCell>Critic Rating</Table.HeaderCell>
                    <Table.HeaderCell>User Rating</Table.HeaderCell>
                    <Table.HeaderCell>Box Office</Table.HeaderCell>
                    <Table.HeaderCell>Director Id</Table.HeaderCell>
                    <Table.HeaderCell>Writer Id</Table.HeaderCell>
                    <Table.HeaderCell>In Theaters</Table.HeaderCell>
                    <Table.HeaderCell>Poster</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                <Table.Row>
                    <Table.Cell>John Lilki</Table.Cell>
                    <Table.Cell>John Lilki</Table.Cell>
                    <Table.Cell>John Lilki</Table.Cell>
                    <Table.Cell>John Lilki</Table.Cell>
                    <Table.Cell>John Lilki</Table.Cell>
                    <Table.Cell>John Lilki</Table.Cell>
                    <Table.Cell>John Lilki</Table.Cell>
                    <Table.Cell>John Lilki</Table.Cell>
                    <Table.Cell>John Lilki</Table.Cell>
                    <Table.Cell>September 14, 2013</Table.Cell>
                    <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                    <Table.Cell>No</Table.Cell>
                    <Table.Cell>John Lilkohn Lilkohn Lilkohn Lilkohn Lilkohn Lilkohn Lilkohn Lilkohn Lilkohn Lilkohn Lilkohn Lilki</Table.Cell>
                </Table.Row>
                </Table.Body>

                <Table.Footer >
                    <Table.HeaderCell colSpan='13'>
                    
                    </Table.HeaderCell>
                </Table.Footer>
            </Table>
            </div>
            </div>


        )
    }



}
export default AdminDisplayContent;