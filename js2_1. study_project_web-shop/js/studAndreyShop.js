const init = () => {
  
  const menuButton = document.querySelectorAll(".menu_btn");
  menuButton.forEach( (menuAdd) => {
    menuAdd.addEventListener('click', () => {
      console.log("Hi");
    });
  });


  
};
 
window.onload = init;