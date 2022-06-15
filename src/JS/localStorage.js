
const loadStorage = key => {
  try {
    
    let serializedState = localStorage.getItem(key);
    
    return (serializedState = JSON.parse(serializedState));
  } catch (err) {
    console.log(err);
  }
};

const saveStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.log(err);
  }
};

const removeStorage = key => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.log(err);
  }
};

export { loadStorage, saveStorage, removeStorage };
