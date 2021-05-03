'use strict';

let hours= ['6am', '7am', '8am', '9am', '10am' , '11am' , '12pm' , '1pm' , '2pm' , '3pm' , '4pm' , '5pm' , '6pm' , '7pm'];
let list=document.getElementById("lists1");
function avgCust(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
 }
let Seattle = {
    locationName : 'seattle',
    min_max_hourlyCoustomers:0,
    Average_Cookies:6.3,
    total:0,
    sales:[],
    customerPerHour:[],
    getCust: function() {
       return this.min_max_hourlyCoustomers= avgCust(23, 65) ;
    },
     getCookies: function(){
       for(let i=0 ; i < hours.length ; i++)
        {
           this.sales.push(this.customerPerHour[i]*this.Average_Cookies);
         }
     },
    getCoustomerPerHour: function()
    {
        for(let i = 0 ; i < hours.length ; i++){
        this.customerPerHour.push(this.getCust());
       console.log(this.customerPerHour[i]+" custome per hour")
        }
    },
    getCokiesAvg : function()
    {
        for(let k = 0 ; k < hours.length ; k++){
            this.getCoustomerPerHour();
            let resulets=Math.floor(this.customerPerHour[k] * this.Average_Cookies )
            this.sales.push(resulets);
            this.total+=resulets;
       console.log(this.Average_Cookies);
        console.log(this.sales[k]+" cookies sold")
        }
    },
    render : function()
    {
        let pe1=document.createElement('p');
        list.appendChild(pe1);
        let ule1=document.createElement('ul')
        list.appendChild(ule1);
        pe1.textContent=this.locationName;
        for(let j=0 ; j <hours.length ; j++)
        {
            let lie1=document.createElement('li');
            ule1.appendChild(lie1);
            if(TimeRanges.length -1 === j)
             {
                lie1.textContent=`${hours[j]} : ${this.total} cookies`;
            }
                lie1.textContent=`${hours[j]} : ${this.sales[j]} cookies`;
                this.total=this.total+this.sales[j];
        }
        let liRsults=document.createElement('li');
        ule1.appendChild(liRsults)
        liRsults.textContent=`total : ${this.total}`;
    }
};

Seattle.getCoustomerPerHour();
Seattle.getCokiesAvg();
 Seattle.render();

// -------------------------------------------------------------------------------

let Tokyo = {
    locationName : 'Tokyo',
    min_max_hourlyCoustomers:0,
    Average_Cookies:1.2,
    total:0,
    sales:[],
    customerPerHour:[],
    getCust: function() {
       return this.min_max_hourlyCoustomers= avgCust(3, 24) ;
    },
     getCookies: function(){
       for(let i=0 ; i < hours.length ; i++)
        {
           this.sales.push(this.customerPerHour[i]*this.Average_Cookies);
         }
     },
    getCoustomerPerHour: function()
    {
        for(let i = 0 ; i < hours.length ; i++){
        this.customerPerHour.push(this.getCust());
       console.log(this.customerPerHour[i]+" custome per hour")
        }
    },
    getCokiesAvg : function()
    {
        for(let k = 0 ; k < hours.length ; k++){
            this.getCoustomerPerHour();
            let resulets=Math.floor(this.customerPerHour[k] * this.Average_Cookies )
            this.sales.push(resulets);
            this.total+=resulets;
       console.log(this.Average_Cookies);
        console.log(this.sales[k]+" cookies sold")
        }
    },
    render : function()
    {
        let pe1=document.createElement('p');
        list.appendChild(pe1);
        let ule1=document.createElement('ul')
        list.appendChild(ule1);
        pe1.textContent=this.locationName;
        for(let j=0 ; j <hours.length ; j++)
        {
            let lie1=document.createElement('li');
            ule1.appendChild(lie1);
            if(TimeRanges.length -1 === j)
             {
                lie1.textContent=`${hours[j]} : ${this.total} cookies`;
            }
                lie1.textContent=`${hours[j]} : ${this.sales[j]} cookies`;
                this.total=this.total+this.sales[j];
                console.log(this.sales[j]);
        }
        let liRsults=document.createElement('li');
        ule1.appendChild(liRsults)
        liRsults.textContent=`total : ${this.total}`;
    }
};

Tokyo.getCoustomerPerHour();
Tokyo.getCokiesAvg();
Tokyo.render();

// //-----------------------------------------------------------------------------------

