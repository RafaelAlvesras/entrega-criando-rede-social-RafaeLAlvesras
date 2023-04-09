export function renderModal(id, array) {

    const idFound = array.find((element) => element.id === +(id))

    const modalController = document.querySelector(".modalController")
    const modalContainer = document.createElement("div")
    const divFirstModal = document.createElement("div")
    const divProfileModal = document.createElement("div")
    const buttonCloseModal = document.createElement("p")
    const profileImgModal = document.createElement("img")
    const divNameModal = document.createElement("div")
    const namePostModal = document.createElement("h2")
    const StackPostModal = document.createElement("p")
    const titlePostModal = document.createElement("h1")
    const textPostModal = document.createElement("p")

    modalController.appendChild(modalContainer)
    modalContainer.append(divFirstModal, titlePostModal, textPostModal, buttonCloseModal)
    divFirstModal.append(divProfileModal)
    divProfileModal.append(profileImgModal, divNameModal)
    divNameModal.append(namePostModal, StackPostModal)

    modalContainer.classList.add("modalContainer")
    divFirstModal.classList.add("divFirstModal")
    divProfileModal.classList.add("divProfileModal")
    buttonCloseModal.classList.add("closeBtn")
    profileImgModal.classList.add("profileImgModal")
    divNameModal.classList.add("divNameModal")
    namePostModal.classList.add("namePostModal")
    StackPostModal.classList.add("StackPostModal")
    titlePostModal.classList.add("titlePostModal")
    textPostModal.classList.add("textPostModal")

    profileImgModal.src = idFound.img
    profileImgModal.alt = idFound.user
    buttonCloseModal.innerText = "x"
    namePostModal.innerText = idFound.user
    StackPostModal.innerText = idFound.stack
    titlePostModal.innerText = idFound.title
    textPostModal.innerText = idFound.text

    buttonCloseModal.addEventListener("click", () => {
    
        modalController.close()

    })

    return modalContainer
}

export function renderNewPostModal(post) {

    const modalController = document.querySelector(".modalController")
    const modalContainer = document.createElement("div")
    const divFirstModal = document.createElement("div")
    const divProfileModal = document.createElement("div")
    const buttonCloseModal = document.createElement("p")
    const profileImgModal = document.createElement("img")
    const divNameModal = document.createElement("div")
    const namePostModal = document.createElement("h2")
    const StackPostModal = document.createElement("p")
    const titlePostModal = document.createElement("h1")
    const textPostModal = document.createElement("p")

    modalController.appendChild(modalContainer)
    modalContainer.append(divFirstModal, titlePostModal, textPostModal)
    divFirstModal.append(divProfileModal, buttonCloseModal)
    divProfileModal.append(profileImgModal, divNameModal)
    divNameModal.append(namePostModal, StackPostModal)


    modalContainer.classList.add(".modalContainer")
    divFirstModal.classList.add(".divFirstModal")
    divProfileModal.classList.add(".divProfileModal")
    buttonCloseModal.classList.add("closeBtn")
    profileImgModal.classList.add(".profileImgModal")
    divNameModal.classList.add(".divNameModal")
    namePostModal.classList.add(".namePostModal")
    StackPostModal.classList.add(".StackPostModal")
    titlePostModal.classList.add(".titlePostModal")
    textPostModal.classList.add(".textPostModal")

    profileImgModal.src = post.img
    profileImgModal.alt = post.user
    buttonCloseModal.innerText = "x"
    namePostModal.innerText = post.user
    StackPostModal.innerText = post.stack
    titlePostModal.innerText = post.title
    textPostModal.innerText = post.text

    
    buttonCloseModal.addEventListener("click", () => {
    
        modalController.close()

    })

    return modalContainer

}


