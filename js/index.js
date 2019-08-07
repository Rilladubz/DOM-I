const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav = document.querySelectorAll('a');
// console.log(nav);
nav.forEach((navItem, i) => {
  navItem.textContent = siteContent["nav"][`nav-item-${i + 1}`];
  navItem.style.color='green'
});

const navLinkOne = document.createElement('a');
const navLinktwo = document.createElement('a');
navLinkOne.setAttribute('href', '#');
navLinktwo.setAttribute('href', '#');
navLinkOne.textContent = 'Item1';
navLinktwo.textContent = 'Item2';
// console.log(navLinkOne, navLinktwo);
const navigation = document.querySelector('.container header nav');
navigation.appendChild(navLinktwo);
navigation.prepend(navLinkOne);




const headerText = document.querySelector('.cta-text h1');
// console.log(headerText);
headerText.textContent = siteContent["cta"]["h1"];

const buttonText = document.querySelector('.cta-text button');
// console.log(buttonText);
buttonText.textContent = siteContent["cta"]["button"];

let ImgSrc = document.getElementById('cta-img');
// console.log(ImgSrc);
ImgSrc.setAttribute('src', siteContent["cta"]["img-src"]);
 
let bottomImg = document.getElementById("middle-img");
// console.log(bottomImg);
bottomImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// middle content
const h4s = document.querySelectorAll('.text-content h4');
// console.log(h4s);
let Arrayh4s = Array.from(h4s);
// console.log(Arrayh4s);
Arrayh4s[0].textContent = siteContent["main-content"]["features-h4"];
Arrayh4s[1].textContent = siteContent["main-content"]["about-h4"];
Arrayh4s[2].textContent = siteContent["main-content"]["services-h4"];
Arrayh4s[3].textContent = siteContent["main-content"]["product-h4"];
Arrayh4s[4].textContent = siteContent["main-content"]["vision-h4"];

const middleTextContent = document.querySelectorAll('.text-content p');
// console.log(middleTextContent);
let TextArray = Array.from(middleTextContent);
// console.log(TextArray);

TextArray[0].textContent = siteContent["main-content"]["features-content"];
TextArray[1].textContent = siteContent["main-content"]["about-content"];
TextArray[2].textContent = siteContent["main-content"]["services-content"];
TextArray[3].textContent = siteContent["main-content"]["product-content"];
TextArray[4].textContent = siteContent["main-content"]["vision-content"];

// |Contact
const contactH4 = document.querySelector('.contact h4');
// console.log(contactH4);
contactH4.textContent = siteContent["contact"]["contact-h4"];

const ContactInfo = document.querySelectorAll('.contact p');
// console.log(ContactInfo);
let ContactInfoArray = Array.from(ContactInfo);
// console.log(ContactInfoArray);

ContactInfoArray[0].textContent = siteContent["contact"]["address"];
ContactInfoArray[1].textContent = siteContent["contact"]["phone"];
ContactInfoArray[2].textContent = siteContent["contact"]["email"];

// footer
const footerContent = document.querySelector('footer p');
console.log(footerContent);
footerContent.textContent = siteContent["footer"]["copyright"];
























