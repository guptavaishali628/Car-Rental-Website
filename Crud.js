//GET METHOD:
let fetchData = async()=>{
    let api="http://localhost:3000/CarRental"

    let res=await fetch(api, {method: "GET"})

    let data = await res.json()

    console.log(data)
    
    let Show=document.querySelector("#display")
    data.map((e)=>{
        Show.innerHTML+=
        `
        <tr>
            <td>${e.Bname}</td>
            <td>${e.Bnumber}</td>
            <td>${e.Blicense}</td>
            <td>${e.Bcity}</td>
            <td>${e.Bpickup}</td>
            <td>${e.BdropOff}</td>
            <td>${e.BpickupDate}</td>
            <td>${e.BreturnDate}</td>
            <td>${e.Bvehicle}</td>
            <td>${e.Bpeople}</td>
            <td>${e.Price}</td>
            <td onclick="del('${e.id}')">Cancel</td>
        </tr>
        
        `
    })
}

//DELETE METHOD:
let del = (id) =>{
    let api = `http://localhost:3000/CarRental/${id}`  // id se delete krenge isliye id uthayenge 
    fetch(api,{method: "DELETE"})
}    

//POST METHOD:
// use trim method to remove white space:

let book=()=>{
    let Name = document.querySelector("#Bname").value.trim()
    let Number = document.querySelector("#Bnumber").value.trim()
    let License = document.querySelector("#Blicense").value.trim()
    let City = document.querySelector("#Bcity").value.trim()
    let Pickup = document.querySelector("#Bpickup").value.trim()
    let Dropoff = document.querySelector("#BdropOff").value.trim()
    let PickupDate = document.querySelector("#BpickupDate").value.trim()
    let ReturnDate = document.querySelector("#BreturnDate").value.trim()
    let Vehicle = document.querySelector("#Bvehicle").value.trim()
    let People = document.querySelector("#Bpeople").value.trim()

    let api = "http://localhost:3000/CarRental"

    fetch(api, {
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },

        body: JSON.stringify({
            Bname:Name,
            Bnumber:Number,
            Blicense:License,
            Bcity:City,
            Bpickup:Pickup,
            BdropOff:Dropoff,
            BpickupDate:PickupDate,
            BreturnDate:ReturnDate,
            Bvehicle:Vehicle,
            Bpeople:People,
            Price:1200
        })
    })
    location.href="Dashboard.html"
    return false
}

//fetchData() ----> already call on body by "onload()":
