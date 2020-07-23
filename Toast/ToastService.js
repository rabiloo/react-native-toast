const changeObject = {};

let data = '';

function broadcast() {
  Object.keys(changeObject).forEach((k) => changeObject[k]());
}

const ToastService = {
  get: () => data,

  set: async (newData) => {
    data = newData;
    broadcast();
  },

  addEventListener: (key, cb) => {
    changeObject[key] = () => cb(data);
  },

  removeEventListener: (key) => {
    if (changeObject[key]) {
      delete changeObject[key];
    }
  },
};

export {ToastService};
