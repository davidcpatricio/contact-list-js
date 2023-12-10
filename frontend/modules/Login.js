import validator from "validator";

export default class Login {
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
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');
    let error = false;

    if (!validator.isEmail(emailInput.value)) {
      alert('Invalid e-mail address.');
      error = true;
    };

    if (passwordInput.value.length < 3) {
      alert('Password must contain at least 3 characters.');
      error = true;
    };

    if (!error) el.submit();
  };
};