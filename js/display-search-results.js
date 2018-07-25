function displaySearchResults(noResultsText) {
    const input = $(".search-form__input");
    const resultsElement = $(".search-form__results-list");
    $.get("/example", function(data) {
        const query = new RegExp(input.val(), 'gi');
        const results = data.match(query);
        if (results != null) {
            for (let r of results) {
                const rLink = document.createElement("a");
                rLink.setAttribute("href", "#");
                rLink.append(r);
                rLink.classList.add("search-form__results-list__item__link");
                const rElement = document.createElement("li");
                rElement.append(rLink);
                rElement.classList.add("search-form__results-list__item");
                resultsElement.append(rElement);
            }
        } else {
            const errorElement = document.createTextNode(noResultsText);
            const rElement = document.createElement("li");
            rElement.append(errorElement);
            rElement.classList.add("search-form__results-list__item", "search-form__results-list__item--error");
            resultsElement.append(rElement);
        }
        resultsElement.show();
    });
}