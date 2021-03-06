declare function Input(): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
declare function Str(name: string): (target: any, propertyKey: string | symbol, parameterIndex: number) => void;
declare function Password(name: string): (target: any, propertyKey: string | symbol, parameterIndex: number) => void;
declare function Choice(name: string, choices: string[]): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
declare function MutableChoice(): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
declare function MutableChoiceList(name: string): (target: any, propertyKey: string | symbol, parameterIndex: number) => void;
export { Input, Str, Password, Choice, MutableChoice, MutableChoiceList };
