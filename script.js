var likes = [9,12,9]

var likeCounter = [
    document.querySelector("#likeCounter-1"),
    document.querySelector("#likeCounter-2"),
    document.querySelector("#likeCounter-3"),
]

function add1(idx) {
    likes[idx]++;
    likeCounter[idx].innerText = likes [idx] + " like(s)";
    console.log(likes [idx]);
}






//var count = 3;
// var likeCounter = document.querySelector("#likeCounter")

// function add1() {
//     count++;
//     likeCounter.innerText = count + " likes";
//     console.log(count);
// }

