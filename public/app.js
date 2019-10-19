// Front end logic goes here
function getArticles() {
    $('.articles').empty();

    $.ajax({
        url: '/articles',
        method: 'GET'
    }).then((data)=>{
        for (item of data) {
            let htmlString = `<div class="title-header" data-id=${item._id}>${item.title}</div>`
            htmlString += '<div class="title-space"></div>'
            $('.articles').append(htmlString);
        }
    });
}


$(document).ready(getArticles);


$('body').on('click', '.title-header', (event) => {
    // console.log(event.target.dataset.id)
    $.ajax({
        url: '/articles/' + event.target.dataset.id,
        method: 'GET'
    }).then((response) => {
        console.log(response);
    });
});