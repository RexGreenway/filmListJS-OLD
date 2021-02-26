const submit = document.getElementById('submit');
const statusValue = document.getElementById('status');
const filmName = document.getElementById('film-name');
const container = document.getElementById('container');

submit.addEventListener('click', addFilm);

const filmList = [];

function addFilm(e){
    e.preventDefault();
    
    const newFilm = {};
    newFilm.id = filmList.length;
    // Giving each entry an id so that you can grab them later to add more in.
    newFilm.name = filmName.value;
    newFilm.status = statusValue.value;
    filmList.push(newFilm);

    const sortedFilmList= filmList.sort(compare_name);

    const newFilmItem = document.createElement('li');
    newFilmItem.setAttribute('id', newFilm.id);

    if(statusValue.value == 'seen'){
        newFilmItem.className = 'list-item seen';
        newFilmItem.innerHTML = '<b>'+filmName.value+'<b>';
    } else {
        newFilmItem.className = 'list-item unseen';
        newFilmItem.innerHTML = filmName.value;
    }

    //USE INDEX OF METHOD!!!
    let filmIndex = sortedFilmList.indexOf(newFilm);
    if (filmIndex != sortedFilmList.length - 1) {
        let reference = document.getElementById(sortedFilmList[filmIndex + 1].id);
        container.insertBefore(newFilmItem, reference);
    } else {
        container.append(newFilmItem);
    }
   

    // if(filmIndex === 0){
    //     container.prepend(listDiv);
    // } else {
    //     container.appendChild(listDiv);
    // }

    console.log(sortedFilmList);

    filmName.value = '';
}


function compare_name(a, b){
    if(a.name < b.name){return -1;} else if(a.name > b.name){return 1;} else {return 0;}
}




// const submit = document.getElementById('submit');
// const status = document.getElementById('status');
// const filmName = document.getElementById('film-name');
// const container = document.getElementById('container')

// submit.addEventListener('click', submitfunc);

// function submitfunc(e){
//     e.preventDefault();

//     const listDiv = document.createElement('div');
//     listDiv.className = 'list-div';
//     const newFilm = document.createElement('li');

//     if(status.value == 'seen'){
//         newFilm.className = 'list-item seen';
//         newFilm.innerHTML = '<b>'+filmName.value+'<b>';
//     } else {
//         newFilm.className = 'list-item unseen';
//         newFilm.innerHTML = filmName.value;
//     }

//     listDiv.appendChild(newFilm);

//     container.appendChild(listDiv);

//     filmName.value = '';
// }

// // build an array of objects with film name and status and then pull values to populate list then the sorting alphabetically can happen to array?