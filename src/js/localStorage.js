const loadStorage = key => {
  try {
    let state = localStorage.getItem(key);

    return (moviesState = JSON.parse(state));
  } catch (error) {
    console.log('Error loadStorage: ', error);
  }
};

const saveStorage = (key, value) => {
  try {
    const state = JSON.stringify(value);
    localStorage.setItem(key, state);
  } catch (error) {
    console.log('Error saveStorage: ', error);
  }
};

const removeStorage = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log('Error removeStorage: ', error);
  }
};

export { loadStorage, saveStorage, removeStorage };
