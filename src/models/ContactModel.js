const mongoose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: false, default: '' },
  email: { type: String, required: false, default: '' },
  phoneNumber: { type: String, required: false, default: '' },
  createdDate: { type: Date, default: Date.now },
});

const ContactModel = mongoose.model('Contact', ContactSchema);

class Contact {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.contact = null;
  };

  static async searchById(id) {
    if (typeof id !== 'string') return;
    const user = await ContactModel.findById(id);
    return user;
  };

  async create() {
    this.validate();
    if (this.errors.length > 0) return;
    this.contact = await ContactModel.create(this.body);
  };
  
  validate() {
    this.cleanUp();
  
    if (this.body.email && !validator.isEmail(this.body.email)) {
      this.errors.push('Invalid e-mail address.');
    };

    if (!this.body.firstName) {
      this.errors.push('First name is required.');
    };

    if (!this.body.email && !this.body.phoneNumber) {
      this.errors.push('Either e-mail address or phone number is required.');
    };
  };
  
  cleanUp() {
    for (let key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      };
    };
  
    this.body = {
      firstName: this.body.firstName,
      lastName: this.body.lastName,
      email: this.body.email,
      phoneNumber: this.body.phoneNumber
    };
  };
};

module.exports = Contact;
