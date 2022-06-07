$(function(){
    beolvas("foci.json", megjelenit);
});
function beolvas(eleresiut,callback){
    fetch("foci.json")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data.focista);
            callback(data.focista);
        })
        .catch((err)=>console.log(err));
}
function megjelenit(tomb){
    let txt = "<table>";
    tomb.forEach(function(foci, index) {
        txt+="<tr id="+index+">";
        for(const key in foci){
            txt+="<td>";
            txt+=foci[key];
            txt+="</td>";
        }
        txt+="</tr>"
    });
    txt+="</table>";
    $(".tartalom").append(txt);
    $(".tartalom table tr").on("click", function(){
        let aktID = $(this).attr("id")
        console.log(aktID);
        $(this).toggleClass("kiemel");
        aktfocistamegjelenitese(tomb,aktID);
    });

}
function aktfocistamegjelenitese(tomb,aktID){
    $(".focistahely").empty();
    let aktfocista=tomb[aktID]
    tomb.kep
        for(const key in aktfocista){
            if (key=="Kep") {
                $(".focistahely").append(`<img src="${aktfocista[key]}"alt="Focista">`);
            }
            else{
                $(".focistahely").append(`<p>${aktfocista[key]}</p`);
            }
        }

}