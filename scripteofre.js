let kake =[];
    kake[0]="source/crea/roleup11.png"
    kake[1]="source/crea/rolup3.png"
    kake[2]="source/crea/rolup1.png"
    let j=0;
    let tup= 2000;
    function transpa(){
        document.diapo.src=kake[j];
        if (j<kake.length-1) {
            j++;
        }
        else{
            j=0;
        }
        setTimeout("transpa()",tup);
    }
    window.onload=transpa(transpa2);

    let fliyer =[];
    fliyer[0]="source/crea/flayer1.png"
    fliyer[1]="source/crea/flayer2.png"
    fliyer[2]="source/crea/flayer3.png"
    let p=0;
    let tip= 3000;
    function transpa2(){
        document.diapo2.src=fliyer[p];
        if (p<fliyer.length-1) {
            p++;
        }
        else{
            p=0;
        }
        setTimeout("transpa2()",tip);
    }
    window.onload=transpa2(transpa3);

    let carte =[];
    carte[0]="source/crea/lacost.png"
    carte[1]="source/crea/cap.png"
    carte[2]="source/crea/sac.png"
    carte[3]="source/crea/parasole1.png"
    carte[4]="source/crea/tass.png"
    carte[5]="source/crea/sacnoire.png"
    carte[6]="source/crea/sacjone.png"
    carte[7]="source/crea/stype.png"
    let l=0;
    let tipe= 4000;
    function transpa3(){
        document.diapo3.src=carte[l];
        if (l<carte.length-1) {
            l++;
        }
        else{
            l=0;
        }
        setTimeout("transpa3()",tipe);
    }
    window.onload=transpa3(mayfonct);

    let tablauxx =[];
    tablauxx[0]="source/crea/carton.png"
    tablauxx[1]="source/crea/tit.png"
    tablauxx[2]="source/crea/sacnoire.png"
    let ra=0;
    let minute= 2000;
    function mayfonct(){
        document.diapora4.src=tablauxx[ra];
        if (ra<tablauxx.length-1) {
            ra++;
        }
        else{
            ra=0;
        }
        setTimeout("mayfonct()",minute);
    }
    window.onload=mayfonct(photographe);

    let photo =[];
    photo[0]="source/crea/photo1.png"
    photo[1]="source/crea/photographe.png"
    photo[2]="source/crea/photographe2.png"
    photo[3]="source/crea/photographe3.png"
    photo[4]="source/crea/photoa2.png"
    let graph=0;
    let h= 4000;
    function photographe(){
        document.diapo7.src=photo[graph];
        if (graph<photo.length-1) {
            graph++;
        }
        else{
            graph=0;
        }
        setTimeout("photographe()",h);
    }
    window.onload=photographe(brandingfonct);

    let branding =[];
    branding[0]="source/crea/br1.png"
    branding[1]="source/crea/br2.png"
    branding[2]="source/crea/br3.png"
    branding[3]="source/crea/br4.png"
    branding[4]="source/crea/br5.png"
    branding[5]="source/crea/br6.png"
    let bran=0;
    let x1= 3000;
    function brandingfonct(){
        document.diap5.src=branding[bran];
        if (bran<branding.length-1) {
            bran++;
        }
        else{
            bran=0;
        }
        setTimeout("brandingfonct()",x1);
    }
    window.onload=brandingfonct(organiseurfonct);

    let organiseur =[];
    organiseur[0]="source/crea/or1.png"
    organiseur[1]="source/crea/or2.png"
    organiseur[2]="source/crea/or3.png"
    organiseur[3]="source/crea/or4.png"
    organiseur[4]="source/crea/or5.png"
    organiseur[5]="source/crea/or6.png"
    organiseur[6]="source/crea/or7.png"
    let org=0;
    let x2= 4000;
    function organiseurfonct(){
        document.diap9.src=organiseur[org];
        if (org<organiseur.length-1) {
            org++;
        }
        else{
            org=0;
        }
        setTimeout("organiseurfonct()",x2);
    }
    window.onload=organiseurfonct(coqfonct);

    let coque =[];
    coque[0]="source/crea/coq2.png"
    coque[1]="source/crea/coq3.png"
    coque[2]="source/crea/coq1.png"
    let coq=0;
    let x3= 3000;
    function coqfonct(){
        document.diapo10.src=coque[coq];
        if (coq<coque.length-1) {
            coq++;
        }
        else{
            coq=0;
        }
        setTimeout("coqfonct()",x2);
    }
    window.onload=coqfonct();
  