const seguridad = () => {
  if (localStorage.getItem("name") && localStorage.getItem("username")) {
    console.log("Tiene usuario y contraseña");
  } else {
    console.log("NOOO Tiene usuario y contraseña");
    location.href = "/"; 
  }
};

function signOut() {
  console.log("saliendo..");
  localStorage.clear();
 };

seguridad();
