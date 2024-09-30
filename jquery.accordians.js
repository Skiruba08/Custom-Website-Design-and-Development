$(document).ready(function() {
  // Accordion Toggle
  $('.accordian-header').click(function() {
      $(this).next().slideToggle();
      $(this).find('button').text(function() {
          return $(this).text() === "+" ? "-" : "+";
      });
  });
  
  $('.accordian-body').hide();

  // Media Page Tab Switching
  const tabButtons = document.querySelectorAll('.media-tab-button');
  const tabContents = document.querySelectorAll('.media-tab-content');

  tabButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active'));

          button.classList.add('active');
          tabContents[index].classList.add('active');
      });
  });

  // Slick Carousel
  $('.image-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true
  });

  
  
});




const form = $('.contact-form');
form.on('submit', function(event) {
    event.preventDefault();

    const name = $('#name');
    const email = $('#email');
    const content = $('#content');

    if (name.val().trim() === '') {
        alert('Please enter your name.');
        name.focus();
        return;
    }

    if (email.val().trim() === '') {
        alert('Please enter your email address.');
        email.focus();
        return;
    }

    if (content.val().trim() === '') {
        alert('Please enter your message.');
        content.focus();
        return;
    }

    form.off('submit').submit();
});



function loadDoc() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'assignment4.txt', true);
  xhr.onload = function() {
      if (this.status === 200) {
          document.getElementById("demo").innerHTML = this.responseText;
      } else {
          console.error(`Error: ${this.status} - ${this.statusText}`);
      }
  };
  xhr.send();
}