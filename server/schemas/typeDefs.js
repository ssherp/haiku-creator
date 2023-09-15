const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    haikus: [Haiku]
}
 type Haiku {
_id: ID
line1: String
line2: String
line3: String
createdAt: String
}

 type Auth {
    token: ID
    user: User
}
type Query {
    user:User
    getHaikus:[Haiku]
}

type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        saveHaiku(line1: String,line2: String,line3: String,createdAt:String): User
        removeHaiku(_id:ID!):User
      }   
`;

module.exports = typeDefs;