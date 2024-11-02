import React, { useState } from 'react'
import { useQuery, gql, useLazyQuery, useMutation } from '@apollo/client';

const QUERY_ALL_USERS = gql`
    query GetUsers{
        users {
            id
            name
            age
            username
        }
}
`;

const QUERY_ALL_ITEMS = gql`
    query GetItems{
        items {
            id
            name
            description
            cost
        }
}
`;

const QUERY_GET_ITEM_BY_NAME = gql`
    query Item($name: String!) {
        item(name: $name) {
            name
            description
            cost
        }
    }
`;

const CREATE_USER_MUTATION = gql`
    mutation CretaeUser($input: CreateUserInput!) {
        createUser(input: $input) {
            name
            id
        }
    }
`;

function DisplayData() {

    const [ itemSearch, setItem ] = useState('');
    const [ name, setName ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ age, setAge ] = useState('');
    const [ role, setRole ] = useState('');


    const { data, loading, error, refetch} = useQuery(QUERY_ALL_USERS);
    const { data: itemsData, loading: itemsLoading, error: itemsError } = useQuery(QUERY_ALL_ITEMS);
    const [
        fetchItem, 
        {data: itemSearchData, error: getItemError}] = useLazyQuery(QUERY_GET_ITEM_BY_NAME);
    const [createUser] = useMutation(CREATE_USER_MUTATION);

    const LoadingIndicator = loading && ( <h1>User Data is loading...</h1>);
    const ItemsLoadingIndicator = itemsLoading && ( <h1>Items Data is loading...</h1>);

    const UsersList = data && data.users && data.users.map((user, i) => {

        return (
            <div key={i}>
                <div>Name: {user.name}</div>
                <div>Username: {user.username}</div>
                <div>Age: {user.age}</div>

            </div>
        );
    });
    const CreateUserForm = (
        <div>
                <input 
                    type='text'
                    placeholder='name...'
                    onChange={(event) => {setName(event.target.value)}}
                />
                <input 
                    type='number'
                    placeholder='age.. '
                    onChange={(event) => {setAge(Number(event.target.value))}}
                 />
                <input 
                    type='text'
                    placeholder='username...'
                    onChange={(event) => {setUsername(event.target.value)}}
                />
                <input 
                    type='text'
                    placeholder='role...'
                    onChange={(event) => {setRole(event.target.value.toUpperCase())}}
                />
            <button onClick={() => {
                    createUser({
                        variables: { input: {name, username, age, role} },
                    });
                    refetch();
                }}
                >Create User</button>
            </div>
    );

    const ItemsList = itemsData && itemsData.items && itemsData.items.map((item, i) => {
    
        return (
            <div key={i}>
                <div>Name: {item.name}</div>
                <div>Description: {item.description}</div>
                <div>Cost: {item.cost}</div>
            </div>
        );
    });

    if (error) {
        console.log(`error: ${error}`);
    }

    if (itemsError) {
        console.log(`error: ${itemsError}`);
    }

    
    if (getItemError) {
        console.log(`error: ${getItemError}`);
    }

    return (
        <div>
            <h1>USERS:</h1>
            {CreateUserForm}
        <hr/>
            {LoadingIndicator}
            {UsersList}
        <hr/>
            <h1>ITEMS:</h1>
            {ItemsLoadingIndicator}
            {ItemsList}
        <hr/>
            <div>
                <input 
                    type='text'
                    placeholder=''
                    onChange={(event) => { setItem(event.target.value)}}
                />
                <button onClick={() => {
                    fetchItem({
                        variables: { name: itemSearch },
                    });
                    }}
                    >Fetch Item</button>
                <div>
                    {itemSearchData && itemSearchData.item ?
                        (
                        <div>
                            <div>Name: {itemSearchData.item.name}</div>
                            <div>Description: {itemSearchData.item.description}</div>
                            <div>Cost: {itemSearchData.item.cost}</div>
                        </div>
                        ) :  getItemError ? 
                        (  <div>Error Fetching the error</div>) :
                    (  <div>No Result</div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default DisplayData;