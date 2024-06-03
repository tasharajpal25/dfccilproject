
const url = "https://cd53-112-133-230-86.ngrok-free.app/get_data/";
const options = {
    method: 'GET',
    headers : {
      'Accept':'application/json',
      'Content-type':'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': 'http://localhost:8080'
  },
}
fetch(url, options)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      console.log(response);
      throw new Error('Network response was not ok');
    }
  }).then((response) => {
    if (typeof response !== 'object') {
      response = { data: response }; // Create a new object and assign the response to a property
    }
    // var table = document.getElementById('table1');
    var table = document.getElementById('table1');

    for (const res of response){
      console.log(res.id);
      console.log(res.title);
      console.log(res.date);
      const meetingid = res.id;
      const meetingname = res.title;
      const meetingdate= res.date;

      var row=table.insertRow();
      var c1=row.insertCell();
      var c2=row.insertCell();
      var c3=row.insertCell();
  
      c1.innerHTML=meetingid;
     c2.innerHTML=meetingname; 
     c3.innerHTML=meetingdate;
    }
  });
 
  //    const id = section.meetingid;
  //    const name = section.meetingname;
  //    const  date= section.meetingdate;

  //    var row=table.insertRow();
  //    var c1=row.insertCell();
  //    var c2=row.insertCell();
  //    var c3=row.insertCell();
   
  //    c1.innerHTML=meetingid;
  //    c2.innerHTML=meetingname; 
  //    c3.innerHTML=meetingdate;
   
  //  }