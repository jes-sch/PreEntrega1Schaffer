/* DATOS PAGA EL LOGIN:
user: TutorCorrector
password: h0mer0
 */

alert(
"Hola Tutor Corrector, esta es mi Primera Entrega del Proyecto Final de JS para que corrija. Gracias, vuelva prontos."
);

/* let savedUser = "TutorCorrector"; */
//El savedUser me lo guardo para usar más adelante

let savedPassword = "h0mer0";

let nombreUser = prompt("Ingresá tu user / nombre de usuario");

alert("Hola " + nombreUser + ", bienvenido/a a mi proyecto (:");

function login () {
    let ingresar = false;

    for (let i = 2; i >= 0; i--) {
        let userPassword = prompt("Ingresá tu Password");
        if (userPassword == savedPassword) {
            alert ("Ingreso exitoso");
            ingresar = true;
            break;
        } else {
            alert ("Contraseña incorrecta");
        }
    }

    return ingresar;
}

if (login()){
    alert ("Ahora te voy a pedir unos datos para determinar si te conviene comprar en efectivo o en cuotas,  y ganarle a la inflación (guiño guiño)");
    let precioEfectivo = parseInt(prompt("Ingresá el precio total en efectivo"));
    let precioEnCuotas = parseInt(prompt("Ingresá el precio total en cuotas"));
    let cuotas = parseInt(prompt("Elegí la cantidad de cuotas: \n1- 1 cuota \n2 - 2 cuotas \n3 - 3 cuotas \n4- 4 cuotas \n5 - 5 cuotas \n6 - 6 cuotas"));


}else{
    alert ("Tu usuario quedó inhabilitado. Comunicate con el administrador.");
}

alert("FIN DE LA ENTREGA HASTA AHORA. Programa en desarrollo ;)");