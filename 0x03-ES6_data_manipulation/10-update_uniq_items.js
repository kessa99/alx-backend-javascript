const updateUniqueItems = (items) => {
  if (!(items instanceof Map)) {
    throw new Error('Connot process');
  }
  for (const [k, v] of items.entries()) {
    if (v === 1){
      items.set(k, 100);
    }
  }
  return items;
};

export default updateUniqueItems;
