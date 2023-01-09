let data;
let xhr = new XMLHttpRequest(); 
xhr.open("GET", "movies.json", true);
xhr.onload = function(){
        data = JSON.parse(xhr.response);
        console.log(data)
                    // TABLE
        afficher(data)
    }


xhr.send();


  // selecte
  document.querySelector('#floatingSelect').onchange=function(){
    var  select= document.querySelector('#floatingSelect').value;
      if (select=="title") {
      data =data.sort((a, b) => {
        let A = a.title.toLowerCase();
        let B = b.title.toLowerCase();
        if (A< B) {
            return -1
        }
        if (A>B) {
            return 1
        }
        if(A==B){
            return 0
        }
      });
      
      }


    else if (select=="date"){
       data =data.sort((a, b) => {
            let A = a.RDate.toLowerCase();
            let B = b.RDate.toLowerCase();
            if (A< B) {
                return -1
            }
            if (A>B) {
                return 1
            }
            if(A==B){
                return 0
            }
          });
      
    } 
    else if (select=="lasts"){
        data =data.sort((a, b) => {
            let A = a.lasts;
            let B = b.lasts;
            if (A< B) {
                return -1
            }
            if (A>B) {
                return 1
            }
            if(A==B){
                return 0
            }
          });
    }else if (select=="Titre") {
        data =data.sort((a, b) => {
          let A = a.title.toLowerCase();
          let B = b.title.toLowerCase();
          if (A< B) {
              return 1
          }
          if (A>B) {
              return -1
          }
          if(A==B){
              return 0
          }
        });
        
        }
        else if (select=="L'anné"){
          data =data.sort((a, b) => {
              let A =  a.RDate.toLowerCase();
              let B = b.RDate.toLowerCase();
              if (A< B) {
                  return 1
              }
              if (A>B) {
                  return -1
              }
              if(A==B){
                  return 0
              }
            });
       
      }
  
      else if (select=="durée"){
         data =data.sort((a, b) => {
              let A = a.lasts.toLowerCase();
              let B = b.lasts.toLowerCase();
              if (A< B) {
                  return 1
              }
              if (A>B) {
                  return -1
              }
              if(A==B){
                  return 0
              }
            });
        
      } 
    afficher(data)
}

function afficher(array){
    document.querySelector('#tbody').innerHTML = "";
            array.forEach(element => {
                let tr = document.createElement("tr");
            let poster= document.createElement("img");
            let title = document.createElement("td");
            let RDate = document.createElement("td");
            let director = document.createElement("td")
            let lasts = document.createElement("td"); 
            let festival = document.createElement("td");
            let actor = document.createElement("td")
            poster.append(element.poster);
            title.append(element.title);
            RDate.append(element.RDate);
            director.append(element.director)
            lasts.append(element.lasts);
            festival.append(element.festival);
            // actor.append(element.actor);
            poster.setAttribute("src",element.poster)
            poster.style.width = "180px"              
            tr.appendChild(poster);
            tr.appendChild(title);
            tr.appendChild(RDate);
            tr.appendChild(director)
            tr.appendChild(lasts);
            tr.appendChild(festival);
            const actorsList = document.createElement("ul");
            element.actor.forEach(actor => {
                let li = document.createElement('li')
                li.style.textDecoration='none'
                let p = document.createElement('p');
                p.append(actor.FName);
                p.append(actor.nationality);
                li.append(p)
                actorsList.append(li);
            })
            actor.append(actorsList)
            tr.append(actor)
            document.querySelector('#tbody').appendChild(tr)
        });        
}
document.querySelector('#search').onkeyup = ()=>{
       
    let Searchdata = data.filter((element)=>{
        return element.title.toLowerCase().includes(document.querySelector('#search').value.toLowerCase())
    })
    afficher(Searchdata)
    }