import { users, suggestUsers, posts } from "./database.js"
import { renderModal, renderNewPostModal} from "./modal.js"

function renderUserMain(list) {


    list.forEach((element) => {
        if (element.id == 1) {
            const userMain = document.querySelector(".user__Main")
            const userMainProfile = document.createElement("img")
            const userMainDiv = document.createElement("div")
            const userMainName = document.createElement("h1")
            const userMainStack = document.createElement("p")

            userMain.append(userMainProfile, userMainDiv)
            userMainDiv.append(userMainName, userMainStack)

            userMainProfile.src = element.img
            userMainProfile.alt = element.user
            userMainName.innerText = element.user
            userMainStack.innerText = element.stack

            userMainDiv.classList.add("user__mainDiv")
            userMainName.classList.add("userMainName")
            userMainStack.classList.add("userMainStack")
        }
    })

}


function renderSuggestUsers(list) {

    const suggestList = document.querySelector(".suggestUsersList")

    list.forEach((element) => {
        const suggestUserLi = document.createElement("li")
        const suggestProfDiv = document.createElement("div")
        const suggestNameDiv = document.createElement("div")
        const followDiv = document.createElement("div")
        const followButton = document.createElement("img")
        const userPhoto = document.createElement("img")
        const userName = document.createElement("h1")
        const userStack = document.createElement("p")

        suggestList.appendChild(suggestUserLi)
        suggestUserLi.append(suggestProfDiv, followDiv)
        followDiv.appendChild(followButton)
        suggestProfDiv.append(userPhoto, suggestNameDiv)
        suggestNameDiv.append(userName, userStack)

        userPhoto.src = element.img
        userPhoto.alt = element.user
        userName.innerText = element.user
        userStack.innerText = element.stack
        followButton.src = "./src/assets/img/btnFollowWhite.jpg"

        suggestUserLi.classList.add("suggestUserLi")
        suggestProfDiv.classList.add("suggestProfDiv")
        followDiv.classList.add("followDiv")
        followButton.classList.add("followButtonOne")
        userPhoto.classList.add("userPhoto")
        suggestNameDiv.classList.add("suggestNameDiv")
        userName.classList.add("userSuggestName")
        userStack.classList.add("userSuggestStack")

        followButton.addEventListener("click", () => {
            followButton.classList.toggle("followButton")

            if (followButton.classList.contains("followButton")) {
                followButton.src = "./src/assets/img/btnFollowBlue.jpg"
            } else {
                followButton.src = "./src/assets/img/btnFollowWhite.jpg"
            }
        })

    })

}

function renderPosts(list) {

    const postsList = document.querySelector(".postList")

    list.forEach((element) => {

        const divPost = document.createElement("div")
        const divProfile = document.createElement("div")
        const profilePhoto = document.createElement("img")
        const divNamePost = document.createElement("div")
        const namePost = document.createElement("h2")
        const StackPost = document.createElement("p")
        const titlePost = document.createElement("h3")
        const textPost = document.createElement("p")
        const divBtnLike = document.createElement("div")
        const buttonOpenPost = document.createElement("button")
        const likeDiv = document.createElement("div")
        const countLike = document.createElement("p")
        const likeBtn = document.createElement("img")
        const modalController = document.createElement("dialog")

        const textPostLmt = textLimited(element.text, 170)

        postsList.appendChild(divPost)
        divPost.append(divProfile, titlePost, textPost, divBtnLike, modalController)     
        divProfile.append(profilePhoto, divNamePost)
        divNamePost.append(namePost, StackPost)
        divBtnLike.append(buttonOpenPost, likeDiv)
        likeDiv.append(likeBtn, countLike)

        divPost.classList.add("divPost")
        divProfile.classList.add("divProfile")
        divNamePost.classList.add("divNamePost")
        namePost.classList.add("namePost")
        StackPost.classList.add("StackPost")
        divBtnLike.classList.add("divBtnLike")
        likeDiv.classList.add("likeDiv")
        titlePost.classList.add("titlePost")
        textPost.classList.add("textPost")
        buttonOpenPost.classList.add("buttonOpenPost")
        modalController.classList.add("modalController")
        likeBtn.id = "likeBtn"

        profilePhoto.src = element.img
        profilePhoto.alt = element.user
        namePost.innerText = element.user
        StackPost.innerText = element.stack
        
        titlePost.innerText = element.title
        textPost.innerText = textPostLmt
        
        buttonOpenPost.innerText = "Abrir Post"
        buttonOpenPost.dataset.postsId = element.id
        likeBtn.src = "./src/assets/img/Vector (3).png"
        countLike.innerText = element.likes

        buttonOpenPost.addEventListener("click", () => {

            const modalContent = renderModal(element.id , list )

            modalController.innerHTML = ""
            modalController.appendChild(modalContent)

            modalController.showModal()
        })
        

        likeBtn.addEventListener("click", () => {
            likeBtn.classList.toggle("likeBtn")

            if (likeBtn.classList.contains("likeBtn")) {
                likeBtn.src = "./src/assets/img/Vector (2).png"
                countLike.innerText = (element.likes) + 1
            } else {
                likeBtn.src = "./src/assets/img/Vector (3).png"
                countLike.innerText = element.likes
            }
        })

    })
}

