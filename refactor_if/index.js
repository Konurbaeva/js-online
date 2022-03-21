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