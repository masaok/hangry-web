import { useQuery, gql } from '@apollo/client'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  theme => ({
    root: {
      backgroundColor: 'lightblue', // this works
    },
  }),
  { name: 'YelpGraphQLDemo' }
)

const GET_USERS = gql`
  query MyQuery {
    search(location: "90045") {
      total
      business {
        alias
        location {
          address1
          city
          postal_code
        }
      }
    }
  }
`

export const YelpGraphQLDemo = () => {
  const classes = useStyles()

  const { loading, error, data } = useQuery(GET_USERS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return data.search.business.map(({ alias }: any, index: number) => (
    <div key={index}>
      <p>{alias}</p>
    </div>
  ))
}
