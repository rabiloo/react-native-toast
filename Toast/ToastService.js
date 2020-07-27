const changeObject = {};

let data = { message: "", position: "" };

function broadcast() {
  Object.keys(changeObject).forEach((k) => changeObject[k]());
}

/**
 * @param {String} message - Message toast
 * @param {Number} position - Position from bottom (pixel)
 */

const ToastService = {
  get: () => data,

  set: async ({message, position}) => {
    data.message = message;
    data.position = !!position ? position : "bottom";
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
