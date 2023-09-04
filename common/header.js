const header = `
<div class="nav-left flex-div">
    <img src="../images/menu.png" class="menu-icon" />
    <img src="../images/logo.png" click="logo" />
</div>
<div class="nav-middle flex-div">
    <div class="search-box flex-div">
        <input type="text" placeholder="Search Here" />
        <img src="../images/search.png" />
    </div>
    <img src="../images/voice-search.png" class="mic-icon" />
</div>
<div class="nav-right flex-div">
    <img src="../images/upload.png" />
    <img src="../images/more.png" />
    <img src="../images/notification.png" />
    <img src="../images/Jack.png" class="user-icon" />
    ${JSON.parse(localStorage.getItem('profileDetails')).email !== '' ?
        `<p>${JSON.parse(localStorage.getItem('profileDetails')).email}</p>
        <button id="logoutBtn">Log Out</button>` :
        `<a href="signup.html" id="signUpId">Sign up</a>`}
</div>
`;

document.getElementsByTagName("nav")[0].innerHTML = header;

const logoutButton = document.getElementById('logoutBtn');

if (logoutButton) {
    logoutButton.addEventListener('click', () => {
       
        localStorage.removeItem('profileDetails'); // remove profiledetails from local storage
        window.location.href = 'login.html';
    });
}

// search suggestions






