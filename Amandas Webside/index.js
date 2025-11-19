let question = document.getElementsByClassName("q")
console.log(question[0])


question[0].addEventListener("click", function () {
    let answer = document.getElementsByClassName("an")
    console.log(answer[0])
    answer[0].classList.toggle("hide")
});
