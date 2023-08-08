# Introducing *Nepali Number Validator*

This is a simple typescript based library to validate Nepali numbers format.
It can also give you the operator details of the number.

## Installation

```bash
npm install @cb/nepali-number-validator
yarn add @cb/nepali-number-validator
pnpm add @cb/nepali-number-validator
```

## Usage

```typescript
// ES Modules
import { isNepaliPhoneNumber, getPhoneNumberDetails  } from '@cb/nepali-number-validator';

// CommonJS
const { isNepaliPhoneNumber, getPhoneNumberDetails } = require('@cb/nepali-number-validator');

// isNepaliPhoneNumber
isNepaliPhoneNumber('9809373953'); // true
isNepaliPhoneNumber('+9779809373953'); // true
isNepaliPhoneNumber('+977 9809373953'); // true
isNepaliPhoneNumber('9779809373953'); // true
isNepaliPhoneNumber('977 9809373953'); // true

isNepaliPhoneNumber('98412345678'); // false
isNepaliPhoneNumber('9876543210'); // false

// getPhoneNumberDetails
// give the details only if the number is valid
getPhoneNumberDetails('9809373953'); // { name: 'Ncell', code: 'NCELL', phoneNumber: '+977 9809373953' }
