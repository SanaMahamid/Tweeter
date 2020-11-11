const Tweeter = function(){
    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let postIdCounter = 2
    let commentIdCounter = 6
    let nextPostId = 3
    let nextCommentId = 7
    
    const getPosts = function(){
        return _posts
    }

    const addPost = function(text){
        postIdCounter++
        const comments = []
        let newPost = {text: text, id: "p" + nextPostId,comments: comments}
        _posts.push(newPost)
        nextPostId++
    }

    const findPostIndex = function(postID){
        for(let i=0;i<_posts.length;i++){
            if(_posts[i].id == postID){
                return i
            }
        }
        return -1
    }

    const removePost = function(postID){
        let index = findPostIndex(postID)
        commentIdCounter-=_posts[index].comments.length
        _posts.splice(index,1)
        postIdCounter--
    }

    const addComment = function(text,postId){
        let newComment = {id:"c" + nextCommentId, text: text}
        let index = findPostIndex(postId)
        _posts[index].comments.push(newComment) 
        commentIdCounter++
        nextCommentId++
    }

    const removeComment = function(postID,commentID){
        let i = findPostIndex(postID)
        let comments = _posts[i].comments
        for(let j=0;j<comments.length;j++){
            if(comments[j].id == commentID){
                comments.splice(j,1)
            }
        }
    }

    return {getPosts,addPost,removePost,addComment,removeComment}
}
/*const tweeter = Tweeter()

tweeter.addPost("This is my own post!")
console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.removePost("p1")
console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going
//============================
//============================

tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("Second the best!", "p2")
console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}*/


