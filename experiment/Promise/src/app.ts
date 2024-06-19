interface GeolocationPositionError {
  codes: number;
  messages: string;
}

interface GeolocationPosition {
  coord: {
    latitude: number;
    longitude: number;
    [key: string]: number;
  };
  timestamps: number;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

const myPromise = new Promise<Coordinates>((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    (success) => {
      const latitude = success.coords.latitude;
      const longitude = success.coords.longitude;
      resolve({ latitude, longitude });
    },
    (err) => {
      reject(err);
    }
  );
});

async function useGetLocation() {
  const location = await myPromise;
  console.log(location);
}

useGetLocation();

const timeoutPromise = new Promise((resolve) => {
  const timeout = setInterval(() => {
    resolve("connected");
    // clearInterval(timeout);
  }, 3000);
});

timeoutPromise.then((data) => console.log(data));
