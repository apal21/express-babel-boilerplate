const index = (req, res) => {
  res.send({ data: 'index route' });
};

const create = (req, res) => {
  res.send({ data: 'create route' });
};

const retrieve = (req, res) => {
  const { id } = req.params;
  res.send({ data: `retrieve route with id: ${id}` });
};

const update = (req, res) => {
  const { id } = req.params;
  res.send({ data: `update route with id: ${id}` });
};

const destroy = (req, res) => {
  const { id } = req.params;
  res.send({ data: `delete route with id: ${id}` });
};

export {
  index, create, retrieve, update, destroy,
};
