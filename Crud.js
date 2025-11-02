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
            <td onclick="del('${e.id}')"><i class="fa fa-trash" aria-hidden="true"></i></td>
            <td onclick="formopen('${e.id}')><i class="fa-solid fa-pen"></i></td>
        </tr>
        
        `
    })
}

//DELETE METHOD:
let del = (id) =>{
    //------------------eror handling (try catch)------------------//
    try{
    let api = `http://localhost:3000/CarRental/${id}`  // id se delete krenge isliye id uthayenge 
    fetch(api,{method: "DELETE"})
    }
    catch(err){
     console.log("Server Error", err)
    }
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

let formopen=async(id)=>{
    let show = document.querySelector("#formshow");
    
    //GET method
    let api=`http://localhost:3000/CarRental/${id}`
    
    let res=await fetch(api,{method:"GET"})
    let data=await res.json();
    console.log(data);

    show.innerHTML=`
    <div class="booking-form-text">
           <center><form data-aos="fade-down" data-aos-duration="2000">
                
                <label>Full Name</label><br>
                <input type="text" id="Bname" placeholder="Enter you Name" value="${data.Name}"><br>

                <label>Contact Number</label><br>
                <input type="text" id="Bnumber" placeholder="Enter your Contact Number" value="${data.Number}"><br>

                <label>Driver's License Number</label><br>
                <input type="text" id="Blicense" placeholder="Enter you License Number" value="${data.License}"><br>

                <label>City</label>
                <select id="Bcity>
                    <option value="Select">Select your City</option>
                    <option value="Bhopal">Bhopal</option>
                    <option value="Indore">Indore</option>
                    <option value="Ujjain">Ujjain</option>
                    <option value="Gwalior">Gwalior</option>
                    <option value="Jhanshi">Jhanshi</option>
                    <option value="Lucknow">Lucknow</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                </select><br>

                <label>Enter your Pickup Location</label><br>
                <input type="text" id="Bpickup" placeholder="Enter your Pickup-Location" value="${data.Pickup}"><br>

                <label>Enter your Drop-off Location</label><br>
                <input type="text" id="BdropOff" placeholder="Enter your Pickup-Location" value="${data.Dropoff}"><br>

                <label>Select your Pickup Date</label><br>
                <input type="date" id="BpickupDate" value="${data.PickupDate}"><br>

                <label>Select your Return Date</label><br>
                <input type="date" id="BreturnDate" value="${data.ReturnDate}"><br>

                <label>Vehicle</label><br>
                <select id="Bvehicle">
                    <option value="Select">Select your fav Vehicle</option>
                    <option value="BMW">BMW</option>
                    <option value="Tata">Tata</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Harrier">Harrier</option>
                    <option value="Thar">Thar</option>
                    <option value="Defender">Defender</option>
                    <option value="Kia">Kia</option>
                    <option value="XUV-300">XUV-300</option>
                </select><br>

                <label>Number of People</label><br>
                <input type="text" id="Bpeople" placeholder="Enter number of people" value="${data.People}"><br>

                <input type="submit" value="Update Now" onclick="return update('${data.id}')" style="cursor: pointer; width: 20%;" class="btn"></input>
            
            </form></center>
        </div>
    `
}
