import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {router} from "./route";
//Apllo Client
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
  import 'react-toastify/dist/ReactToastify.css';
import App from './App';


//Endpoint
console.log(process.env.REACT_APP_API_URL, "here")
const client = new ApolloClient({
  uri: `http://ec2-65-2-184-135.ap-south-1.compute.amazonaws.com:4000/graphql`, // Replace this with your GraphQL endpoint
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client} >
    <React.StrictMode>
      <App/>
  </React.StrictMode>
  </ApolloProvider>
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
