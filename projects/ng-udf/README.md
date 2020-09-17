# ng-udf

This package was made with the goal of having a easy way to generate
forms by using a schema.

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

### Target Model:

```json
{
    "form": {
        "elements":[
            {
                "type": "string | FormElementsTypes | Container",
                "name": "string",
                "value": "any",
                "validation": "ValidationRule[]",
                "properties":{
                    "children": "?FormElement[]",
                    "options": "?HTMLElementOptions"
                }
            }
        ]
    }
}


```

### TODO:
* [x] Publish the package to npm
* [ ] Add support for multiple forms
* [ ] Make a schema helper/generator
