let DetailsOfResult = JSON.parse(localStorage.getItem('matchhistory'));
//console.log(DetailsOfResult)
let a = DetailsOfResult
console.log(typeof a)
let ResultOnscreen = document.getElementById("showresult");



const loadGameHistory = ()=>{
    
var table = `<table> 
<thead>
<tr>
<th>s.No</th>
 <th>plya1</th>
 <th>plya2</th>
 <th>MRwinner</th>
 <th>dateofmatch</th>

 </tr>
 </thead>
 <tbody>`;
    
    DetailsOfResult?.forEach((el,i)=>{
        console.log('el',el.match);
        table += 
        `<tr>
        <td>${i+1}</td>
        <td>${el.match.p1}</td>
        <td>${el.match.p2}</td>
        <td> ${el.match.mwinner}</td>
        <td>${el.match.date}</td>
        </tr>`    
    })
    //table += listOfTrs;
    table += `</tbody></table>`
    ResultOnscreen.innerHTML=table

    // window.document.write(table);

    // for (const md of DetailsOfResult) {
    //     let matchdetails = md.match;
    //     console.log(matchdetails)
    //     let pyar1 = md.match.p1;
    //     let pyar2 = md.match.p2;
    //     let MRwinner = md.match.mwinner;
    //     let dateofmatch = md.match.date;
      
    //     for (const key in matchdetails) {
    //         let b = Object.values(key);
    //         console.log(b)
    
    
    
    
    //       if (Object.hasOwnProperty.call(matchdetails, key)) {
    //         console.log([key]);
    //         const element = matchdetails[key];
    //         console.log(element);
    //       }
    //     }
    //   }
}

loadGameHistory();

// console.log(md)
// let pyar1 = md.match.p1;
// let pyar2 = md.match.p2;
// let MRwinner=md.match.mwinner;
// let dateofmatch =md.match.date;
// console.log(md.match);
// console.log(pyar1);
// console.log(pyar2);
// console.log(MRwinner);
// console.log(dateofmatch);

// for (const md of DetailsOfResult){
//   let pyar1 = md.match.p1;
//   let pyar2 = md.match.p2;
//   let MRwinner=md.match.mwinner;
//   let dateofmatch =md.match.date;

//   console.log(md.match);
//   console.log(pyar1);
//   console.log(pyar2);
//   console.log(MRwinner);
//   console.log(dateofmatch);

// ResultOnscreen.innerHTML=table;
// }
