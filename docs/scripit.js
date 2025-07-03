    let image =[];
    image[0]="source/crea/parasole1.png"
    image[1]="source/crea/tass.png"
    image[2]="source/crea/sac.png"
    image[3]="source/crea/lom.png"
    let i=0;
    let timer= 3000;
    function changerimage(){
        document.diapo.src=image[i];
        if (i<image.length-1) {
            i++;
        }
        else{
            i=0;
        }
        setTimeout("changerimage()",timer);
    }
    window.onload=changerimage(diapoimage);
    let tab =[];
    tab[0]="source/crea/lacost.png"
    tab[1]="source/crea/cap.png"    
    tab[2]="source/crea/tit.png"

    let x=0;
    let time= 4000;
    function diapoimage(){
        document.diapo2.src=tab[x];
        if (x<tab.length-1){
            x++;
        }
        else{
            x=0;
        }
        setTimeout("diapoimage()",time);
    }
    window.onload=diapoimage(defilement);

    let tableau =[];
    tableau[0]="source/crea/carte1.jpg"
    tableau[1]="source/crea/carte2.jpg"
    let y=0;
    let heur= 5000;
    function defilement(){
        document.diapo3.src=tableau[y];
        if (y<tableau.length-1) {
            y++;
        }
        else{
            y=0;
        }
        setTimeout("defilement()",heur);
    }
    window.onload=defilement(defilementa);

    let tableaux =[];
    tableaux[0]="source/crea/sacjone.png"
    tableaux[1]="source/crea/sacnoire.png"
    tableaux[1]="source/crea/stype.png"
    let z=0;
    let heure= 4000;
    function defilementa(){
        document.diapo4.src=tableaux[z];
        if (z<tableau.length-1) {
            z++;
        }
        else{
            z=0;
        }
        setTimeout("defilementa()",heure);
    }
    window.onload=defilementa;

    let tableaus =[];
    tableaus[0]="source/crea/sacjone.png"
    tableaus[1]="source/crea/sacnoire.png"
    tableaus[1]="source/crea/stype.png"
    let k=0;
    let heuro= 4000;
    function defilemente(){
        document.diapo5.src=tableaux[k];
        if (k<tableau.length-1) {
            z++;
        }
        else{
            z=0;
        }
        setTimeout("defilementa()",heure);
    }
    window.onload=defilementa(photographe);
// je doit creer les autre diapo ici pour contiuer le defilement