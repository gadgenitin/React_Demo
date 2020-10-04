import axios from "axios";

const BASE_URL = "https://www.geolocation-db.com/json/";
const API_KEY = "AIzaSyA-xxBn_AqksnR9gMS1MRnXOo4LQBNK4Y0";

class GeolocationService {
  getCurrentPosition() {
    const url = `${BASE_URL}${API_KEY}`;

    return new Promise((resolve, reject) => {
      axios
        .post(url)
        .then((response) => {
          console.log(response);
          console.log(url);
          if (response && response.status === 200) {
            const lat = response.data.latitude;
            const lng = response.data.longitude;
            resolve({
              latitude: lat,
              longitude: lng
            });
          } else {
            reject("Unable to retrieve current location");
          }
        })
        .catch((error) => {
          const { errors } = "error";
          if (errors && errors.length > 0) {
            errors.forEach((e) =>
              console.log(`Error: ${e.message}, Reason: ${e.reason}`)
            );
          }
        });
    });
  }
}

export { GeolocationService };
