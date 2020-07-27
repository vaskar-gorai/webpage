function onDropdown(argument) {
	document.getElementById("dropdownMenu").classList.toggle("show");
}

window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
        console.log(dropdowns)
    	var i;
    	for (i = 0; i < dropdowns.length; i++) {
      		var openDropdown = dropdowns[i];
      			if (openDropdown.classList.contains('show')) {
        			openDropdown.classList.remove('show');
      			}
    	}
	}
}
document.addEventListener("DOMContentLoaded", function(){
    if (document.querySelector('.filter-button') === null) {
        return
    }
    document.querySelectorAll(".filter-button").forEach(function(button){
        button.onclick = function() {
            let filter = this.dataset.filter;
            for (let item of document.querySelectorAll('.gallery-item')) {
                if (item.classList.value.includes(filter)) {
                    item.style.display = '-ms-flexbox'
                    item.style.display = 'flex'
                }
                else {
                    item.style.display = 'none'
                }
            }
        }
    })
    document.querySelector('#firstselected').click()
});