
const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');

var home = document.getElementById('home');
var service = document.getElementById('service');
var client = document.getElementById('Clints');
var about = document.getElementById('About');
var blog = document.getElementById('Blog');
var contact = document.getElementById('Contact');
home.addEventListener('click', function(){
    home.classList.add('active');
    service.classList.remove('active');
    blog.classList.remove('active'); 
    client.classList.remove('active');
    contact.classList.remove('active');
    about.classList.remove('active');
})
service.addEventListener('click', function(){
    service.classList.add('active'); 
    home.classList.remove('active');
    blog.classList.remove('active'); 
    client.classList.remove('active');
    contact.classList.remove('active');
    about.classList.remove('active');
})
client.addEventListener('click', function(){
    client.classList.add('active'); 
    home.classList.remove('active');
    service.classList.remove('active');
    blog.classList.remove('active'); 
    contact.classList.remove('active');
    about.classList.remove('active');
})
about.addEventListener('click', function(){
    about.classList.add('active'); 
    home.classList.remove('active');
    service.classList.remove('active');
    blog.classList.remove('active'); 
    client.classList.remove('active');
    contact.classList.remove('active');
})
blog.addEventListener('click', function(){
    blog.classList.add('active'); 
    home.classList.remove('active');
    service.classList.remove('active')
    client.classList.remove('active');
    about.classList.remove('active');
    contact.classList.remove('active');
})
contact.addEventListener('click', function(){
    contact.classList.add('active'); 
    home.classList.remove('active');
    service.classList.remove('active');
    client.classList.remove('active');
    about.classList.remove('active');
    blog.classList.remove('active');

})

const navHeight = navbar.getBoundingClientRect().height;  // calculate height

const stickyNav = function(entries){
    const [entry] = entries;
    // console.log(entry);
  
    if(!entry.isIntersecting) navbar.classList.add('sticky');

    else navbar.classList.remove('sticky');
  };
  
  const headObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: null,
    // rootMargin: '-90px', call culate height and use it 
    rootMargin: `${navHeight}px`, // this method not calculate because javascitp calculated heigt
  });
  
  // call a function 
  headObserver.observe(header);