/**
 * @param {string} host
 * @param {string} user
 * @param {Object} booking
 * @param {string} booking[].status
 */
 const getStatus = (host, user, booking) => {
    if (booking.status === "pending") {
        return `Hey ${user}, we're awaiting confirmation from ${host}.`;
    } else if (booking.status === "confirmed") {
        return `Hey ${user}, ${host} is excited to be hosting you.`;
    } else if (booking.status === "canceled") {
        return `Unfortunately ${user}, ${host} has canceled your booking request.`;
    } else if (booking.status === "done") {
        return `${host} hopes you had a great stay.`;
    } else {
        return "Unknown booking status."
    }
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
