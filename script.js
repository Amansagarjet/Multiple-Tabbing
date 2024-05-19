let btn = document.querySelectorAll('.tabs-btn-wrapper ul li');
let tabs = document.querySelectorAll('.tabs-content-wrapper .content');
btn[0].classList.add('active');
tabs[0].style.display = "block";
btn.forEach((element, index) => {
    element.addEventListener('click', function(){
        tabs.forEach(tab => tab.style.display = "none")
        btn.forEach(btns => btns.classList.remove('active'));

        tabs[index].style.display = "block";
        element.classList.add("active");
    })
 });