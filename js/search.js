// onblur
function hideResults() {
    $(".search-form__results-list").hide();
}

// onfocus
function showResults() {
    const resultsElement = $(".search-form__results-list");
    if (resultsElement.text() != "") {
        resultsElement.show();
    }
}

// onkeypress
function search(noResultsText) {
    const resultsElement = $(".search-form__results-list");
    resultsElement.empty();
    if ($(".search-form__input").val() != "") {
        displaySearchResults(noResultsText);
    } else {
        resultsElement.hide();
    }
}