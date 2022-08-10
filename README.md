 [![Open in Visual Studio Code](https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20Visual%20Studio%20Code&labelColor=2c2c32&color=007acc&logoColor=007acc)](https://open.vscode.dev/Kawaken555/ts-cliche-unions)  ![ts-cliche-unions_MIT](https://img.shields.io/github/license/Kawaken555/ts-cliche-unions)  ![ts-cliche-unions_npm_v](https://img.shields.io/npm/v/ts-cliche-unions?color=%23f39800) 





# ts-cliche-unions
A module for writing JavaScript cliché strings safely in TypeScript.      
It provides string constants for key, event, HTML element, and HTML attributes.  
This module does not use enums, so unnecessary code is reduced by treeshaking when compiled.  

# Install
```
npm install ts-cliche-unions --save
```

# Usage 
Import this module into your TypeScript file.
```
import { KEY } from 'ts-cliche-unions';
```   

This module can be used to replace key name strings, etc., with constants.   
```
// if(ev.key === 'Enter') { ... }
if(ev.key === KEY.Enter) { ... }
```  
```
// document.addEventListener('copy', (e) => { ... }  
document.addEventListener(EVENT.Copy, (e) => { ... }  
```
```
// const link = document.createElement("a");  
const link = document.createElement(ELEMENT.A);
```
```
// element.setAttribute('class','test');
element.setAttribute(ATTRIBUTE.Class, 'test');
```


# Remarks   
## Supported Browsers
This module does not support the following versions of browsers.  

* Windows     
Chrome (version 48 or lower)     

* Mac    
Chrome (version 52 or lower)     
FireFox (version 48 or lower)     

* Linux  
Chrome (version 52 or lower)     


# Specification Notes  
The library provides not only constants but also union types for constants, but the types support only alphabetic characters.     
Be careful when using the library's union type for variables that may contain any character.     

If you just want to use constants, don't worry about the above.      
 

# Contributing
If you find a bug or data that has not been updated, please send a pull request with the fix or [open an issue!](https://github.com/Kawaken555/ts-cliche-unions/issues) 

# Inspiration  
ts-cliche-unions was inspired by Nathan Friend's [ts-key-enum](https://gitlab.com/nfriend/ts-key-enum/-/blob/master/README.md).   

# License  
[MIT](https://github.com/Kawaken555/ts-cliche-unions/blob/main/LICENSE)
