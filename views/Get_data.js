      
        window.localStorage;

        
       // localStorage.clear();

     
//--------------------- for Pop up the form of Favorite Banks---------------------------------//
        function openForm() {
          document.getElementById("myForm").style.display = "block";
          var resultOfpop;
          resultOfpop = '<form' + ' class="form-container">'+ '<h3>List of your Favorite banks IFSC</h3>';
          for(var key in localStorage)
          {
            if(key.length==11)
          resultOfpop +='<p>'+key+'</p>';
         // console.log(favoutites[k]);
          }
          resultOfpop += '<button type="button" class="btn cancel" onclick="closeForm()">Close</button></form>';
          document.getElementById("myForm").innerHTML = resultOfpop;

        }
        
        function closeForm() {
          document.getElementById("myForm").style.display = "none";
        }

        
      // console.log(favoutites);
     
//-----------------------for save the content of fav. Banks after refreshing page---------------------//
        function myfunc()
        { 
         // console.log("hii");
          var allCheckBoxes = document.getElementsByClassName('editable1');
          var city = document.getElementById("tableForm").value;
          if(city=="")
          return;
          var val;
          for(var i=0;i<allCheckBoxes.length;i++)
          {   val = allCheckBoxes[i].value;
            if(allCheckBoxes[i].checked)
            { 
             
              localStorage.setItem(val,true);
            //  console.log(localStorage.getItem("kjbbm"));
            }
            else if(localStorage.getItem(val)!=null)
            {
              localStorage.removeItem(val);
            }
          }
         //  console.log(localStorage);

         
            
        }

       

//------------------------for getting data from api and make dattable pagination ---------------------------//

      async function func1(city){
    //  console.log(city);

    
        const Url = 'https://fyle1ans.herokuapp.com/api/branches?q='+city+'&limit=&offset=0';
        await fetch(Url)
           .then((res) => res.json())
           .then((data) => {
             
             console.log(data);
            jsonData = data;
           // console.log(data);
             
           for(var i=0;i<jsonData.length;i++)
           { 
             if(localStorage.getItem(jsonData[i].ifsc)){
             jsonData[i].check = "<input type="+'"checkbox"'+" "+ "class=editable1 value ="+jsonData[i].ifsc+ " onclick="+'"myfunc()"'+" checked"+'>';
            // console.log(jsonData.ifsc);
            }
             else{
             jsonData[i].check = "<input type="+'"checkbox"'+" "+ "class=editable1 value ="+jsonData[i].ifsc+ " onclick="+'"myfunc()"'+'>';
             }
            // data[i].ifsc = '<a herf="https://ifsc.bankifsccode.com/'+data[i].ifsc+'"'+'>'+data[i].ifsc+'</a>'
           }
        // console.log(jsonData[0]);
         $('#'+city+'').DataTable({
            data: jsonData,
            stateSave: true,
           
          
            columns: [
               
              {data:"check"},
              { data: "ifsc" },
              { data: "bank_id" },
              { data: "branch" },
              { data: "address" },
              { data: "city" },
              { data: "district" },
              { data: "state" },
             
              
            ],
           
          });
         
          })
          .catch((err) => console.log(err))

        }
      

        func1('Bangalore');
        func1('Mumbai');
        func1('Delhi');
        func1('Kolkata');
        func1('Jaipur');

// ------------------for displaying correct table according to dropdown value--------------------------//
       
        var okb=false,okk=false,okj=false,okm=false,okd  = false;
        var lastCity='';
        async function func(){
          city = document.getElementById('tableForm').value; 
          if(city=='')
          return;
          //console.log(lastCity)
          
          if(lastCity!=''){
          document.getElementById(lastCity).style.display = "none";
          document.getElementById(lastCity+'_wrapper').style.display = "none";
          }
          document.getElementById(city).style.display = "inline"
          document.getElementById(city+'_wrapper').style.display = "inline";
          lastCity = city;

        }


         
          
          
    
               
                    