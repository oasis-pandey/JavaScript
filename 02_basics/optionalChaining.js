const user = {
  id: 1293,
  name: "Wolfgang",
  address: {
    street: "No. 9 Getreidegasse",
    city: "Salzburg",
    geo: {
        lat: 47.80,
        long: 13.20
    }
  },
};

const lat  = user.address && user.address.geo && user.address.geo.lat; // Very long, used to verify if address,geo,lat exists
//same can be done using
const lat1 = user?.address?.geo?.lat;

console.log(lat1)

// IF any of address, geo of lat doesnt exist then it returns undefined
// Nullish Coalescing Operator

const lat2 = user?.address?.geo?.lat ?? "Does not exist"; // the right side gets executed if left side is not found
console.log(lat2);