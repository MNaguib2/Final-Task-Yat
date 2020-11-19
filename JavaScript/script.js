


var discription = $("p.description");
var limit2 = 100;
var discriptions = [];
var limit = "";
var content = "";
var isContentToggled = [];
var numtab;
//console.log(discription);
for (var i = 0; i< discription.length; i++){
  //console.log(discription[0].innerHTML);
  numtab = discription[i].id.split("discription")[1].split("-");
  //console.log(numtab);
  discriptions.push(discription[i].innerHTML);
  isContentToggled.push(true);
  limit = discription[i].innerHTML.substr(0, limit2).lastIndexOf(' ');
  content = `${this.discription[i].innerHTML.substr(0, this.limit)}...`;
  document.getElementById(`discription${numtab[0]}-${numtab[1]}`).innerHTML = content;
}

//console.log(discriptions);
/*
//console.log(discription);

  limit = discription.substr(0, limit2).lastIndexOf(' ');
  content = `${this.discription.substr(0, this.limit)}...`;
 document.getElementById("discription1-1").innerHTML = content;
//*/
 function toggleContent(id) {

  const arrayid = id.id.split('-');
  //console.log(arrayid[1]);

  if(isContentToggled[arrayid[1]]){
    //console.log(isContentToggled[arrayid[1]]);
    $(`a#${id.id}`).html("Read Less");
    isContentToggled[arrayid[1]] = false;
  }else{
    $(`a#${id.id}`).html('Read More');
    isContentToggled[arrayid[1]] = true;
  }  
//*
  this.limit = this.discriptions[arrayid[1]].substr(0, this.limit2).lastIndexOf(' ');
  //console.log(isContentToggled[arrayid[1]]);
 isContentToggled[arrayid[1]] ? $(`p#${id.id}`).html(`${discriptions[arrayid[1]].substr(0, this.limit)}...`)
 : $(`p#${id.id}`).html(discriptions[arrayid[1]]);
         
        /*
        if(this.isContentToggled[id]){
          document.getElementById(`C${id}`).style.height = "auto";
          }else{
            document.getElementById(`C${id}`).style.height = "19rem";
          }
          */
  
  //console.log(this.isContentToggled);
  //*/
}