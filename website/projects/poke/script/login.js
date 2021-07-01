/**
 * Retrieve two input values (username, password). When Login button is clicked, localStorage is checked to see if that
 * username is stored. If true, then display "success login" message. If false, convert button into a href link to
 * {@link signup.html}. If user wants to try again, then click either input field and button will revert back to login
 * button.
 *
 * @summary login.js handles all the interactive functionality for the {@link login.html} page.
 * @author Elijah Freeman <elijahff@uw.edu>
 *
 * Created      : 2021-01-05
 * Last Modified : 2021-01-12
 */

// const loginButton = document.querySelector('button');
// const user = {}
// const username = document.querySelector('#username');
// const password = document.querySelector('#password');
//
//
// async function sign_in() {
//
//     let encoded = username.value + ':' + password.value;
//
//
//     // let encoded = window.btoa($("#username").val() + ':' + $("#password").val())
//
//     // console.log($("#username").val() + ':' + $("#password").val())
//     console.log(encoded)
//
//
//     let response = await fetch("/auth",  {
//         method: 'GET',
//         headers: {
//             'Authorization': 'Basic ' + encoded
//         }
//     })
//
//
//     if (response.ok) { // if HTTP-status is 200-299
//         // get the response body (the method explained below)
//         let json = await response.json()
//         console.log(json)
//
//
//         if (json.success) {
//             document.querySelector('#login-failure').style.display = 'none';
//             document.querySelector('#login-success').style.display = 'flex';
//
//
//             // let b = $("<button>").text("Orders via Cookie")
//             // b.click(() => getOrdersFromCookie())
//
//
//             // let a = $("<a>").text("Order Link via Cookie")
//             // a.attr("href", "/cookie_orders")
//
//             // let b2 = $("<button>").text("Orders via Header")
//             // b2.click(() => getOrdersFromHeader(json.token))
//
//             // let del = $("<button>").text("Logout")
//             // del.click(() => deleteCookie())
//
//
//             // let ord = $("<button>").text('Place Order')
//             // ord.click(() => location.href='orders.html');
//
//             // $("#butt").after($("<br>"), b, a, $("<br>"), b2, $("<br>"), del, $("<br>"), ord)
//             // console.log(document.cookie)
//         }
//
//
//     } else {
//         console.log(encoded);
//         document.querySelector('#login-success').style.display = 'none';
//         document.querySelector('#login-failure').style.display = 'flex';
//         alert("HTTP-Error: " + response.status)
//         console.log(response.status)
//         let json = await response.json()
//         console.log(json)
//     }
// }
//
// loginButton.addEventListener('click', () => {
//     sign_in();
// })



async function sign_in() {


let encoded = window.btoa($("#username").val() + ':' + $("#password").val())

console.log($("#username").val() + ':' + $("#password").val())
console.log(encoded)

let response = await fetch("/auth",  {
    method: 'GET',
    headers: {
        'Authorization': 'Basic ' + encoded
    }
})
if (response.ok) { // if HTTP-status is 200-299
    // get the response body (the method explained below)
    let json = await response.json()
    console.log(json)

    if (json.success) {
        document.querySelector('#login-failure').style.display = 'none';
        document.querySelector('#login-success').style.display = 'flex';
        // let b = $("<button>").text("Orders via Cookie")
        // b.click(() => getOrdersFromCookie())
        // let a = $("<a>").text("Order Link via Cookie")
        // a.attr("href", "/cookie_orders")
        //
        // let b2 = $("<button>").text("Orders via Header")
        // b2.click(() => getOrdersFromHeader(json.token))
        //
        // let del = $("<button>").text("Logout")
        // del.click(() => deleteCookie())
        //
        //
        // let ord = $("<button>").text('Place Order')
        // ord.click(() => location.href='orders.html');
        //
        // $("#butt").after($("<br>"), b, a, $("<br>"), b2, $("<br>"), del, $("<br>"), ord)
        //
        // console.log(document.cookie)
    }
} else {
    document.querySelector('#login-success').style.display = 'none';
    document.querySelector('#login-failure').style.display = 'flex';
    alert("HTTP-Error: " + response.status)
    console.log(response.status)
    let json = await response.json()
    console.log(json)
}
}








async function getOrdersFromHeader(jwt) {
    console.log(jwt)
    let response = await fetch("/orders",  {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + jwt
        }
    })
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json()
        console.log(json)


    } else {
        alert("HTTP-Error: " + response.status)
        console.log(response.status)
        let json = await response.json()
        console.log(json)
    }
}








async function deleteCookie() {
    let response = await fetch("/cookie_orders",  {
        method: 'DELETE'
    })
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        // let json = await response.json()
        // console.log(json)
        location.href = 'signin.html';

    } else {
        location.href = 'signin.html';

        //alert("HTTP-Error: " + response.status)
        //console.log(response.status)
        //let json = await response.json()
        //console.log(json)
    }
}




//hello
async function getOrdersFromCookie() {
    let response = await fetch("/cookie_orders",  {
        method: 'GET'
    })
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json()
        console.log(json)


    } else {
        alert("HTTP-Error: " + response.status)
        console.log(response.status)
        let json = await response.json()
        console.log(json)
    }
}



$(document).ready(function(){
    $("#butt").click(sign_in)
})







//
// loginButton.addEventListener('click', () => {
//     // Retrieve username and password.
//     user.username = document.querySelector('#username').value;
//     user.password = document.querySelector('#password').value;
//
//     if (loginButton.innerText === 'Sign up') {
//         location.href = 'signup.html';
//     }
//     // compare username against local storage.
//     if (localStorage.getItem(`${user.username}`)) { // user present
//         document.querySelector('#login-failure').style.display = 'none';
//         document.querySelector('#login-success').style.display = 'flex';
//     } else { // user not present in local storage.
//         document.querySelector('#login-success').style.display = 'none';
//         document.querySelector('#login-failure').style.display = 'flex';
//         loginButton.innerText = 'Sign up';
//     }
// })
//
// // Input fields
// document.querySelector('#username').addEventListener('click', () => {
//     loginButton.innerText = 'Login';
// })
//
// document.querySelector('#password').addEventListener('click', () => {
//     loginButton.innerText = 'Login';
// })
