let quiz_counter = -1;

document.getElementById("btn").onclick = function() {
    checkResults();

    quiz_counter++;

    if (quiz_counter == quiz.length) return alert("done")

    var quiz_dom = document.querySelector('#quiz');
    quiz_dom.innerHTML = "<h5>"+quiz[quiz_counter].question+"</h5>";

    let opt = "";
    quiz[quiz_counter].alternatives.forEach(a => {
        opt += "<option>"+a+"</option>";
    });
    quiz_dom.innerHTML += "<select>"+opt+"</select>";
}

function checkResults() {
    if (quiz_counter < 0) return;
    let val = document.querySelector('select').value
    let ans = quiz[quiz_counter].alternatives[quiz[quiz_counter].answer];
    if (val == ans) alert('Correct')
    else alert('Wrong')
}