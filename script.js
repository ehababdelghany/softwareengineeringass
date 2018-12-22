function Generate() {
    document.getElementById("a").innerHTML = document.getElementById("booktitle").value;;

    document.getElementById("b").innerHTML = document.getElementById("booksubtitle").value;
    document.getElementById("c").innerHTML = document.getElementById("name").value;
    document.getElementById("d").innerHTML = document.getElementById("publisher").value;
    document.getElementById("e").innerHTML = document.getElementById("date").value;

var color = document.getElementById("color").value;
document.getElementById("cover").style.backgroundColor  = document.getElementById("color").value;



}
