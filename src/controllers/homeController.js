exports.homepage = (req, res) => {
  res.render('index', {
    title: 'Page title',
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  });
  return;
};

exports.processPost = (req, res) => {
  res.send(req.body);
  return;
};
