
// burger menu slide . 
function showDetails(movieName) {
    alert("تفاصيل عن " + movieName);
}

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".MenuBtn");
    const slideMenu = document.querySelector(".SlideMenu");
  
    menuBtn.addEventListener("click", () => {
      slideMenu.classList.toggle("active");
    });
  });

  const menuBtn = document.querySelector('.MenuBtn');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  
  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
  });
  
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });

  // btn scroll to top 
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'flex'; // إظهار الزر عند التمرير لأسفل
    } else {
      scrollToTopBtn.style.display = 'none'; // إخفاء الزر عند الرجوع للأعلى
    }
  });

  // عند الضغط على الزر
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // حركة سلسة
    });
  });
// زززززززززززززززززززز 
// محتوي ديناميكي للكروت 
// بيانات الأفلام (كأنها جاية من الباك-إند)
// const movies = [
//   {
//     title: "Movie Title 1",
//     genre: "Action",
//     rating: "8.5",
//     image: "imgs/movie1.jpg",
//   },
//   {
//     title: "Movie Title 2",
//     genre: "Drama",
//     rating: "9.0",
//     image: "imgs/movie2.jpg",
//   },
//   {
//     title: "Movie Title 3",
//     genre: "Comedy",
//     rating: "7.8",
//     image: "imgs/movie3.jpg",
//   },
// ];

// // عنصر الكروت
// const container = document.querySelector(".cards-container");

// // عرض الكروت
// movies.forEach(movie => {
//   const card = `
//     <div class="card">
//       <img src="${movie.image}" alt="${movie.title}">
//       <div class="card-content">
//         <h3 class="card-title">${movie.title}</h3>
//         <p class="card-genre">Genre: ${movie.genre}</p>
//         <div class="card-rating">
//           <span>${movie.rating}</span>
//           <i class="fa fa-star"></i>
//         </div>
//       </div>
//     </div>
//   `;
//   container.innerHTML += card;
// });
// ززززززززززززززززززززززززززززز 

// To make the container card . 

const container = document.querySelector(".card-container");

// استنساخ الكروت لعمل تمرير لا نهائي
const cards = Array.from(container.children);
cards.forEach((card) => {
  const clone = card.cloneNode(true);
  container.appendChild(clone);
});

// حركة التمرير اللا نهائي
let scrollPosition = 0;

function animateCards() {
  scrollPosition += 1; // سرعة الحركة
  container.style.transform = `translateX(${-scrollPosition}px)`;

  // إعادة التمرير للبداية عند انتهاء المحتوى
  if (scrollPosition >= container.scrollWidth / 2) {
    scrollPosition = 0;
  }

  requestAnimationFrame(animateCards);
}

animateCards();


