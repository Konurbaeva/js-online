const getSlug = name => {
    let result = name.toLowerCase();
    result.substring(0, 14)
    result.replaceAll(' ', '-')
    return result
   }

   const getSlug = name => {
    let result = name.toLowerCase().substring(0, 15).replaceAll(' ', '-')
    return result
   }

   /**
 * @param {array[][]} rows
 */
export const renderTableRows = rows => {
    console.log(rows)

return `
    ${rows.map(row => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("")}`
}

/**
 * @param {number[]} grades
 */
const shouldAdjustGrades = grades => {
    return grades.some(grade => grade < 10);
}


// Sample usage - do not modify
shouldAdjustGrades([10, 12, 10, 14]); // false
shouldAdjustGrades([12, 8, 17]); // true


const settings = {
    theme: "Dark",
    version: "2.4.1",
    beta: false
};

const keys = Object.keys(settings);
console.log(keys); // ["theme", "version", "beta"]
keys.forEach(key => {
    // log the value of every key dynamically
    console.log(settings[key]);
});

import translations from "./translations.js";

/**
 * @param {string} language
 */
export const getTranslation = (language) => {
    return translations.welcome[language];
}


/** @param {string} name */
export function getNumberOfChars(name) {
    // number of characters in: name
    return name.length
}

/** @param {string} name */
export function getFirstChar(name) {
    // first character of: name
 return name[0]
}

/** @param {string} name */
export function getLastChar(name) {
    // last character of: name
  return name[name.length-1]
}

/** @param {string} name */
export function getLower(name) {
    // name all in lower case (example: "ABC" becomes "abc")
     return name.toLowerCase()
}

/** @param {string} name */
export function getUpper(name) {
    // name all in upper case (example: "abc" becomes "ABC")
   return name.toUpperCase();
}

/** @param {string} name */
export function getCapitalized(name) {
    // capitalized version of name (example: "alEX" becomes "Alex")
     return name[0].toUpperCase() + name.substring(1).toLowerCase();
}


const getPushMessage = status => {
    const messages = {
        received: "Restaurant started working on your order.",
        prepared: "Driver is picking up your food.",
        en_route: "Driver is cycling your way!",
        arrived: "Enjoy your food!"
    };

    return messages[status] ?? "Unknown status";
}

/**
 * @param {string} host
 * @param {string} user
 * @param {Object} booking
 * @param {string} booking[].status
 */
const getStatus = (host, user, booking) => {
    const messages = {
        pending: `Hey ${user}, we're awaiting confirmation from ${host}.`,
        confirmed: `Hey ${user}, ${host} is excited to be hosting you.`,
        canceled: `Unfortunately ${user}, ${host} has canceled your booking request.`,
        done: `${host} hopes you had a great stay.`
    }
    return  messages[booking.status] ?? "Unknown booking status."
}


// Sample usage - do not modify
const booking1 = {
    status: "pending"
};
console.log(getStatus("Sam", "Alex", booking1)); // "Hey Alex, we're awaiting confirmation from Sam."
const booking2 = {
    status: "confirmed"
}
console.log(getStatus("Charlie", "Blake", booking2)); // "Hey Blake, Charlie is excited to be hosting you."


// const getPushMessage = status => {
//     if (status === "received") {
//         return "Restaurant started working on your order.";
//     } else if (status === "prepared") {
//         return "Driver is picking up your food."
//     } else if (status === "en_route") {
//         return "Driver is cycling your way!";
//     } else if (status === "arrived") {
//         return "Enjoy your food!";
//     } else {
//         return "Unknown status";
//     }
// }

const getPushMessage = status => {
    const messages = {
        received: "Restaurant started working on your order.",
        prepared: "Driver is picking up your food.",
        en_route: "Driver is cycling your way!",
        arrived: "Enjoy your food!"
    };

    return messages[status] ?? "Unknown status";
}

/**
 * @param {Object[]} users
 * @param {string} users.joined_on
 * @param {number} users.age
 */
const getAverageAge = users => {
    let total = 0;
    users.forEach(user => total += user.age);
    return total / users.length;
};

// Sample usage - do not modify
const users = [{
    joined_on: "2018-12-13",
    age: 14
}, {
    joined_on: "2018-12-15",
    age: 18
}];
console.log(getAverageAge(users)); // 16

/**
 * @param {object[]} users
 * @param {number} users.id
 * @param {string} users.name
 * @param {object} [users.subscription]
 * @param {object} [users.subscription.info]
 * @param {number} [users.subscription.info.value]
 */
const getTotalSales = users => {
    let sum = 0;
    users.forEach(user => {
        // console.log(user.subscription);
        sum += user.subscription?.info?.value ?? 0;
        // OR
        // sum = sum + (user.subscription?.info?.value ?? 0); // parentehsis are required here because ?? has lower precedence
    });
    return sum;
}

// Sample usage - do not modify
const users = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Sam", subscription: {info: {value: 59}}},
    {id: 3, name: "Charlie", subscription: {info: {value: 31}}}
];
console.log(getTotalSales(users)); // 90


/**
 * @param {Object[]} users
 * @param {string} users.name
 * @param {boolean} users.isVerified
 */
const exportVerifiedUsers = users => {
    // with chaining (will be explained in a later chapter)
    return users
        .filter(user => user.isVerified)
        .map(user => user.name)
        .join(", ");
    // OR: without chaining
    const verifiedUsers = users.filter(user => user.isVerified);
    return verifiedUsers.map(user => user.name).join(", ");
}

// Sample usage - do not modify
const sampleUsers = [{
    name: "Sam",
    isVerified: true
}, {
    name: "Alex",
    isVerified: false
}, {
    name: "Charlie",
    isVerified: true
}];
console.log(exportVerifiedUsers(sampleUsers)); // "Sam, Charlie"

console.log([{
    id: 1,
    age: 15,
  }, {
    id: 2,
    age: 18,
  }].every(user => user.age < 18))



function multiplyNumbers(numbers) {
    return numbers.reduce(function(total, current) {
        return total * current
    }, )
}

function getUser(name) {
    const id = 2;
    return {
      id: id,
      name: name,
      age: 20
    };
  }

  