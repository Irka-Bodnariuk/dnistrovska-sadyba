
// let tupleType: [string, boolean];
// tupleType = ['hello', true]; // OK
// tupleType = [true, 'hello']; // Error. Неправильні типи
// tupleType = ['hello', true, true]; // Error. Більше значень ніж у tuple

// export {};


// let tuple: [string, ...number[]];

// tuple = ['hello', 42, 100, 200]; // OK


// У цьому випадку перший елемент кортежу має бути рядком, проте всі наступні — числами.

// enum Role {
//  ADMIN,
//  USER,
// }

// console.log(Role.ADMIN); // 0
// console.log(Role[Role.ADMIN]); // "ADMIN"



// Існує ще така конструкція, як const enum. На відміну від звичайного enum, const enum видаляється під час транспіляції та не створює додаткового об'єкта в JavaScript.



// Значення const enum вставляють у місце використання у вигляді літералів. Це може допомогти покращити продуктивність.



// const enum HttpCodes {
//   OK = 200,
//   BadRequest = 400,
//   Unauthorized = 401,
// }

// const status = HttpCodes.OK;


// Після компіляції у JavaScript отримаємо наступний код:



// const status = 200;


// Union Type у TypeScript дозволяє вказати, що значенням може бути один із кількох типів.Це дуже зручно, коли хочемо визначити змінну, яка може приймати різні типи даних.Типи перераховуються через вертикальну риску |

// let mixedType: string | number | boolean;

// mixedType = 'string'; // OK
// mixedType = 10; // OK
// mixedType = true; // OK
// mixedType = {}; // Error: Type '{}' is not assignable to type 'string | number | boolean'.

// export {};

// function combine(param1: number | string, param2: number | string) {
//   return param1 + param2;
// }

// export {};

// Union Type працює не лише з базовими типами, а й з об'єктами:

//

// type Dog = {
//   legs: 4;
//   bark: () => void;
// }

// type Fish = {
//   fins: 2;
//   swim: () => void;
// }

// let pet: Dog | Fish;



// type Dog = {
//   legs: 4;
//   bark: () => void;
// };

// type Fish = {
//   fins: 2;
//   swim: () => void;
// };

// let pet: Dog | Fish;

// // type guard function
// function isDog(pet: Dog | Fish): pet is Dog {
//   return 'bark' in pet;
// }

// // Перевіряємо, чи є наш вихованець собакою перед тим, як використовувати метод bark
// if (isDog(pet)) {
//   pet.bark(); // OK, тепер TypeScript знає, що pet - це Dog
// } else {
//   pet.swim(); // TypeScript знає, що якщо pet не Dog, то це має бути Fish
// }

// export {};

// Intersection Type



// Intersection type є способом об'єднання декількох типів в один. Це дозволяє створювати складні типи, комбінуючи прості. У TypeScript можна використовувати символ & для створення типу intersection.

// type Manager = {
//   employees: Employee[];
// };

// type CEO = Employee & Manager;

// const ceo: CEO = {
//   name: 'Alice',
//   id: 1,
//   employees: [
//     {
//       name: 'Bob',
//       id: 2,
//     },
//   ],
// };

// export {};

// ﻿Literal Type



// Literal Type — це тип, що набуває конкретного значення. З ним ви можете визначити тип змінної так, щоб він набував лише певних значень.

// type OneOrTwo = 1 | 2;
// let value: OneOrTwo;
// value = 1; // OK
// value = 2; // OK
// value = 3; // Error: Type '3' is not assignable to type 'OneOrTwo'.

// type YesOrNo = 'yes' | 'no';
// let answer: YesOrNo;
// answer = 'yes'; // OK
// answer = 'no'; // OK
// answer = 'maybe'; // Error: Type '"maybe"' is not assignable to type 'YesOrNo'.

// export {};

// type ButtonSize = 'small' | 'medium' | 'large';

// function getButtonStyle(size: ButtonSize) {
//   switch (size) {
//     case 'small':
//       return { fontSize: '10px', padding: '5px' };
//     case 'medium':
//       return { fontSize: '14px', padding: '10px' };
//     case 'large':
//       return { fontSize: '18px', padding: '15px' };
//     default:
//       return { fontSize: '14px', padding: '10px' };
//   }
// }

