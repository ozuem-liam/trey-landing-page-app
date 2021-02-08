export default function validate(values) {
    let errors = {}

    if(!values.name.trim()) {
        errors.name = "Name required"
    }

    //Email
    if(!values.email) {
        errors.email = "Email required"
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid"
    }

    //Number
    if(!values.number) {
        errors.number ="Number required"
    } else if(values.number.length < 11) {
        errors.number = "Number is invalid"
    }

    return errors;
}