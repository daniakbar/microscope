Template.postEdit.events({
    'submit form': function(e){
        e.preventDefault();

        var idPostinganEdit = this._id;

        var propertiPost =  {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        };

        Posts.update(idPostinganEdit, {$set: propertiPost}, function(error){
            if (error){
                // Tampilkan error kepada user
                alert(error.reason);
            } else{
                Router.go('postPage', {_id: idPostinganEdit});
            }
        });
    },
    // Masih di Submit Form
    'click .delete': function(e){
        e.preventDefault();

        if (confirm("Delete this post?")){
            var idPostinganEdit = this._id;
            Posts.remove(idPostinganEdit);
            Router.go('postsList');
        }
    }
});