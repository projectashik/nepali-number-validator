
const operators = [
    {
      name: "Nepal Telecom",
      code: "NTC",
      prefix: ["984", "985", "986", "974"],
      length: 10,
      format: "98X XXX XXXX / +977 98X XXX XXXX",
      regex:/^\+?(977( )?)?9(8[4-6]|74)\d{7}$/,
    },
    {
      name: "Ncell",
      code: "NCELL",
      prefix: ["980", "981", "982"],
      length: 10,
      format: "98X XXX XXXX / +977 98X XXX XXXX",
      regex: /^\+?(977( )?)?9(8[0-2])\d{7}$/,
    },
    {
      name: "Smart Cell",
      code: "SMARTCELL",
      prefix: ["961", "988"],
      length: 10,
      format: "98X XXX XXXX / +977 98X XXX XXXX",
      regex: /^\+?(977( )?)?9(6[1-2]|88)\d{7}$/,
    },
    {
      name: "UTL",
      code: "UTL",
      prefix: ["972"],
      length: 10,
      format: "972 XXX XXXX / +977 972 XXX XXXX",
      regex: /^\+?(977( )?)?97(2)\d{7}$/,
    },
    {
      name: "Hello Mobile",
      code: "HELLOMOBILE",
      prefix: ["963"],
      length: 10,
      format: "963 XXX XXXX / +977 963 XXX XXXX",
      regex: /^\+?(977( )?)?96(3)\d{7}$/,
    },
  ]


  /**
   * Check if the given phone number is valid Nepali phone number
   *
   * @param {string} phoneNumber
   * @returns {boolean}
   */
  export const isNepaliPhoneNumber = (phoneNumber: string) => {
    return operators.some((operator) => {
      return operator.regex.test(phoneNumber)
    })
  }


  /**
   * Get phone number details
   *
   * @param {string} phoneNumber
   * @returns {{ name: string; code: string; phoneNumber: string; }}
   */
  export const getPhoneNumberDetails = (phoneNumber: string) => {
    const operator = operators.find((operator) => {
      return operator.regex.test(phoneNumber)
    })

    if (!operator) {
      return null
    }

    return {
      name: operator.name,
      code: operator.code,
      phoneNumber,
    }
  }
