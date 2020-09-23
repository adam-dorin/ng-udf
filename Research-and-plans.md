## ng-UDF

The goal is to build an angular package that can generate a form based on a schema.

## Install

```bash 

npm i ng-udf --save-dev

```

### Current Model:
[See Model File](https://github.com/adam-dorin/ng-udf/blob/master/projects/ng-udf/src/lib/ng-udf.model.ts)

## Research

1. https://angular.io/guide/dynamic-form
2. https://jasonwatmore.com/post/2019/06/25/angular-8-dynamic-reactive-forms-example
3. https://medium.com/@krishnaregmi/how-to-create-dynamic-forms-in-angular-7-using-formcontrol-a443a2c5e3a9
4. https://medium.com/@mail.bahurudeen/create-a-dynamic-form-with-configurable-fields-and-validations-using-angular-6-994db56834da
5. https://ultimatecourses.com/blog/angular-dynamic-components-forms
6. https://indepth.dev/complete-beginner-guide-to-publishing-an-angular-library-to-npm/

## Useful links:

1. Form builder https://angular.io/api/forms/FormBuilder#control-usage-notes
2. Validators https://angular.io/api/forms/Validators
3. Future integrations:
    * ng-bootstrap https://ng-bootstrap.github.io/#/getting-started
    * angular material https://material.angular.io/components/categories
4. Function interface:
```ts

interface SearchFunc {
  (source: string, subString: string): boolean;
}

```

