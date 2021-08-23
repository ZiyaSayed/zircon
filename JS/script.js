// ----------------
//                 Sidebar 
//                         ---------------------------------

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

// ----------------
//                 Sidebar Submenu
//                         ---------------------------------
const openSubmenuIcons=document.querySelectorAll('.openSubmenu');
const subcategoryMenu = document.querySelectorAll('.subcategoryMenu');
openSubmenuIcons.forEach(icon => {
    
    icon.addEventListener("click", ()=>
    {
        let submenuNumber=icon.dataset.submenu;
        let submenu =document.getElementById(`subcategoryMenu-${submenuNumber}`);

        subcategoryMenu.forEach(menu => {
                if(menu!=submenu)
                    menu.classList.remove('showSubmenu');
            });

            icon.classList.toggle('rotate');
            submenu.classList.toggle('showSubmenu');

        openSubmenuIcons.forEach(i => 
            {
                if(i.dataset.submenu!=submenuNumber)
                    i.classList.remove('rotate');
            })

    })
});