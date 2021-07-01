/**
 * Retrieves four inputs from user (first name, last name, email, password). Saves this information to local storage so that
 * this users information can be used to login from the {@link login.html} page. If user does not enter a value for one of
 * the inputs then message displays to user reporting of registration failure and prompts them to try again. If all inputs
 * are filled out at time of button click then information is saved to local storage and a successful message appears.
 *
 * @summary provides functionality for {@link signup.html} page.
 * @author Elijah Freeman <elijahff@uw.edu>
 *
 * Created      : 2021-01-05
 * Last Modified : 2021-01-12
 */

const registerButton = document.querySelector('button');

const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const username = document.querySelector('#username');

// const user = {};

async function registerUser() {
    const user = {
        first: firstName.value,
        last: lastName.value,
        email: email.value,
        password: password.value,
        username: username.value
    };

    let response = await fetch("/auth", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body : JSON.stringify(user)
    })

    if (response.ok) {
        let json = await response.json()
        document.querySelector('#failure-register').style.display = 'none';
        document.querySelector('#success-register').style.display = 'flex';
        console.log(json)
    } else {
        document.querySelector('#success-register').style.display = 'none';
        document.querySelector('#failure-register').style.display = 'flex';
        // alert("HTTP-ERROR: " + response.status);
        // let json = await response.json();
        // console.log(json)
    }

}

registerButton.addEventListener('click', () => {
    registerUser();
})


// registerButton.addEventListener('click', () => {
//     user.firstName = document.querySelector('#first-name').vsealue;
//     user.lastName = document.querySelector('#last-name').value;
//     user.email = document.querySelector('#email').value;
//     user.password = document.querySelector('#password').value;
//
//     document.querySelector('#first-name').value = '';
//     document.querySelector('#last-name').value = '';
//     document.querySelector('#email').value = '';
//     document.querySelector('#password').value = '';
//
//     if (user.firstName && user.lastName && user.email && user.password) {
//         localStorage.setItem(`${user.email}`, JSON.stringify(user));
//
//         document.querySelector('#failure-register').style.display = 'none';
//         document.querySelector('#success-register').style.display = 'flex';
//
//         console.log({user});
//     } else {
//         document.querySelector('#success-register').style.display = 'none';
//         document.querySelector('#failure-register').style.display = 'flex';
//     }
// })