let Dubai = {
    locationName : 'Dubai',
    min_max_hourlyCoustomers:0,
    Average_Cookies:3.7,
    total:0,
    sales:[],
    customerPerHour:[],
    getCust: function() {
       return this.min_max_hourlyCoustomers= avgCust(11, 38) ;
    },
     getCookies: function(){
       for(let i=0 ; i < hours.length ; i++)
        {
           this.sales.push(this.customerPerHour[i]*this.Average_Cookies);
         }
     },
    getCoustomerPerHour: function()
    {
        for(let i = 0 ; i < hours.length ; i++){
        this.customerPerHour.push(this.getCust());
       console.log(this.customerPerHour[i]+" custome per hour")
        }
    },
    getCokiesAvg : function()
    {
        for(let k = 0 ; k < hours.length ; k++){
            this.getCoustomerPerHour();
            let resulets=Math.floor(this.customerPerHour[k] * this.Average_Cookies )
            this.sales.push(resulets);
            this.total+=resulets;
       console.log(this.Average_Cookies);
        console.log(this.sales[k]+" cookies sold")
        }
    },
    render : function()
    {
        let pe1=document.createElement('p');
        list.appendChild(pe1);
        let ule1=document.createElement('ul')
        list.appendChild(ule1);
        pe1.textContent=this.locationName;
        for(let j=0 ; j <hours.length ; j++)
        {
            let lie1=document.createElement('li');
            ule1.appendChild(lie1);
            if(TimeRanges.length -1 === j)
             {
                lie1.textContent=`${hours[j]} : ${this.total} cookies`;
            }
                lie1.textContent=`${hours[j]} : ${this.sales[j]} cookies`;
                this.total=this.total+this.sales[j];
                console.log(this.sales[j]);
        }
        let liRsults=document.createElement('li');
        ule1.appendChild(liRsults)
        liRsults.textContent=`total : ${this.total}`;
    }
};

Dubai.getCoustomerPerHour();
Dubai.getCokiesAvg(); 
Dubai.render();
//------------------------------------------------------------------------------

let Paris = {
    locationName : 'Paris',
    min_max_hourlyCoustomers:0,
    Average_Cookies:2.3,
    total:0,
    sales:[],
    customerPerHour:[],
    getCust: function() {
       return this.min_max_hourlyCoustomers= avgCust(20, 38) ;
    },
     getCookies: function(){
       for(let i=0 ; i < hours.length ; i++)
        {
           this.sales.push(this.customerPerHour[i]*this.Average_Cookies);
         }
     },
    getCoustomerPerHour: function()
    {
        for(let i = 0 ; i < hours.length ; i++){
        this.customerPerHour.push(this.getCust());
       console.log(this.customerPerHour[i]+" custome per hour")
        }
    },
    getCokiesAvg : function()
    {
        for(let k = 0 ; k < hours.length ; k++){
            this.getCoustomerPerHour();
            let resulets=Math.floor(this.customerPerHour[k] * this.Average_Cookies )
            this.sales.push(resulets);
            this.total+=resulets;
       console.log(this.Average_Cookies);
        console.log(this.sales[k]+" cookies sold")
        }
    },
    render : function()
    {
        let pe1=document.createElement('p');
        list.appendChild(pe1);
        let ule1=document.createElement('ul')
        list.appendChild(ule1);
        pe1.textContent=this.locationName;
        for(let j=0 ; j <hours.length ; j++)
        {
            let lie1=document.createElement('li');
            ule1.appendChild(lie1);
            if(TimeRanges.length -1 === j)
             {
                lie1.textContent=`${hours[j]} : ${this.total} cookies`;
            }
                lie1.textContent=`${hours[j]} : ${this.sales[j]} cookies`;
                this.total=this.total+this.sales[j];
                console.log(this.sales[j]);
        }
        let liRsults=document.createElement('li');
        ule1.appendChild(liRsults)
        liRsults.textContent=`total : ${this.total}`;
    }
};


Paris.getCoustomerPerHour();
Paris.getCokiesAvg();

Paris.render();
// //--------------------------------------------------------------------------------

let Lima = {
    locationName : 'Lima',
    min_max_hourlyCoustomers:0,
    Average_Cookies:4.6,
    total:0,
    sales:[],
    customerPerHour:[],
    getCust: function() {
       return this.min_max_hourlyCoustomers= avgCust(2, 16) ;
    },
     getCookies: function(){
       for(let i=0 ; i < hours.length ; i++)
        {
           this.sales.push(this.customerPerHour[i]*this.Average_Cookies);
         }
     },
    getCoustomerPerHour: function()
    {
        for(let i = 0 ; i < hours.length ; i++){
        this.customerPerHour.push(this.getCust());
       console.log(this.customerPerHour[i]+" custome per hour")
        }
    },
    getCokiesAvg : function()
    {
        for(let k = 0 ; k < hours.length ; k++){
            this.getCoustomerPerHour();
            let resulets=Math.floor(this.customerPerHour[k] * this.Average_Cookies )
            this.sales.push(resulets);
            this.total+=resulets;
       console.log(this.Average_Cookies);
        console.log(this.sales[k]+" cookies sold")
        }
    },
    render : function()
    {
        let pe1=document.createElement('p');
        list.appendChild(pe1);
        let ule1=document.createElement('ul')
        list.appendChild(ule1);
        pe1.textContent=this.locationName;
        for(let j=0 ; j <hours.length ; j++)
        {
            let lie1=document.createElement('li');
            ule1.appendChild(lie1);
            if(TimeRanges.length -1 === j)
             {
                lie1.textContent=`${hours[j]} : ${this.total} cookies`;
            }
                lie1.textContent=`${hours[j]} : ${this.sales[j]} cookies`;
                this.total=this.total+this.sales[j];
                console.log(this.sales[j]);
        }
        let liRsults=document.createElement('li');
        ule1.appendChild(liRsults)
        liRsults.textContent=`total : ${this.total}`;
    }
};

Lima.getCoustomerPerHour();
Lima.getCokiesAvg();

Lima.render();

