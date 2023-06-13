import { GraphQLClient } from 'graphql-request'
const hygraph = new GraphQLClient('https://api-ap-south-1.hygraph.com/v2/cliuejspy07x801up5ktf17uo/master')

const getHygraph = async () => {
    const response  = await hygraph.request(
        `{
            projects {
                id
                name
                description
                tags
                liveUrl
                sourceUrl
            }
          }`
    )
    return response
}

export default getHygraph