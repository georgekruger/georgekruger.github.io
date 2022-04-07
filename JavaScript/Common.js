/*This is horrific and needs a rework*/

function dropdownmenu(ContentElem) {
    var ClassActive = "dropdown-content-show";
    if (ContentElem.classList.contains(ClassActive)) {
        ContentElem.classList.remove(ClassActive);
        ContentElem.nextElementSibling.style.height = '0px';
        egegeg(ContentElem, false);
    } else {
        var ContentHeight = ContentElem.nextElementSibling.scrollHeight;
        ContentElem.nextElementSibling.style.height = ContentHeight + 'px';
        ContentElem.classList.add(ClassActive);
        egegeg(ContentElem, true);
    }

    function egegeg(ContentElem, open) {
        if (ContentElem.parentElement.classList.contains("dropdown-content")) {
            if (open) {
                var aad = ContentElem.parentElement.scrollHeight + ContentElem.nextElementSibling.scrollHeight;
                ContentElem.parentElement.style.height = aad + 'px';
            } else {
                var shoes = ContentElem.parentElement.scrollHeight - ContentElem.nextElementSibling.scrollHeight;
                ContentElem.parentElement.style.height = shoes + 'px';

            }
        }
    }
}
