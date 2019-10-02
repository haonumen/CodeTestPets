# CodeTestPets

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

when Application loaded, it will request http://5c92dbfae7b1a00014078e61.mockapi.io/owners to get a resonse like below:
```
[
  {
    "name": "Bob",
    "gender": "Male",
    "age": 23,
    "pets": [
      {
        "name": "Garfield",
        "type": "Cat"
      },
      {
        "name": "Fido",
        "type": "Dog"
      }
    ]
  },
  {
    "name": "Jennifer",
    "gender": "Female",
    "age": 18,
    "pets": [
      {
        "name": "Garfield",
        "type": "Cat"
      }
    ]
  },
  {
    "name": "Steve",
    "gender": "Male",
    "age": 45,
    "pets": null
  },
  {
    "name": "Fred",
    "gender": "Male",
    "age": 40,
    "pets": [
      {
        "name": "Tom",
        "type": "Cat"
      },
      {
        "name": "Max",
        "type": "Cat"
      },
      {
        "name": "Sam",
        "type": "Dog"
      },
      {
        "name": "Jim",
        "type": "Cat"
      }
    ]
  },
  {
    "name": "Samantha",
    "gender": "Female",
    "age": 40,
    "pets": [
      {
        "name": "Tabby",
        "type": "Cat"
      }
    ]
  },
  {
    "name": "Alice",
    "gender": "Female",
    "age": 64,
    "pets": [
      {
        "name": "Simba",
        "type": "Cat"
      },
      {
        "name": "Nemo",
        "type": "Fish"
      }
    ]
  }
]
```
and then it will be tranformed by the cats component as below:
```
{
  Male: [
    'Garfield',
    'Jim',
    'Max',
    'Tom'
  ],
  Female: [
    'Garfield',
    'Simba',
    'Tabby'
  ]
}
```
we will output a list of all the cats in alphabetical order under a heading of the gender of their owner with above transformed JSON object.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
