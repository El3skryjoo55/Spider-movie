// Scripting 


  // btn scroll to top 
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'flex'; 
    } else {
      scrollToTopBtn.style.display = 'none'; 
    }
  });

 
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // حركة سلسة
    });
  });
  


 // Simulating data loading with a timeout
 const loader = document.querySelector('.loader');
 const content = document.querySelector('.container');

 setTimeout(() => {
   loader.style.display = 'none'; // Hide the loader
   content.classList.add('visible'); // Show the content
 }, 3000);



