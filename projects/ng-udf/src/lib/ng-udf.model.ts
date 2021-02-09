import { AbstractControlOptions, AsyncValidatorFn, ValidatorFn } from "@angular/forms";

export interface UdfForm {
    elements: UdfFormElement[];
    components: UdfComponentList
}

export interface UdfFormElement {

    type: FormElementTypes | FormElementContainer;
    name: string;
    value: any;
    validation?: UdfValidationRule;
    properties?: UdfElementProperties
}

export interface UdfComponentList extends UdfComponentsType {
    
    input?: any;
    select?: any;
    textarea?: any;
    button?: any;
    legend?: any;
    checkbox?: any;
    radio?: any;
    complex?: any;
    container?: any;
}

interface UdfElementProperties {
    children?: UdfFormElement[];
    attr?: UdfElementOptions;
}

interface UdfValidationRule {
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
}

interface UdfElementOptions {
    [name: string]:any; // its undefined as of yet
}

type UdfComponentsType = {
  [key in FormElementTypes]?:any;
} 
type FormElementContainer = 'container';
type FormElementTypes = 'input' | 'select' | 'textarea' | 'button' | 'legend' | 'checkbox' | 'radio' | 'complex';