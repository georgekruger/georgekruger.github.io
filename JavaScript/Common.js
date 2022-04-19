
var Version = 2;
/*This is horrific and needs a rework*/

function dropdownmenu(ContentElem) {
    var ClassActive = "dropdown-content-show";
    if (ContentElem.classList.contains(ClassActive) && !ContentElem.classList.contains("disable")) {
        ContentElem.classList.remove(ClassActive);
        ContentElem.nextElementSibling.style.height = '0px';
        egegeg(ContentElem, false);
        ContentElem.classList.add("disable");
        setTimeout(function () {
            ContentElem.classList.remove("disable")
        }, 600);
    } else if (!ContentElem.classList.contains("disable")) {
        var ContentHeight = ContentElem.nextElementSibling.scrollHeight;
        ContentElem.nextElementSibling.style.height = ContentHeight + 'px';
        ContentElem.classList.add(ClassActive);
        egegeg(ContentElem, true);
        ContentElem.classList.add("disable");
        setTimeout(function () {
            ContentElem.classList.remove("disable")
        }, 600);
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
