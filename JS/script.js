const sidebar = document.getElementById('sidebar');
const navContainer = document.getElementById('sidebar');
const hamburger = document.getElementById('openSidebar');
const closeSidebar = document.getElementById('closeSidebar');
const page =document.querySelector('.page');

hamburger.addEventListener("click", ()=>
{
    sidebar.classList.add('open');
    document.body.classList.add('active');
    navContainer.style.left='0';
    navContainer.style.width="18rem";
})

closeSidebar.addEventListener("click", ()=>
{
    sidebar.classList.remove('open');
    document.body.classList.remove('active');
    navContainer.style.left='-18rem';
    navContainer.style.width="0rem";
})