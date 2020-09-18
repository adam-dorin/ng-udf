## ng-UDF

The goal is to build an angular package that can generate a form based on a schema.

## Install

```bash 

npm i ng-udf --save-dev

```
## Research

Doc is [here](https://github.com/adam-dorin/ng-udf/blob/master/Research-and-plans.md)

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
