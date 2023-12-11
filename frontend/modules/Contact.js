import validator from "validator";

export default class Contact {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  };

  events() {
    if (!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    })
  };

  validate(e) {
    const el = e.target;
    const firstNameInput = el.querySelector('input[name="firstName"]');
    const emailInput = el.querySelector('input[name="email"]');
    const phoneNumberInput = el.querySelector('input[name="phoneNumber"]');
    let error = false;

    if (!validator.isEmail(emailInput.value)) {
      alert('Invalid e-mail address.');
      error = true;
    };

    if (!firstNameInput.value) {
      alert('First name must not be empty.');
      error = true;
    };

    if (!emailInput.value && !phoneNumberInput.value) {
      alert('Either email and/or phone number must be filled in.');
      error = true;
    };

    if (!error) el.submit();
  };
};