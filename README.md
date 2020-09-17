## ng-UDF

The goal is to build an angular package that can generate a form based on a schema.

## Research

1. https://angular.io/guide/dynamic-form
2. https://jasonwatmore.com/post/2019/06/25/angular-8-dynamic-reactive-forms-example
3. https://medium.com/@krishnaregmi/how-to-create-dynamic-forms-in-angular-7-using-formcontrol-a443a2c5e3a9
4. https://medium.com/@mail.bahurudeen/create-a-dynamic-form-with-configurable-fields-and-validations-using-angular-6-994db56834da
5. https://ultimatecourses.com/blog/angular-dynamic-components-forms


### Current Model:
```json
{
  "type": "select",
  "label": "Favorite food",
  "name": "food",
  "options": [
      "Pizza", 
      "Hot Dogs", 
      "Knakworstje", 
      "Coffee"
    ],
  "placeholder": "Select an option",
}

```
