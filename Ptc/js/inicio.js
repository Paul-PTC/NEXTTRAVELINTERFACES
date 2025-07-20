const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");


sidebarToggler.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  setTimeout(() => {
    swiper.update(); // Espera la transición para asegurar el nuevo layout
  }, 500);
});
