
function userDetails(event){
    event.preventDefault()
    const nameInput = event.target.name.value;
    console.log("****",nameInput);
    const phone_number = event.target.number.value;
    const emailInput = event.target.email_id.value;
    const myobj = {
      nameInput,
      phone_number,
      emailInput
    };
    axios.post("https://crudcrud.com/api/2699f5dbfb3e4572b03d5cb39f1a35ae/userDetails")
    .then((response)=>{
       showOnScreen(response.data)
    }).catch((err)=>{
       document.body.innerHTML = document.body.innerHTML + "<h3> Something Went Wrong </h3>";
       console.log(err);
    })
    // localStorage.setItem(myobj.emailInput, JSON.stringify(myobj) )
    // showOnScreen(myobj)
  }

  window.addEventListener("DOMContentLoaded", ()=>{
    axios.get("https://crudcrud.com/api/2699f5dbfb3e4572b03d5cb39f1a35ae/userDetails/")
    .then((response)=>{
     console.log(response.data);
    }).catch(()=>{
      console.log(err);
    })
  })
  function showNewUserOnScreen(user)
  {
    user ={
      _id: '',
      name: '',
      email: '',
      phonenumber: ''
    }
    document.getElementById('name').value= "";
      document.getElementById('number').value= "";
      document.getElementById('email').value="";

      if(localStorage.getItem(user.emailInput) != null){
        removeUserFromScreen(user.emailInput);
      }
      const parentNode = document.getElementById('users');
      const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
                             <button onclick=deleteUser ('${user._id}')>Delete user</button>
                             <button onclick=editUserDetail('${user._id}','${user.name}','${user.phonenumber}','${user.email})>Edit user</button>
                             </li>`
  parentNode.innerHTML = parentNode.innerHTML + childHTML; 
  }

  function editUserDetails(email, name, phonenumber, userId){
     document.getElementById('name').value = name;
     document.getElementById('number').value = phonenumber;
     document.getElementById('email').value = email;

     deleteUser(userId);
  }

 function deleteUser(userId){
  axios.delete(`https://crudcrud.com/api/2699f5dbfb3e4572b03d5cb39f1a35ae/userDetails/${userId}`)
  .then((response)=>{
     removeUserFromScreen(userId)
  })
  .catch((err)=>{
    console.log(err);
  })
 }

 function removeUserFromScreen(userId){
  const parentNode = document.getElementById('users');
  const nodeTobeDeleted = document.getElementById(userId);
  if(nodeTobeDeleted){
    parentNode.removeChild(nodeTobeDeleted)
  }
 }

  // function showOnScreen(obj){
  //   const userList = document.querySelector('#users');
  //   const li = document.createElement('li');
  //   li.textContent = obj.nameInput + ' - ' + obj.emailInput + ' - ' + obj.phone_number ;  
   
  //   const createEle = document.createElement('input');
  //   createEle.type = 'button';
  //   createEle.value = "Delete"
  //   createEle.id ="buttonid";
  //   createEle.onclick = ()=>{
  //     localStorage.removeItem(obj.emailInput);
  //     userList.removeChild(li);
  //   }
  //   const createBtn= document.createElement('input');
  //   createBtn.type = 'button';
  //   createBtn.value = "Edit"
  //   createBtn.id ="edit";
  //   createBtn.onclick = ()=>{
  //     localStorage.removeItem(obj.emailInput)
  //     user.removeChild(li)
  //     document.getElementById('name').value= obj.nameInput;
  //     document.getElementById('number').value= obj.phone_number;
  //     document.getElementById('email').value= obj.emailInput;
      
  //   }

  //   li.appendChild(createBtn);
  //   li.appendChild(createEle);
  //   userList.appendChild(li);
  // } 

   
//     var createDeletenode = document.createTextNode('Delete');
//     createEle.appendChild(createDeletenode);
  

   
//     var createEditnode = document.createTextNode('Edit');
//     createBtn.appendChild(createEditnode);
//     li.appendChild(document.createTextNode(`${user.nameInput}: ${user.emailInput}: ${user.phone_number}`));
//     li.appendChild(createEle);
//     li.appendChild(createBtn);
//      userList.appendChild(li);
//      li.id = user.nameInput;

//      var buttonid = document.getElementById(user.nameInput);
//     var listid = document.getElementById(user.nameInput);
  
//      buttonid.addEventListener('click',dltFunction);
//     function dltFunction(e){
//       e.preventDefault(); 
//         if(e.target.value=="Delete"){
//           axios.delete("https://crudcrud.com/api/5a42796ee4ee4a548d143986769ab381/user_details/"+user._id)
//           listid.remove();
      
//         }
//         else{
          
//         }
//     }

    
// }
   
