export const IsEmail=(email)=> {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
// export const IsEmail= /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export const Isphonenumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
// export const Isphonenumber = '[0-9]{10}';
   


export const name = /^[a-zA-Z ]+$/;
// export const name = /^[a-zA-Z ]+$/.test( 'John Doe');

export const validatePIN = /^(\d{4}|\d{6})$/;

// export const validatePIN = (pin) => {
//     return /^(\d{4}|\d{6})$/.test(pin);
// }
