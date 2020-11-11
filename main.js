const tweeter = Tweeter()
const renderer = Renderer()

const post = function(){
    tweeter.addPost($("#input").val())
    $("#input").val("")
    renderer.renderPosts(tweeter.getPosts())
}

$("body").on("click",".delete",function(){
    tweeter.removePost($(this).closest(".post").data().id)
    renderer.renderPosts(tweeter.getPosts())
})

$("body").on("click",".add",function(){
    let text = $(this).closest(".post").find("input").val()
    let p = $(this).closest(".post").data().id
    tweeter.addComment(text,p)
    renderer.renderPosts(tweeter.getPosts())
})

$("body").on("click",".delete-comment",function(){
    let p = $(this).closest(".post").data().id
    let c = $(this).closest(".comment").data().id
    tweeter.removeComment(p,c)
    renderer.renderPosts(tweeter.getPosts())
})
renderer.renderPosts(tweeter.getPosts())