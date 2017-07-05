const checkAllItemsSeen = (numItems, callback) => {
  const items = [];
  let isResolved = false;
  return {
    update(item) {
      if (items.indexOf(item) < 0) items.push(item);
      if (items.length === numItems) {
        if (!isResolved) callback(items);
        isResolved = true;
      }
    }
  };
};

export default checkAllItemsSeen;
