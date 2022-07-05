const PHONE_API =
  "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
const USERS_API =
  "https://my-json-server.typicode.com/Jeck99/fake-server/users";
let cardse = document.getElementById("cards_div");

async function getPhoneApi() {
  try {
    return await fetch(`${PHONE_API}`).then((res) => res.json());
  } catch (error) {
  } finally {cardse.innerHTML=""
  }
}

function printToConsole() {
  getPhoneApi().then((result) => {
    console.log(result);
  });
}
printToConsole();

async function printCard() {
  cardse.innerHTML=`<img style ="height: 70vh;margin: auto auto;" src="https://64.media.tumblr.com/bc8cad658555876277a3fe89c0ed5033/tumblr_n6cqewpgbh1svwlszo1_400.gifv">`
  // console.log(cardse)
  let result = await getPhoneApi();
  result.forEach((phone) => {
    cardse.innerHTML += `
        <div class="rounded col-lg-4 col-sm-6 col-xs-12 col-12 mx-7" id="${phone.id}">
            <div class="text-black " "card"  >
            <img class="card-img-top" src="https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">brand: ${phone.brand}</h5>
            <p class="card-text">price: ${phone.price}</p>
            <p class="card-text">color: ${phone.color}</p>
            <p class="card-text">creatdAt: ${phone.createdAt}</p>
            <p class="card-text">isAvailable: ${phone.isAvailable}</p>
            <p class="card-text">princ: ${phone.price}$</p>
            <p class="card-text">ram: ${phone.ram}</p>
            <button type="button" class="btn btn-danger" onclick="deletePhone('${phone.id}')">remove</button>
            </div>
        </div>
        </div>
      `;
  });
}

async function deletePhone(id) {
  try {
    let response = await fetch(`${PHONE_API}/${id}`, { method: "DELETE" });
    if (response.status <= 299) document.getElementById(id).remove();
  } catch {
  } finally {
  }
}

async function getUsersApi() {
  try {
    return await fetch(`${USERS_API}`).then((res) => res.json());
  } catch (error) {
  } finally {
  }
}

function printUsersToConsole() {
  getUsersApi().then((result) => console.log(result));
}
printUsersToConsole();

async function printUser() {
  let tablebody = document.getElementById("tbody");
  let result = await getUsersApi();
  result.forEach((user) => {
    tablebody.innerHTML += `<tr id="${user.id}">
    <td>${user.name.first} ${user.name.last}</td>
    <td>${user.age}</td>
    <td>${user.email}</td>
    <td>${user.phone}</td>
        <td>${user.picture}</td>
        <td><button type="button" class="btn btn-danger" onclick="deleteUser(${user.id})">remove</button></td>
        </tr> 
      `;
  });
}

async function deleteUser(id) {
  try {
    let responsee = await fetch(`${USERS_API}/${id}`, { method: "DELETE" });
    if (responsee.status <= 299) document.getElementById(id).remove();
  } catch {
  } finally {
  }
}
// async function deletePhone(id){
//   try{
//       let response = await fetch(`${PHONE_API}/${id}`,{method:"DELETE"})
//       if(response.status <=299)
//         document.getElementById(id).remove()
//   }
//   catch{}
//   finally{}
// }

async function postUser() {
  try {
    const data = {
      name: {
        first: document.getElementById("first_name").value,
        last: document.getElementById("last_name").value,
      },
      age: document.getElementById("age").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      // id: document.getElementById('id').value ,
      picture: document.getElementById("picture").value,
      index: document.getElementById("index").value,
    };
    let response = await fetch(`${USERS_API}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Contect-Type": "application/json",
      },
    }).then((res) => res.json());

    console.log(response);
  } catch (err) {
  } finally {
  }
}
