# Understanding TypeScript Compilation and tsconfig.json

## Introduction

*TypeScript* is a programming language built on *JavaScript* that adds *static typing* and other development features. Browsers and Node.js generally execute *JavaScript, so TypeScript code must be compiled into JavaScript before execution. The TypeScript compiler, known as **tsc*, performs this process.

## What Happens During Compilation?

When we run the *tsc command*, several important steps take place.

### 1. Parsing

The compiler reads TypeScript source files and converts the code into an *Abstract Syntax Tree (AST)*, representing the program's structure.

### 2. Type Checking

The compiler checks *variable types, function parameters, return values*, and other type-related rules. It reports errors when the code does not follow TypeScript's type system.

### 3. JavaScript Generation

After compilation, *TypeScript-specific syntax and type annotations are removed*. The compiler generates JavaScript based on the configured target version.

*Type information is erased* and does not normally exist in the generated JavaScript.

### 4. Output Generation

The compiler can generate:

- *JavaScript files*
- *Source maps*
- *Declaration files*

depending on the configuration.

## What Is tsconfig.json?

The *tsconfig.json* file contains *compiler settings* for a TypeScript project. It tells the compiler how to process files and where to generate output.

### Example

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "rootDir": "./src",
    "outDir": "./dist",
    "sourceMap": true
  },
  "include": ["src/*/"],
  "exclude": ["node_modules"]
}
Here:

- *target* → specifies the *JavaScript version*
- *module* → specifies the *module system*
- *strict* → enables *strict type checking*
- *rootDir* → defines the *source directory*
- *outDir* → specifies where *compiled files* will be stored
- *sourceMap* → generates *source map files*
- *include* → specifies which files *TypeScript should include*
- *exclude* → specifies which files/directories should be *excluded*

To compile a project using this configuration, run:

tsc
## Conclusion

The *tsc compiler* converts *TypeScript into JavaScript* and helps detect *type-related errors before execution*.

Meanwhile, *tsconfig.json* provides *centralized control over compilation settings, making TypeScript projects easier to **manage and maintain*.