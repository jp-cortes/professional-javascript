class Field {
    errors: string[] = [];
    input: HTMLInputElement;

    constructor(input: HTMLInputElement) {
        this.input = input;
        this.errors = [];

        let errorMessage: HTMLElement = document.createElement('p') as HTMLElement;
        errorMessage.className = 'text-danger';
        this.input.parentNode?.insertBefore(errorMessage, this.input.nextSibling)

        this.input.addEventListener('input', () => {
            this.errors =  [];
            this.validate();
           return errorMessage.innerText = this.errors[0] || '';
        });
    }
    validate() {}

}

function RequiredFieldDecorator(field: Field): Field {
    let validateField = field.validate;
    field.validate = function() {
        validateField();
        let inputValue = field.input.value;
        if(!inputValue) {
            field.errors.push('Required*');
        }
    }

    return field;
}

function emailFieldDecorator(field: Field): Field{
    let validateEmail = field.validate;

    field.validate = function() {
        validateEmail();
        let inputValue = field.input.value;

        if(!inputValue.includes('@')) {
            field.errors.push('Must be  an email*');
        }
    };

    return field;
}

let field = new Field(document.getElementById('email')  as HTMLInputElement);
field = RequiredFieldDecorator(field)
field = emailFieldDecorator(field)