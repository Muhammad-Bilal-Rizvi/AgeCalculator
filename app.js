

const date = document.querySelector('#date');

// const userBirthDate;

function getUserBirthDate() {
    console.log(date.value);
    const userBirthDate = new Date(date.value);
    userBirthDate.setFullYear(2006);
    console.log(userBirthDate);
}

const heading2 = document.querySelector('heading2');
heading2.innerHTML = userBirthDate;