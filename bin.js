#!/usr/bin/env node

const { getPhoneNumberDetails, isNepaliPhoneNumber } = require("./dist/index");

const [, , ...args] = process.argv;

if (args.length === 0) {
    console.log("Please provide a phone number");
    process.exit(1);
    }

const phoneNumber = args[0];

if (!isNepaliPhoneNumber(phoneNumber)) {
    console.log("Not a Nepali phone number");
    process.exit(1);
    }

const details = getPhoneNumberDetails(phoneNumber);

console.log(details);