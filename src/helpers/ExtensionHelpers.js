import Toast from './responseHandler';

const getAccounts = callback => {
  const chrome = window.chrome;
  chrome.storage.sync.get(null, callback);
};

const addWatchOnlyWallet = (newAcc, callback) => {
  const chrome = window.chrome;
  try {
    chrome.storage.sync.set(newAcc, callback);
  } catch (e) {
    Toast.responseHandler('Something went wrong!', Toast.ERROR);
  }
};

const addWalletToStore = (address, encStr, nickname, callback) => {
  const chrome = window.chrome;
  nickname = nickname.replace(/(<([^>]+)>)/gi, '');
  const value = {
    nick: nickname,
    priv: encStr,
    type: 'wallet'
  };
  const obj = {};
  obj[address] = JSON.stringify(value);
  chrome.storage.sync.set(obj, callback);
};

export default {
  getAccounts,
  addWatchOnlyWallet,
  addWalletToStore
};
