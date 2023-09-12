const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    haikus: [Haiku]
}
 type Haiku {
haikuText: String
createdAt: String
 image: String}

 type Auth {
    token: ID
    user: User
}
type Query {
    user:User
}

type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveHaiku(haikuText:String,createdAt:String,image:String): User
        removeHaiku(_id:ID!):User
      }   
`;

module.exports = typeDefs;