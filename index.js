//---------------SERVICES TOGGLE
const servicesButtons = document.querySelectorAll('.service__item');
const serviceDetails = document.querySelector('.services__right');


const getService = (category) => {
    const details = servicesData.find(item => item.category === category);
    serviceDetails.innerHTML = `
        <h3>${details.title}</h3>
        ${details.description.map(paragraph => "<p>" + paragraph + "</p>").join('')}
    `
}

const removeActiveclass = () => {
    servicesButtons.forEach(button => {
        button.classList.remove('active');
    })
}

servicesButtons.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveclass();
        const serviceClass = item.classList[1];
        getService(serviceClass)
        item.classList.add('active')
    })
})

getService('frontend')





//------------MIXITUP--------------
const containerEl = document.querySelector('.projects__container')
var mixer = mixitup(containerEl, {
    animation: {
        enable: false
    }
});

mixer.filter('*');








//---------------NAV TOGGLE(small screens)-------------
const navMenu = document.querySelector('.nav__menu')
const navOpenBtn = document.querySelector('.nav__toggle-open')
const navCloseBtn = document.querySelector('.nav__toggle-close')

const openNavHandler = () => {
    navMenu.style.display = 'flex';
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'inline-block';
}


const closeNavHandler = () => {
    navMenu.style.display = 'none';
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none';
}

navOpenBtn.addEventListener('click', openNavHandler)

navCloseBtn.addEventListener('click', closeNavHandler)


// close nav menu on click of nev link on small screens

const navItems = navMenu.querySelectorAll('a');

if(window.innerWidth < 768) {
    navItems.forEach(item => {
        item.addEventListener('click', closeNavHandler)
    })
}



//-----------THEME TOGGLE (light and dark mode)

const themeBtn = document.querySelector('.nav__theme-btn');
themeBtn.addEventListener('click', () => {
    let bodyclass = document.body.className;
    if(!bodyclass) {
        bodyclass = 'dark';
        document.body.className = bodyclass;

        //change toggle icon
        themeBtn.innerHTML = "<i class='uil uil-sun'></i>"

        //save theme to local storage
        window.localStorage.setItem('theme', bodyclass);
    }
    else {
        bodyclass = '';
        document.body.className = bodyclass;
        //change toggle icon
        themeBtn.innerHTML = "<i class='uil uil-moon'></i>"

        //save theme to local storage
        window.localStorage.setItem('theme', bodyclass);
    }
})

//load theme on load
window.addEventListener('load', () => {
    document.body.className = window.localStorage.getItem('theme');
})
