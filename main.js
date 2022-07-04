const PHONE_API =
  "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
const USERS_API =
  "https://my-json-server.typicode.com/Jeck99/fake-server/users";

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
  let result = await getPhoneApi();
  result.forEach((phone) => {
    cards_div.innerHTML += `
        <div class="col-3 p-2" style="border:solid black;">
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
            <a onclick="deletePhone()" class="btn btn-primary">remove</a>
            </div>
        </div>
        </div>
      `;
  });
}
printCard();

async function deletePhone(id){
    try{
        return await fetch(`${PHONE_API}/${phone.id}`,{method:"DELETE"})
        .then(res=>res.json())
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
  let result = await getUsersApi();
  result.forEach((user) => {
    tbody.innerHTML += `<tr>
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
printUser()

async function deleteUser(){
    try{
        return await fetch(`${USERS_API}/${user.name.first}`,{method:"DELETE"})
        .then(res=>res.json())
    }
    catch{}
    finally{}
}

async function putUser(){
      try{
          const data={
              user:{
                  // name.first: first_name.value,
                  // name.last: last_name.value ,
                  email: email.value ,
                  phone: phore.value ,
                  id: id.value ,
                  picture: picture.value,
                  index: index.value
              }
          }
          return await fetch(`${USERS_API}`,
          {
              method:"POST",
              body:JSON.stringify(data),
              headers: {
                  'Contect-Type': 'application/json'
              },
          }) 
          .then(response=>
              response.json())
      }
      catch(err){}
      finally{}
  }

