const ship = (length) => {
  const hits = Array(length);

  const getLength = () => length;
  const getHits = () => hits.filter((spot, index) => spot === index);

  const hit = (spot) => {
    hits[spot] = spot;
  };

  const isSunk = () => getHits().length === length;

  return { getLength, getHits, hit, isSunk };
};

export default ship;
