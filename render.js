const Renderer = function(){
    const createCommentsList = function(comments){
        let members =""
        for(let c of comments){
            members+=`<div class="comment" data-id=${c.id}><span class="delete-comment">X</span> ${c.text} </div>`
        }
       let list = `<div id="comments">${members}</div>`
        return list
    }
    const renderPosts = function(posts){
        $("#posts").empty()
        for(let post of posts){
            let comments = createCommentsList(post.comments)
            let p = `<div class="post" data-id=${post.id}>${post.text}
            ${comments}
            <input type="text" placeHolder="Got something to say?"/>
            <button class="add">Comment</button>
            <div><button class="delete">Delete Post</button></div>
            </div>`
            $("#posts").append(p)


        }
    }

    return {renderPosts}
}