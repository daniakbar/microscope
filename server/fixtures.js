if (Posts.find().count() === 0){
    Posts.insert({
        title:'Introducing Telescope',
        author: 'Dani Akbar',
        url: 'http://rmsiangmalam.com'
    });

    Posts.insert({
        title:'Mastering Meteor',
        author: 'Tom Coleman',
        url: 'http://meteor.com'
    });
    Posts.insert({
        title: 'The Meteor Book',
        title: 'Tom Coleman',
        url: 'http://themeteorbook.com'
    });
}