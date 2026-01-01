let config = {
    'imePrezime': {
        required: true,
        minLength: 3,
        maxLength: 50
    },
    'korisnickoIme': {
        required: true,
        minLength: 5,
        maxLength: 50
    },
    'email': {
        required: true,
        email: true,
        minLength: 5,
        maxLength: 50
    },
    'lozinka': {
        required: true,
        minLength: 7,
        maxLength: 25,
        matching: 'ponoviLozinku'
    },
    'ponoviLozinku': {
        required: true,
        minLength: 7,
        maxLength: 25,
        matching: 'lozinka'
    }
};

let validator = new Validator(config);