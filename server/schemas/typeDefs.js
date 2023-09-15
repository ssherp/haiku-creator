const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    haikus: [Haiku]
}
 type Haiku {
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
}

type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        saveHaiku(line1: String,line2: String,line3: String,createdAt:String): User
        removeHaiku(_id:ID!):User
      }   
`;

module.exports = typeDefs;