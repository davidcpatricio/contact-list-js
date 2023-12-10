const Contact = require('../models/ContactModel')

exports.index = (req, res) => {
  res.render('contact', { contact: {} })
};

exports.create = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.create();
    
    if (contact.errors.length > 0) {
      req.flash('errors', contact.errors);
      req.session.save(() => res.redirect('/contact'));
      return;
    };

    req.flash('success', 'Contact successfully created!');
    req.session.save(() => res.redirect(`contact/${contact.contact._id}`));
    return;
  } catch (e) {
    console.log(e);
    return res.render('404');
  }
};

exports.update = async (req, res) => {
  if (!req.params.id) return res.render('404');

  const contact = await Contact.searchById(req.params.id);
  if (!contact) return res.render('404');

  res.render('contact', { contact });
};