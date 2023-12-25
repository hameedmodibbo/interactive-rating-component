const list = document.querySelector('ul');
const li = document.querySelectorAll('li');
const submitBtn = document.querySelector('.submit');
const imgStar = document.querySelector('.starTop');
const p = document.querySelector('.para');
const heading = document.querySelector('.heading');
const cardContainer = document.querySelector('.card-container');
    

//rating functionality

let activeRating = 0;

document.addEventListener('DOMContentLoaded', function () {
    const ratingContainer = document.getElementById('numbers');
    const stars = ratingContainer.querySelectorAll('.star');
    stars.forEach(star => {
      star.addEventListener('click', function () {
        const value = this.dataset.value;
        // Reset all stars to inactive
        stars.forEach(s => s.classList.remove('active'));
  
        // Activate selected stars
        for (let i = 0; i < value; i++) {
          stars[i].classList.add('active');
          const value = stars[i].dataset.value;
          activeRating = `you selected ${value} out of ${stars.length}`;
        }
      });
  
      star.addEventListener('mouseover', function () {
        const value = this.dataset.value;
  
        // Highlight stars on hover
        for (let i = 0; i < value; i++) {
          stars[i].classList.add('hover');
        }
      });
  
      star.addEventListener('mouseout', function () {
        // Remove hover effect
        stars.forEach(s => s.classList.remove('hover'));
      });
    });
  });



submitBtn.addEventListener('click', ()=>{

    cardContainer.removeChild(list);
    const ptext = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';
    p.textContent = ptext;
    heading.textContent = 'Thank You!';
    heading.style.textAlign = 'center';
    heading.style.color = '';
    p.style.textAlign = 'center';
    submitBtn.style.opacity = '0';
    cardContainer.removeChild(submitBtn);


    //illustration image
    const illustration = document.createElement('img');
    illustration.src = 'illustration-thank-you.svg';
    illustration.className = 'illustration';
    // cardContainer.appendChild(illustration);
    cardContainer.insertBefore(illustration, heading)
    illustration.style.transform = 'translate(50px, 20px)';

    cardContainer.removeChild(imgStar);
    heading.style.marginTop = '2rem';
    const h4 = document.createElement('h4');
    h4.className = 'span';
    h4.textContent = activeRating;
    cardContainer.insertBefore(h4, p);
    console.log(h4);
});

