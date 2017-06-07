Posts = new Meteor.Collection('posts');

// Posts.allow({
//     insert: function(userId, doc) {
//         return !! userId;
//     }
// }); 

Meteor.methods({
    postInsert: function(postAttributes){
        check(this.userId, String);
        check(postAttributes, {
            title: String,
            url: String
        });

        if (Meteor.isServer){
            postAttributes.title += "(server)";
        } else{
            postAttributes.title += "(client)";
        }

        var jikaUrlSama = Posts.findOne({url: postAttributes.url});
        if (jikaUrlSama){
            return{
                postExists: true,
                _id: jikaUrlSama._id
            }
        }

        var user = Meteor.user();
        var post = _.extend(postAttributes,{
            userId: user._id,
            author: user.username,
            submitted: new Date()
        }); 

        var postId = Posts.insert(post);

        return{
            _id: postId
        };
    }
});