import locationReducer from "../reducers/location";
import animalReducer from "../reducers/animal";
import breedReducer from "../reducers/breed";
import breedsReducer from "../reducers/breeds";

/* Location Reducer */

expect(
  locationReducer(
    {},
    {
      type: "SET_LOCATION",
      payload: "Seattle, WA"
    }
  )
).toBe({ location: "Seattle, WA" });

expect(
  locationReducer(
    { location: "Seattle, WA" },
    {
      type: "SET_LOCATION",
      payload: "San Francisco, CA"
    }
  )
).toBe({ location: "San Francisco, CA" });

expect(
  locationReducer(
    { location: "Seattle, WA" },
    {
      type: "SET_ANIMAL",
      payload: "dog"
    }
  )
).toBe({ location: "Seattle, WA" });

expect(locationReducer({ location: "Seattle, WA" }, {})).toBe({
  location: "Seattle, WA"
});

/* Animal Reducer */

expect(
  animalReducer(
    {},
    {
      type: "SET_ANIMAL",
      payload: "dog"
    }
  )
).toBe({ animal: "dog" });

expect(animalReducer({ location: "Seattle, WA" }, {})).toBe({
  location: "Seattle, WA"
});

/* Breed Reducer */

expect(
  breedReducer(
    {},
    {
      type: "SET_BREED",
      payload: "German Shepherd"
    }
  )
).toBe({ breed: "German Shepherd" });

expect(breedReducer({ location: "Seattle, WA" }, {})).toBe({
  location: "Seattle, WA"
});

/* Breeds Reducer */

expect(breedsReducer({ location: "Seattle, WA" }, {})).toBe({
  location: "Seattle, WA"
});
