
const url = 'https://0894-47-31-209-185.ngrok-free.app/put_data/';

function myfunction() {
  console.log("started");
    var id=document.getElementById('meetingid');
    var name= document.getElementById('meetingname');
    var date=document.getElementById('meetingdate');
    meetingid.value
   // var date = new Date(2023,7,18,0,0,0,0);
    const options = {
        method: 'POST',
        headers : {
          'Accept':'application/json',
          'Content-type':'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
      },
        mode: 'no-cors',
        body: JSON.stringify
        ({
          "id": 987,
          "title": "string",
          "date": "2023-07-18"
        })
        }
        fetch(url, options)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Network response was not ok');
          }
        }).then(response => {
          console.log(response);
        });
        // window.location.href = 'innerdata.html';
        console.log("done");
        
};

function fun(){
  const url2 = "https://0894-47-31-209-185.ngrok-free.app/get_data/";
  const options2 = {
    method: 'GET',
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "https://www.example.com",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
  },
  }
fetch(url2, options2)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      console.log(response);
      throw new Error('Network response was not ok');
    }
  }).then((response) => {
    if (typeof response !== 'object') {
      response = { data: response }; 
    }
    console.log(response);
    
  });
 
}
