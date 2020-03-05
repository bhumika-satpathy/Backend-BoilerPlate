const ping = async (request, h) => {
  const res = 'Hello World';
  return h.res(res).code(200);
};


module.exports = { ping };
