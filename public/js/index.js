const loginButton = document.querySelector('.login-btn');
const joinContainer = document.querySelector('.join-container');

joinContainer.style.display = 'block';
setTimeout(function(){
    joinContainer.style.opacity = 100;
}, 500)

// loginButton.addEventListener('click', function (e) {
//     // joinContainer.style.display = 'none';
//     e.preventDefault();
//     console.log(e);
//     joinContainer.style.opacity = 0;
//     setTimeout(function(){
//         return window.location.href = "chat.html";
//     }, 1000)
// })

