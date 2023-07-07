import { Outlet } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import { GoogleOAuthProvider } from '@react-oauth/google'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  ApolloLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { GOOGLE_CLIENT_ID } from 'utils/constants'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'grid',
      height: '100vh',
      width: '100vw',
      backgroundColor: 'white',
    },
  }),
  { name: 'AppContainer' }
)

const YELP_GRAPHQL_ENDPOINT_URL = 'https://api.yelp.com/v3/graphql'
const YELP_GRAPHQL_ENDPOINT_URL_CORS = `https://cors-anywhere.herokuapp.com/${YELP_GRAPHQL_ENDPOINT_URL}`
const YELP_API_KEY =
  'vktKJGA-11BHDZkdxDhYj1jduynFjggxlRG1BDEl3c3-F7EBkDDlhw0MY7d3JgZO4yl7BdDSwJ0gf3pQmIFcz7-5V_Fq3_Y5L6007bcGVqSKYUnqFjFMdW94cbWmZHYx'

const httpLink = createHttpLink({
  uri: YELP_GRAPHQL_ENDPOINT_URL_CORS,
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token') || YELP_API_KEY
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const noCorsLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token') || YELP_API_KEY
  operation.setContext(({ headers }: any) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      'Access-Control-Allow-Origin': '*',
    },
  }))
  return forward(operation)
})

const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  link: noCorsLink.concat(httpLink),
  cache: new InMemoryCache(),
})

// const client = new ApolloClient({
//   // uri: 'http://localhost:4000/graphql', // replace with your GraphQL server URI
//   uri: 'https://api.yelp.com/v3/graphql',
//   cache: new InMemoryCache(),
// })

export const AppContainer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <ApolloProvider client={client}>
          <Outlet />
        </ApolloProvider>
      </GoogleOAuthProvider>
    </div>
  )
}
