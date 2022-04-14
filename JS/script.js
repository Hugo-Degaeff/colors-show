document.querySelector(".cercle").addEventListener("click", lecture);

let audio = document.querySelector(".song");
let i = 0;

function lecture(){
    document.querySelector(".lecture")?.classList.toggle("pause");  //Active ou Met en pause l'animation
    document.querySelector(".semblant").classList.add("lecture");   //Tourne et decale
    document.querySelector(".play").classList.toggle("efface");     //Enleve ou met la fleche
    document.querySelector(".stop").classList.toggle("affiche");    //Enleve ou met la pause


    if(i%2==0){
        audio.play();
    }
    else{
        audio.pause();
    }

    i++;
    
}

document.querySelector(".burger").addEventListener('click', descend);

function descend(){
    document.querySelector("header").classList.toggle("viens");
    document.querySelector(".line1").classList.toggle("pouf");
    document.querySelector(".line2").classList.toggle("pouf");
}


document.querySelector(".fermer").addEventListener('click', remonte);

function remonte(){
    document.querySelector("header").classList.toggle("viens");
    document.querySelector(".line1").classList.toggle("pouf");
    document.querySelector(".line2").classList.toggle("pouf");
}


document.querySelectorAll(".cercle").forEach(e=>{
    e.addEventListener("click", num1)
    
    let duree = 0;

    function num1(){
        let verif = e.classList[1];

        if(verif=="n1"){
            document.querySelector(".lecture1")?.classList.toggle("pause");
            document.querySelector(".l1").classList.add("lecture1");
        }
    }

})