/**
 * Defines a new type named `Person` with three properties.
 *
 * This is a type alias, a way to give a new name to an existing type.
 * In this case, we're creating a new name for an object with specific properties.
 *
 * @property {string} firstname - The person's first name.
 * @property {string} lastname - The person's last name.
 * @property {string} birthday - The person's birthday in a string format like "MM-DD-YYYY".
 */
type Person = {
  firstname: string;
  lastname: string;
  birthday: string;
};

/**
 * Declares an array named `persons`.
 *
 * The `: Person[]` part is a type annotation. It tells TypeScript that this array can only
 * contain objects that have the structure defined by the `Person` type.
 * This is a key feature of TypeScript; it ensures that every element in the array has
 * `firstname`, `lastname`, and `birthday` properties, and that they are all strings.
 */
const persons: Person[] = [
  {
    // This is a valid object because it matches the `Person` type.
    firstname: "Joe",
    lastname: "Mama",
    birthday: "06-19-2000",
  },
  {
    // This is also a valid object.
    firstname: "Nacho",
    lastname: "Dada",
    birthday: "06-20-2000",
  },
  // If you tried to add an object like `{ age: 30 }`, TypeScript would give you an error
  // because it doesn't match the required `Person` type. This is static type checking
  // in action, helping you catch mistakes early.
];
