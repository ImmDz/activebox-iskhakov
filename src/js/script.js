var clickToHide2 = document.querySelector('.header-block__nav-btn');
	clickToHide2.addEventListener("click", hideVisibleElem);
		
	/* Функция добавления / удаления класса, который скрывает элемент */
function hideVisibleElem() {
let wpcraftBox2 = document.querySelector('.header-block__nav-list');
wpcraftBox2.classList.toggle("header-block__nav-list--hidden");
		
	/* В зависимости от наличия скрывающего класса меняем текст в кнопке */
        if (wpcraftBox2.classList.contains("header-block__nav-list--hidden")){
            clickToHide2.value = 'Open';
        } else {
            clickToHide2.value = 'Close';
        }
}