// Force page to scroll position 0,0 on load
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// Mouse over function (hover)
const mouseEnter = (hover, change, src) => {
    hover.addEventListener('mouseenter', () => {
        change.src = src;
    })
}

// Mouse over function (leave)
const mouseLeave = (hover, change, src) => {
    hover.addEventListener('mouseleave', () => {
        change.src = src;
    })
}

// Animation for greeting in header
let greet = document.querySelector('.greet');
let greetSub = document.querySelector('.greet_sub');
setTimeout(() => {
    greet.classList.add('fadeIn');
    setTimeout(() => {
        greetSub.classList.add('fadeIn');
    }, 1500)
}, 4000)

// Hover effect for "Profile" section
let profileImage = document.querySelector('.profile-image');
let profileSection = document.querySelector('.profile');
mouseEnter(profileSection, profileImage, "images/profile_picture_hover.gif");
mouseLeave(profileSection, profileImage, "images/profile_picture.png");

// Hover effect for "Skills" section
let skillsImage = document.querySelector('.skills-image');
let skillsSection = document.querySelector('.skills');
mouseEnter(skillsSection, skillsImage, "images/skills_image_hover.gif");
mouseLeave(skillsSection, skillsImage, "images/skills_image.gif");

// Hover effect for "Contact" section
let contactImage = document.querySelector('.contact-image');
let contactSection = document.querySelector('.contact');
mouseEnter(contactSection, contactImage, "images/contact_image_hover.gif");
mouseLeave(contactSection, contactImage, "images/contact_image.gif");

let randomUFO = document.querySelector('.ufo');
const callRandomUFO = () => {
    let randomY = Math.floor(Math.random() * window.innerHeight) + 1;
    let randomX = Math.floor(Math.random() * window.innerWidth) + 1;
    randomUFO.style.top = randomY + "px";
    randomUFO.style.left = randomX + "px";
    randomUFO.classList.toggle('ufo-show');
    let randomWidth = Math.floor(Math.random() * 12) + 15;
    randomUFO.style.width = `${randomWidth}px`;
    let randomDeg = Math.floor(Math.random() * 61) - 30;
    randomUFO.style.transform = `rotate(${randomDeg}deg)`
};

setInterval(callRandomUFO, 4000);