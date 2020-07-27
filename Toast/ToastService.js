const changeObject = {};

let data = { message: "", position: "" };

function broadcast() {
  Object.keys(changeObject).forEach((k) => changeObject[k]());
}

const ToastService = {
  get: () => data,

  set: async (newData) => {
    data.message = newData.message;
    data.position = !!newData.position ? newData.position : "bottom";
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

export { ToastService };