// let myButtonStyle = getButtonStyle('medium'); // OK
// myButtonStyle = getButtonStyle('extra-large'); // Error: Argument of type '"extra-large"' is not assignable to parameter of type 'ButtonSize'.

// export {};


// Тип void у TypeScript використовується для позначення відсутності будь - якого типу взагалі,
// і зазвичай використовується як тип функцій, що повертається, в якому функції не повертають значення.

// function logMessage(message: string): void {
//   console.log(message);
// }

// logMessage('Hello, world!');

// export {};
// У цьому прикладі функція logMessage приймає один параметр — message типу string і нічого не повертає, тому тип, що повертається — void.



// Тип void часто використовується в callback - функціях або функціях зворотного виклику, де ви хочете бути впевнені, що функція не повертає значення,
// і тому не важливо, що повертає функція зворотного виклику.

// function doSomething(callback: () => void) {
//   callback();
// }

// doSomething(() => {
//   console.log('Callback function!');
// });

// export {};

// Never



// Це коли функція ніколи не закінчується та нічого не повертає. Часто тип never використовується для функцій, які завжди викидають вийняток або у нескінченних циклах.



// Ось деякі приклади його використання:

// // Функція, яка завжди викидає помилку
// function throwError(message: string): never {
//   throw new Error(message);
// }

// // Функція з нескінченним циклом
// function infiniteLoop(): never {
//   while (true) {}
// }

// export {};


// У першому прикладі функція throwError викидає помилку і ніколи не повертає значення, тому тип, що повертається — never.



// У другому прикладі функція infiniteLoop входить у нескінченний цикл і ніколи не завершується, тому її тип, що повертається, теж never.



// Наприклад, listen в express, оскільки підключення до сервера є постійне і теж має тип never.

// Ось приклад типу функції у TypeScript:

// let myFunc: (firstArg: string, secondArg: number) => void;

// myFunc = (first: string, second: number) => {
//   console.log(`First: ${first}, Second: ${second}`);
// };

// myFunc('Hello', 42); // Висновок: "First: Hello, Second: 42"

// export {};


// type Coordinate = [number, number];

// type UserWithCoords = {
//   id: number;
//   name: string;
//   coords: Coordinate;
// };

// const userWithCoords: UserWithCoords = {
//   id: 1,
//   name: 'Alice',
//   coords: [10, 20],
// };

// export {};


// enum AnimalIds {
//   cat = 'cat',
//   dog = 'dog',
//   fish = 'fish',
// }

// type Animal = {
//   [AnimalIds.cat]: {
//     meow: () => string;
//   };
//   [AnimalIds.dog]: {
//     bark: () => string;
//   };
//   [AnimalIds.fish]: {
//     swim: () => undefined;
//   };
// };

// // Створення об'єктів типу Animal
// let cat: Animal[AnimalIds.cat] = {
//   meow: () => 'Meow! I am a cat',
// };

// let dog: Animal[AnimalIds.dog] = {
//   bark: () => 'Woof! I am a dog',
// };

// let fish: Animal[AnimalIds.fish] = {
//   swim: () => undefined,
// };

// export {};

// Аналогічно у TypeScript ви можете зробити властивість інтерфейсу або типу опціональною,
//  додавши символ ? після назви властивості.

// type Person = {
//   name: string;
//   age?: number; // age є опціональною властивістю
// };

// const alice: Person = { name: 'Alice', age: 27 };
// const bob: Person = { name: 'Bob' }; // age не вказано, це припустимо

// export {};


// Різниця між Type та Interface


// interface Animal {
//   name: string;
// }

// type Animal = {
//   name: string;
// }

// Interface підтримує об'єднання через оголошення з тим самим ім'ям. Якщо ви визначите два interface з одним і тим же ім'ям, вони будуть "змерджені" в одне.


// interface Animal {
//   name: string;
// }

// interface Animal {
//   age: number;
// }

// let dog: Animal = {
//   name: 'Fido',
//   age: 5,
// };

