
let knygu_katalogas =[

    {
        id:1,
        ISBN:"GR1236K",
        Leidimo_metai:"2018",
        Pavadinimas:"Mano mintys debesyse",
        Puslapiu_skaicius:"300",
    },
    {
        id:2,
        ISBN:"GR54DA",
        Leidimo_metai:"2015",
        Pavadinimas:"Tamsa",
        Puslapiu_skaicius:"250",
    },
    {
        id:3,
        ISBN:"GKASDIO",
        Leidimo_metai:"2020",
        Pavadinimas:"Paskutinis",
        Puslapiu_skaicius:"269",
    },
    {
        id:4,
        ISBN:"KDASDSA",
        Leidimo_metai:"2019",
        Pavadinimas:"Mano",
        Puslapiu_skaicius:"360",
    },
]
let knygu_biografija =[
    {
        id:5,
        ISBN:"OSPASD",
        Leidimo_metai:"2021",
        Pavadinimas:"Kate",
        Puslapiu_skaicius:"182",
    },
    {
        id:6,
        ISBN:"D569DG",
        Leidimo_metai:"362",
        Pavadinimas:"Vejas",
        Puslapiu_skaicius:"222",
    },
    {
        id:7,
        ISBN:"ZHDFC65",
        Leidimo_metai:"2023 (naujas knyga)",
        Pavadinimas:"Rasytojas",
        Puslapiu_skaicius:"230",
    },
    {
        id:8,
        ISBN:"KJHFON0",
        Leidimo_metai:"2020",
        Pavadinimas:"Sampanes",
        Puslapiu_skaicius:"220",
    },
 ]
let knygu_istorija =[
    {
        id:9,
        ISBN:"LKD52F",
        Leidimo_metai:"2016",
        Pavadinimas:"Zana",
        Puslapiu_skaicius:"123",
    },
    {
        id:10,
        ISBN:"LDKS52C",
        Leidimo_metai:"2017",
        Pavadinimas:"Amzius",
        Puslapiu_skaicius:"232",
    },
    {
        id:11,
        ISBN:"HG56FDS",
        Leidimo_metai:"2019",
        Pavadinimas:"Anyta",
        Puslapiu_skaicius:"252",
    },
    {
        id:12,
        ISBN:"KDLASO8",
        Leidimo_metai:"2021",
        Pavadinimas:"Student_loans",
        Puslapiu_skaicius:"169",
    },
]

console.log("Grozine literatura (4 knygu):")
for(let knygu of knygu_katalogas){
    console.log('-------------------')
    for(let knygudata in knygu){
        if(knygudata==='ISBN'){
            console.log(`ISBN:${knygu[knygudata ]}`)
        }else{
        if(knygudata==='Leidimo_metai'){
            console.log(`Leidimo_metai:${knygu[knygudata]}`)
        }else{
        if(knygudata==='Pavadinimas'){
            console.log(`Pavadinimas:${knygu[knygudata]}`)
        }else{
        if(knygudata==='Puslapiu_skaicius'){
            console.log(`Puslapiu_skaicius:${knygu[knygudata]}`)
        }else{
                }
            }
        }
        }
    
    }
    
}
console.log("Grozio Biografija (4 knygu):")
for(let knygu of knygu_biografija){
    console.log('-------------------')
    for(let knygudata in knygu){
        if(knygudata==='ISBN'){
            console.log(`ISBN:${knygu[knygudata ]}`)
        }else{
        if(knygudata==='Leidimo_metai'){
            console.log(`Leidimo_metai:${knygu[knygudata]}`)
        }else{
        if(knygudata==='Pavadinimas'){
            console.log(`Pavadinimas:${knygu[knygudata]}`)
        }else{
        if(knygudata==='Puslapiu_skaicius'){
            console.log(`Puslapiu_skaicius:${knygu[knygudata]}`)
        }else{
                }
            }
        }
        }
    
    }
    
}
console.log("Grozine istorija (4 knygu):")
for(let knygu of knygu_istorija){
    console.log('-------------------')
    for(let knygudata in knygu){
        if(knygudata==='ISBN'){
            console.log(`ISBN:${knygu[knygudata ]}`)
        }else{
        if(knygudata==='Leidimo_metai'){
            console.log(`Leidimo_metai:${knygu[knygudata]}`)
        }else{
        if(knygudata==='Pavadinimas'){
            console.log(`Pavadinimas:${knygu[knygudata]}`)
        }else{
        if(knygudata==='Puslapiu_skaicius'){
            console.log(`Puslapiu_skaicius:${knygu[knygudata]}`)
        }else{
                }
            }
        }
        }
    
    }
    
}
console.log(knygu[knygudata]);
    


    