function renderNewPost(post) {

    const postsList = document.querySelector(".postList")

    
        const divNewPost = document.createElement("div")
        const divProfile = document.createElement("div")
        const profilePhoto = document.createElement("img")
        const divNamePost = document.createElement("div")
        const namePost = document.createElement("h2")
        const StackPost = document.createElement("p")
        const titlePost = document.createElement("h3")
        const textPost = document.createElement("p")
        const divBtnLike = document.createElement("div")
        const buttonOpenPost = document.createElement("button")
        const likeDiv = document.createElement("div")
        const countLike = document.createElement("p")
        const likeBtn = document.createElement("img")
        const modalController = document.createElement("dialog")

        postsList.appendChild(divNewPost)
        divNewPost.append(divProfile, titlePost, textPost, divBtnLike, modalController)
        divProfile.append(profilePhoto, divNamePost)
        divNamePost.append(namePost, StackPost)
        divBtnLike.append(buttonOpenPost, likeDiv)
        likeDiv.append(likeBtn, countLike)

        divNewPost.classList.add("divPost")
        divProfile.classList.add("divProfile")
        divNamePost.classList.add("divNamePost")
        namePost.classList.add("namePost")
        StackPost.classList.add("StackPost")
        divBtnLike.classList.add("divBtnLike")
        likeDiv.classList.add("likeDiv")
        titlePost.classList.add("titlePost")
        textPost.classList.add("textPost")
        buttonOpenPost.classList.add("buttonOpenPost")
        modalController.classList.add("modalController")
        likeBtn.id = "likeBtn"

        profilePhoto.src = post.img
        profilePhoto.alt = post.user
        namePost.innerText = post.user
        StackPost.innerText = post.stack
        
        titlePost.innerText = post.title
        textPost.innerText = post.text
        
        buttonOpenPost.innerText = "Abrir Post"
        buttonOpenPost.id = post.id
        likeBtn.src = "./src/assets/img/Vector (3).png"
        countLike.innerText = post.likes

         buttonOpenPost.addEventListener("click", () => {
            
            const modalContent = renderNewPostModal(post)

            modalController.innerHTML = ""
            modalController.appendChild(modalContent)

            modalController.showModal()
        })
        

        likeBtn.addEventListener("click", () => {
            likeBtn.classList.toggle("likeBtn")

            if (likeBtn.classList.contains("likeBtn")) {
                likeBtn.src = "./src/assets/img/Vector (2).png"
                countLike.innerText = (element.likes) + 1
            } else {
                likeBtn.src = "./src/assets/img/Vector (3).png"
                countLike.innerText = element.likes
            }
        })
}

function createPost(array, list) {

    const inputPost = document.querySelector(".main__postInput")
    const textPost = document.querySelector(".main__postInputText")
    const buttonPost = document.querySelector(".postButton")

    buttonPost.addEventListener("click", () => {

        list.forEach((element) => {

            if (element.id == 1) {
                const newPost = {
                    id: array.length + 1,
                    title: inputPost.value,
                    text: textPost.value,
                    user: element.user,
                    stack: element.stack,
                    img: element.img,
                    likes: 0
                }
                array.unshift(newPost)
                      
                renderNewPost(newPost)
            }
        })
        inputPost.value = ""
        textPost.value = ""

    })}

    function textLimited(text, characters){
        let textPostLmt = ""

        for(let i = 0; i < characters; i++){
            textPostLmt += text[i]
        }
    
        let textPost = `${textPostLmt}...`
        
        return textPost
    }



renderPosts(posts)
renderUserMain(users)
renderSuggestUsers(suggestUsers)
createPost(posts, users)

