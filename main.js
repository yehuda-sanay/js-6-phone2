const PHONE_API =
  "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
const USERS_API =
  "https://my-json-server.typicode.com/Jeck99/fake-server/users";
let cardse = document.getElementById("cards_div");

async function getPhoneApi() {
  try {
    return await fetch(`${PHONE_API}`).then((res) => res.json());
  } catch (error) {
  } finally {
  }
}

function printToConsole() {
  getPhoneApi().then((result) => {
    console.log(result);
  });
}
printToConsole();

async function printCard() {
  // console.log(cardse)
  let result = await getPhoneApi();
  result.forEach((phone) => {
    cardse.innerHTML+= `
        <div class="col-3 p-2" style="border:solid black;" id="${phone.id}">
            <div class="text-warning" "card"  style="width: 13rem;" color:red;">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">brand: ${phone.brand}</h5>
            <p class="card-text">price: ${phone.price}</p>
            <p class="card-text">color: ${phone.color}</p>
            <p class="card-text">creatdAt: ${phone.createdAt}</p>
            <p class="card-text">isAvailable: ${phone.isAvailable}</p>
            <p class="card-text">princ: ${phone.price}</p>
            <p class="card-text">ram: ${phone.ram}</p>
            <button onclick="deletePhone('${phone.id}')">remove</button>
            </div>
        </div>
        </div>
      `;
  });
}


async function deletePhone(id){
    try{
        let response = await fetch(`${PHONE_API}/${id}`,{method:"DELETE"})
        if(response.status <=299) 
          document.getElementById(id).remove()
    }
    catch{}
    finally{}
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
  let tablebody=document.getElementById("tbody");
  let result = await getUsersApi();
  result.forEach((user) => {
    tablebody.innerHTML += `<tr id="${user.index}">
    <td>${user.name.first}</td>
    <td>${user.name.last}</td>
    <td>${user.email}</td>
    <td>${user.phone}</td>
        <td>${user._id}</td>
        <td>${user.picture}</td>
        <td>${user.index}</td>
        <td><button onclick="deleteUser()">remove</button></td>
        </tr> 
      `;
  });
;}


async function deleteUser(index){
    try{
        let responsee = await fetch(`${USERS_API}/${index}`,{method:"DELETE"})
        if(responsee.status <=299) 
        document.getElementById(index).remove()
    }
    catch{}
    finally{}
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


async function postUser(){
      try{
          const data={
              name:{
                first: document.getElementById('first_name').value,
                last: document.getElementById('last_name').value ,
              },
              email: document.getElementById('email').value ,
              phone: document.getElementById('phone').value ,
              // id: document.getElementById('id').value ,
              picture: document.getElementById('picture').value,
              index: document.getElementById('index').value
          }
          let response =  await fetch(`${USERS_API}`,
          {
              method:"POST",
              body:JSON.stringify(data),
              headers: {
                  'Contect-Type': 'application/json'
              },
          }).then(res=>res.json())

          console.log(response)
      }
      catch(err){}
      finally{}
  }
