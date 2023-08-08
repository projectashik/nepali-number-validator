// import { isNepaliPhoneNumber } from '@cb/nepali-number-validator'
const {isNepaliPhoneNumber, getPhoneNumberDetails} = require('nepali-number-validator');
console.log(isNepaliPhoneNumber('9876543210'))

console.log(getPhoneNumberDetails('9809373953'))