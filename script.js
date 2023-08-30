const username = document.querySelector(".username")
const password = document.querySelector(".password")
const loginBtn = document.querySelector(".form__button")
const popup = document.querySelector(".popup")
const popupInfo = document.querySelector(".popup__info")
const popupAllow = document.querySelector(".allow")
const closePopupIcon = document.querySelector(".popup__close")
const popupUsername = document.querySelector("#popup__username")
const passwordInfo = document.querySelector(".password-info")
const popupPassword = document.querySelector("#popup__password")
const wrongPasswordInfo = document.querySelector(".fa-circle-info")
const moreInfoPassword = document.querySelector(".wrong-password-info")
const moreInfoUsername = document.querySelector(".wrong-username-info")
const showPassword = document.getElementById("#showPassword")
const showPasswordInfo = document.querySelector(".show-password-info")

const showHidePassword = () => {
	if (password.type === "password") {
		password.type = "text"
	} else {
		password.type = "password"
	}
}
const closePopup = () => {
	popup.style.display = "none"
}

moreInfo = () => {
	moreInfoPassword.classList.add("show")
}
lessInfo = () => {
	moreInfoPassword.classList.remove("show")
}

const hasUpperCase = text => {
	if (/[A-Z]/.test(text)) {
		return true
	} else {
		return false
	}
}

const hidePopupInfo = item => {
	item.classList.remove("show")
}
const wrongUsernamePopup = () => {
	if (username.value === "") {
		popupUsername.classList.add("show")
		moreInfoUsername.textContent = "Enter a username"
	} else if (username.value.length < 3) {
		popupUsername.classList.add("show")
		moreInfoUsername.textContent = "Too short username"
	} else {
		hidePopupInfo(popupUsername)
	}
}

const wrongPasswordPopup = () => {
	if (password.value === "") {
		popupPassword.classList.add("show")
		passwordInfo.textContent = "Enter a password"
	} else if (password.value.length <= 9) {
		popupPassword.classList.add("show")
		passwordInfo.textContent = "Too short password"
	} else if (!hasUpperCase(password.value) && password.value.length > 9) {
		popupPassword.classList.add("show")
		passwordInfo.textContent = "You need a big letter"
	}
	 else {
		hidePopupInfo(popupPassword)
	}
}


const showPopup = () => {
	popup.style.display = "flex"
	popupAllow.style.display = "flex"
	password.value = ""
	username.value = ""
	if ((popup.style.display = "flex")) {
		hidePopupInfo(popupPassword)
		hidePopupInfo(popupUsername)
	}
}

const login = event => {
	event.preventDefault()

	if (
		username.value.length >= 3 &&
		password.value.length > 10 &&
		/[A-Z]/.test(password.value)
	) {
		showPopup()
	} else {
		wrongUsernamePopup()
		wrongPasswordPopup()
	}
}



loginBtn.addEventListener("click", login)
closePopupIcon.addEventListener("click", closePopup)
wrongPasswordInfo.addEventListener("mouseover", moreInfo)
wrongPasswordInfo.addEventListener("mouseout", lessInfo)
