const userNameElem = document.querySelector('#name-input');
const showName = document.querySelector('#name-output')
userNameElem.addEventListener('input', () => {
    const value = userNameElem.value;

    if (value.trim().length>=1) {
        showName.textContent = value.trim();
    } else {
        showName.textContent = "Anonymous";
    }
}
)
    
