const {User, Haiku} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const resolvers = {
    Query: {
      user: async (parent, args, context) => {
        if (context.user) {
          return await User.findOne({ _id: context.user._id });
        }
        throw AuthenticationError;
      },
      getHaikus: async (parent, args, context) => {
        if (context.user) {
          // Assuming your User schema has a field 'savedHaikus'
          return (await User.findOne({ _id: context.user._id })).savedHaikus;
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
        login: async (parent, { username, password }) => {
          const user = await User.findOne({ username });
    
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

        saveHaiku: async (parent, {line1,line2,line3,createdAt}, context) => {
            if (context.user) {
              const haiku = await Haiku.create({line1,line2,line3,createdAt});
              const user = await User.findOneAndUpdate(
                { _id:context.user._id },
                { $addToSet: { haikus: haiku._id } },
                { new: true }
              );
              return user
            //   return await User.findOneAndUpdate(
            //     { _id: context.user._id },
            //     {
            //       $set:{line1,line2,line3,createdAt},
            //     },
            //     {
            //       new: true,
            //       runValidators: true,
            //     }
            //   );
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