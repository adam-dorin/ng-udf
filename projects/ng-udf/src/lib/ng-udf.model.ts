
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

interface UdfElementProperties {
    children: UdfFormElement[];
    options?: UdfElementOptions;
}

interface UdfValidationRule {
    [name: string]: string | number; //any
}

interface UdfElementOptions {

}

type FormElementContainer = 'container';
type FormElementTypes = 'input' | 'select' | 'textarea' | 'button' | 'legend' | 'checkbox' | 'radio' | 'complex';