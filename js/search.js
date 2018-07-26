// onblur
function hideResults(event) {
    if (event.relatedTarget === null ||
        !event.relatedTarget.classList.contains("search-form__results-list__item__link")) {
        $(".search-form__results-list").hide();
    }
}

// onfocus
function showResults() {
    const resultsElement = $(".search-form__results-list");
    if (resultsElement.text() != "") {
        resultsElement.show();
    }
}

// onkeyup
function search(noResultsText) {
    const resultsElement = $(".search-form__results-list");
    resultsElement.empty();
    if ($(".search-form__input").val() != "") {
        displaySearchResults(noResultsText);
    } else {
        resultsElement.hide();
    }
}