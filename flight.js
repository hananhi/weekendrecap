
const flights = [
    {
        from: "Tel aviv",
        to:'amsterdam',
        price: 40,
        dates:[
            {depart: new Date ('24.11.2023')},
            {return: new Date ('1.12.2023')}
        ]
    },
    {
        from: "Tel aviv",
        to:'london',
        price: 75,
        dates:[
            {depart: new Date ('28.11.2023')},
            {return: new Date ('12.12.2023')}
        ]
    },
    {
        from: "Athens",
        to:'Prague',
        price: 95,
        dates:[
            {depart: new Date ('28.11.2023')},
            {return: new Date ('12.12.2023')}
        ]
    },
    {
        from: "Berlin",
        to:'Prague',
        price: 22,
        dates:[
            {depart: new Date ('28.11.2023')},
            {return: new Date ('12.12.2023')}
        ]
    },
    {
        from: "London",
        to:'Berlin',
        price: 100,
        dates:[
            {depart: new Date ('28.11.2023')},
            {return: new Date ('12.12.2023')}
        ]
    }
]

const flightContainer=document.getElementById('flight-container');
function displayflights(flights){
    // moviesContainer.innerHTML = ''
    while (flightContainer.firstChild){
     flightContainer.removeChild(flightContainer.firstChild)
    }

    let num_id=0 ;
   flights.forEach(flight=>{

    
let flightCard=document.createElement('div');
flightCard.classList.add('card') ;

let id=document.createElement('p');
id.classList.add('id');
id.textContent= parseInt( num_id+1);




let from=document.createElement('p');
from.classList.add('from');
from.textContent='From :' + flight.from ;
flightCard.appendChild(from);

let to=document.createElement('p');
to.classList.add('from');
to.textContent='To :'+ flight.to ;
flightCard.appendChild(to);

let price=document.createElement('p');
price.classList.add('price');
price.textContent='price :'+ flight.price ;
flightCard.appendChild(price);


let d_date=document.createElement('p');
d_date.classList.add('d_date');
d_date.textContent='Depart date :'+ flight.dates[0].depart ;
flightCard.appendChild(d_date);

let r_date=document.createElement('p');
r_date.classList.add('r_date');
r_date.textContent='Return date :'+ flight.dates[1].return ;
flightCard.appendChild(r_date);

const addButton = document.createElement('button')
addButton.textContent= 'add '
addButton.addEventListener('click',()=>addcart_func(flight.id))
flightCard.appendChild(addButton)

flightContainer.appendChild(flightCard)

num_id=num_id+1 ;
});
}


const admin=localStorage.getItem('admin');

const addB=document.getElementById('add_flight') ;


console.log('admin value:', admin); // Debugging


function check_admin (admin ,addB){

    if(admin=='true'){

        addB.style.display='block ';
    }
    else{
        addB.style.display='none';
    }
    

}


const sort_b = document.getElementById('sort');

// Use an anonymous function to set up the event listener
sort_b.addEventListener('click', function() {
    sort_func(flights);
});

function sort_func(flights) {
    flights.sort(function(a, b) {
        return parseFloat(a.price) - parseFloat(b.price);
    });

    displayflights(flights);
   
}


const add_b=document.getElementById('add_flight');

add_b.addEventListener('click',(e)=>{

    e.preventDefault();

    const add_b=document.getElementById('add_flight');

const from_name=document.getElementById('from_name');
const to_name=document.getElementById('to_name')
const price=document.getElementById('price')
const depart_date=document.getElementById('d_date');
const return_date=document.getElementById('r_date');

const addForm = document.getElementById('form')

    addflight(from_name.value , to_name.value ,price.value ,depart_date.value ,return_date.value);


    function addflight(from,to,price,Depart_date,Return_date){
        const newflight = {
          id: flights.length + 1,
          from,
          to,
          price,
          dates:[
            {depart: Depart_date},
            {return: Return_date}
        ]
         // Depart_date,
        //  Return_date,
    
        }

        flights.push(newflight);
        displayflights(flights);
      }
})

const s_btn=document.getElementById('search');
const s_num=document.getElementById('s_num');





const log_out=document.getElementById('logout');

function logout_func(){
    localStorage.clear();
    var customURL = 'file.html';
    window.location.href = customURL;
    window.location.assign(customURL);
    
    // Current page won't get saved in the history:
    window.location.replace(customURL); 
    
    
    // Gecko only:
    window.document.location = customURL
}
log_out.addEventListener('click',logout_func);

function addcart_func(){


}

check_admin( admin,addB);

function search_func(){

    if (s_num.value === null || s_num.value === "") {
        displayflights(flights);
    } else {
        // Filter flights based on the price
        let apdate_array = flights.filter(e => e.price === parseFloat(s_num.value));
        displayflights(apdate_array);
    }
 
 }
 s_btn.addEventListener('click',search_func);

displayflights(flights);