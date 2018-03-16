import reddit from './redditapi';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm,addEventListener('submit',e =>{
    e.preventDefault();
    //get search term, sortBy and limit

    const searchTerm = searchInput.value;
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    const limit = document.getElementById('limit').value;
    console.log(searchTerm,sortBy,limit);

    //check for empty input

    if(searchTerm===""){

        showMessage('Please add a search term','alert-danger');
    }

    reddit.search();




})


function showMessage(message,className){

    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const searchContainer = document.getElementById('search-container');
    const search = document.getElementById('search');
    searchContainer.insertBefore(div,search);
    setTimeout(()=>{
        document.querySelector('.alert').remove();
    },2000);
};