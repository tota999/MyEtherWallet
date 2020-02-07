import BigNumber from 'bignumber.js';
import {
  bestRateForQuantity,
  bestProviderForQuantity,
  dynamicSortMultiple
} from './sortAndIdentify';
import * as utils from './utils';
import qrcodeBuilder from './qrCodeBuilder';
import hasIcon from './haveIcon';
import { canValidateMulticoin, canValidateCoin } from './canValidate';
const isValidEntry = utils.isValidEntry;
const checkInvalidOrMissingValue = utils.checkInvalidOrMissingValue;

const toBigNumber = value => {
  return new BigNumber(value);
};
export {
  utils,
  toBigNumber,
  bestRateForQuantity,
  bestProviderForQuantity,
  isValidEntry,
  checkInvalidOrMissingValue,
  dynamicSortMultiple,
  qrcodeBuilder,
  hasIcon,
  canValidateMulticoin,
  canValidateCoin
};
