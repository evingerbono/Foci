$(function(){
    beolvas("foci.json", megjelenit);
});
function beolvas(eleresiut,callback){
    fetch("foci.json")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data.focistak);
            callback(data.focistak);
        })
        .catch((err)=>console.log(err));
}