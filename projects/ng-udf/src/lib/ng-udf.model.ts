
export interface UdfForm {
    elements: UdfFormElement[];
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
    [name: string]: string | number; //any
}

interface UdfElementOptions {
    [name: string]:any; // its undefined as of yet
}

type UdfComponentsType = {
  [key in FormElementTypes]?:any;
} 
type FormElementContainer = 'container';
type FormElementTypes = 'input' | 'select' | 'textarea' | 'button' | 'legend' | 'checkbox' | 'radio' | 'complex';