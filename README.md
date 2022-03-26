# ts-cliche-unions
A module for writing JavaScript cliché strings safely in TypeScript.      
It provides string constants and union types for key, event, code, and HTML attributes.  
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
if(ev.key === KEY.Enter) {
  console.log("Good Morning World");
}
```  

# Remarks   
This module does not support the following versions of browsers.  

* Windows     
Chrome (version 48 or lower)     

* Mac    
Chrome (version 52 or lower)     
FireFox (version 48 or lower)     

* Linux  
Chrome (version 52 or lower)     

# Contributing
Found a bug? feel free to fix it and send a pull request or [open an issue](https://github.com/Kawaken555/ts-cliche-unions/issues).   

# Inspiration  
ts-cliche-unions was inspired by Nathan Friend's [ts-key-enum](https://gitlab.com/nfriend/ts-key-enum/-/blob/master/README.md).   

# License  
[MIT](https://github.com/Kawaken555/ts-cliche-unions/blob/main/LICENSE)