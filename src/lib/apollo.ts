import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4ouifph11sm01yw86w91uoi/master',
    cache: new InMemoryCache()

})