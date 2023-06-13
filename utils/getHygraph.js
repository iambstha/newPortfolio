import { GraphQLClient } from 'graphql-request'
const hygraph = new GraphQLClient(process.env.HYGRAPH_CONTENT_API)

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