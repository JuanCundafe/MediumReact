const URL_BASE = "https://reactsessions-ac545.firebaseio.com/equipouno";

const getPosts = async () => {
  const response = await fetch(`${URL_BASE}.json`);
  const data = await response.json();
  return data;
};

const getPost = async (key) => {
  const response = await fetch(`${URL_BASE}/${key}.json`);
  const data = await response.json();
  return data;
};

export { getPosts, getPost };