// export {};


// Якщо ми хочемо розширити один інтерфейс іншим, у яких різні імена, нам потрібно використовувати оператор extends:



// interface Dog extends Animal {
//  bark: string;
// }


// У випадку з типом нам довелося б використовувати intersection(&).


// type AnimalName = {
//   name: string;
// };

// type AnimalAge = {
//   age: number;
// };

// type Animal = AnimalName & AnimalAge;

// let dog: Animal = {
//   name: 'Fido',
//   age: 5,
// };

// export {};


// Ми також можемо міксувати Interface та type, але результат нам доведеться зберегти як тип.

// type Cat = {
//   meow: () => string;
// };

// interface Dog {
//   bark: () => string;
// }

// type DogOrCat = Dog | Cat;
// type DogAndCat = Dog & Cat;

// export {};

// Оператор 'in' дозволяє перевірити наявність властивості в об'єкті.

// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type AdminOrEmployee = Admin | Employee;

// function printDetails(obj: AdminOrEmployee) {
//   console.log(`Name: ${obj.name}`);

//   if ('privileges' in obj) {
//     console.log(`Privileges: ${obj.privileges.join(', ')}`);
//   }

//   if ('startDate' in obj) {
//     console.log(`Start Date: ${obj.startDate}`);
//   }
// }

// export {};

// Давайте подивимося на приклад з in:

// type Dog = {
//   bark: () => void;
// };

// type Cat = {
//   meow: () => void;
// };

// function isDog(animal: Dog | Cat): animal is Dog {
//   return 'bark' in animal;
// }

// function letAnimalTalk(animal: Dog | Cat) {
//   if (isDog(animal)) {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

// export {};

// Але давайте подивимося на ще один приклад з оператором 'as':

// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type Staff = Admin | Employee;

// function isEmployee(staff: Staff): staff is Employee {
//   return (staff as Employee).startDate !== undefined;
// }

// const staffMember: Staff = { name: 'Bob', startDate: new Date() };

// if (isEmployee(staffMember)) {
//   console.log(
//     `Welcome on board, ${staffMember.name}! Your start date is ${staffMember.startDate}`
//   );
// }

// export {};


// Type Casting



// Type Casting (або Type Conversion) використовується для перетворення об'єкта одного типу на об'єкт іншого типу.



// TypeScript використовує два синтаксичні підходи для типового приведення: кутові дужки <> та оператор as.


// let someValue: unknown = 'this is a string';

// let strLength1: number = (<string>someValue).length;
// // or
// let strLength2: number = (someValue as string).length;

// let strLength3: number = someValue.length;

// export {};


// Спочатку TypeScript інтерпретує його як HTMLElement,
//     у якому відсутня властивість value.Але тепер нам потрібно
// вказати правильний тип.Для цього у нас є два варіанти.

// const input = document.getElementById('inputEmail') as HTMLInputElement;

// input.value = 'test@test.ts';

// export {};

//  Спробуємо видалити його зараз і призначити пізніше.

// const input = document.getElementById('inputEmail');

// if (input) {
//   (input as HTMLInputElement).value = 'test@test.ts';
// }

// export {};

// Однак, коли використовується JSX(React),
// тільки оператор as можна використати, оскільки синтаксис
// < Type > може бути неправильно інтерпретований як JSX.


// Index Properties



// Бувають ситуації, коли ми знаємо якісь поля явно, але деякі поля нам невідомі, а ми точно знаємо, якого типу вони мають бути. Для цього можна скористатися ось такою конструкцією:



// type IndexType = {
//   [prop: string]: string;
// }

// type Person = {
//   name: string;
//   [x: string]: string;
// };

// const user: Person = {
//   name: 'Alex',
//   gender: 'MAN',
//   country: 'Ukraine',
// };

// export {};


// type User = {
//   id: string;
//   name: string;
//   email: string;
// };

// type Users = {
//   [id: string]: User;
// };

// let users: Users = {};

// let user: User = {
//   id: '1',
//   name: 'Alex',
//   email: 'alex@example.com',
// };

// users[user.id] = user;