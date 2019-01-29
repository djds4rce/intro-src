import changeLocation from "../actionCreatores/changeLocation";
import changeAnimal from "../actionCreatores/changeAnimal";
import changeBreed from "../actionCreatores/changeBreed";

expect(changeLocation("Seattle, WA")).toEqual({
  type: "SET_LOCATION",
  payload: "Seattle, WA"
});

expect(changeAnimal("dog")).toEqual({
  type: "SET_ANIMAL",
  payload: "dog"
});

expect(changeBreed("Havanese")).toEqual({
  type: "SET_BREED",
  payload: "Havanese"
});
