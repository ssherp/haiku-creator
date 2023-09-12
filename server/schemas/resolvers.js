const { User} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const resolvers = {
    Query: {
      user: async (parent, args, context) => {
        if (context.user) {
          return await User.findOne({ _id: context.user._id });
        }
        throw AuthenticationError;
      },
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
          const user = await User.create({ username, email, password });
          const token = signToken(user);
    
          return { token, user };
        },
        login: async (parent, { email, password }) => {
          const user = await User.findOne({ email });
    
          if (!user) {
            throw AuthenticationError;
          }
    
          const correctPw = await user.isCorrectPassword(password);
    
          if (!correctPw) {
            throw AuthenticationError;
          }
    
          const token = signToken(user);
          return { token, user };
        },

        saveHaiku: async (parent, { haikuText,createdAt,image}, context) => {
            if (context.user) {
              return await User.findOneAndUpdate(
                { _id: context.user._id },
                {
                  $addToSet: { savedHaikus: {haikuText,createdAt,image} },
                },
                {
                  new: true,
                  runValidators: true,
                }
              );
            }
            throw AuthenticationError;
          },

          removeHaiku: async (parent, {bookId}, context) => {
            if (context.user) {
              return await User.findOneAndUpdate(
                { _id: context.user._id },
                {
                  $pull: { savedHaikus: {_Id} },
                },
                {
                  new: true,
                  runValidators: true,
                }
              );
            }
            throw AuthenticationError;
          },

}

}



module.exports = resolvers;