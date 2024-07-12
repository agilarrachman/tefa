window.addEventListener('scroll', function() {
    var contentRight = document.querySelector('#kabar-lain');
    var footer = document.querySelector('footer');
    var footerOffset = footer.offsetTop;
    var contentRightHeight = contentRight.offsetHeight;
    var windowHeight = window.innerHeight;
    var scrollPosition = window.pageYOffset + windowHeight;
if(window.innerWidth >= 1000) {
    if (scrollPosition >= footerOffset) {
        var distanceFromFooter = scrollPosition - footerOffset;
        var maxScroll = windowHeight + contentRightHeight;

        if (distanceFromFooter <= maxScroll) {
            contentRight.style.transform = 'translateY(-' + distanceFromFooter + 'px)';
        } else {
            contentRight.style.transform = 'translateY(-' + maxScroll + 'px)';
        }
    } else {
        contentRight.style.transform = 'translateY(0)';
    }
} 
});

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var links = navbar.getElementsByTagName('a');
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrolled > 300) {
        navbar.classList.add('navbar-scrolled');
        for (var i = 0; i < links.length; i++) {
            links[i].classList.add('link-scrolled');
        }
    } else {
        navbar.classList.remove('navbar-scrolled');
        for (var i = 0; i < links.length; i++) {
            links[i].classList.remove('link-scrolled');
        }
    }
});

$(document).ready(()=>{
    $('.menu-open').click(()=>{
        $('.menu-wrapper').addClass('active')
    })
    $(document).mouseup(function(e) {
        var container = $('.menu-wrapper');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          container.removeClass('active');
        }
    });
})

function showPopup() {
    var card = document.getElementById("popupCard");
    var overlay = document.getElementById("overlay");
    card.style.display = "block";
    overlay.style.display = "block";
}

function closePopup() {
    var card = document.getElementById("popupCard");
    var overlay = document.getElementById("overlay");
    card.style.display = "none";
    overlay.style.display = "none";
}