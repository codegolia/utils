# @codegolia/utils

Utility functions for every project

## Installation

```bash
npm i @codegolia/utils
```

## Usage

```typescript
import { isNumber } from '@codegolia/utils';
// or
import { isNumber } from '@codegolia/utils/isNumber';

console.log(isNumber(123)); // true
console.log(isNumber('123')); // false
```

## Standard objects by category

### Value properties

- Infinity
- NaN
- Null
- Undefined
- [x] GlobalThis

### Fundamental objects

- Object
- Function
- Boolean
- Symbol

### Error objects

- Error
- [x] AggregateError
- EvalError
- [x] InternalError
- RangeError
- ReferenceError
- SyntaxError
- TypeError
- URIError

### Numbers and dates

- Number
- BigInt
- Math
- Date

### Text processing

- String
- RegExp

### Indexed collections

- Array
- Int8Array
- Uint8Array
- Uint8ClampedArray
- Int16Array
- Uint16Array
- Int32Array
- Uint32Array
- Float32Array
- Float64Array
- BigInt64Array
- BigUint64Array

### Keyed collections

- Map
- Set
- WeakMap
- WeakSet

### Structured data

- ArrayBuffer
- SharedArrayBuffer
- Atomics
- DataView

### Control abstraction objects

- Promise
- Generator
- GeneratorFunction
- AsyncFunction (x)
- AsyncGenerator
- AsyncGeneratorFunction

### Reflection

- Reflect (x)
- [x] Proxy

### Internationalization

- Intl (x)

### WebAssembly

- WebAssembly (x)

## String

- IsEmail
- IsMaxLength
- IsMinLength
- IsEqualLength
- IsEmptyString
- IsLowerCase
- IsUpperCase
- IsPascalCase
- IsCamelCase
- IsKebabCase
- IsSnakeCase
- ToCamelCase
- ToKebabCase
- ToLowerCase
- ToPascalCase
- ToSnakeCase
- ToUpperCase

## Number

- IsBit
- IsInt
- IsInt1
- IsInt2
- IsInt3
- IsInt4
- IsInt8
- IsUint
- IsUint1
- IsUint2
- IsUint3
- IsUint4
- IsUint8
- IsFloat
- IsPercent
- IsDecimal
- IsEven
- IsOdd
- IsMin
- IsMax
- IsNegative
- IsPositive
- IsEmptyNumber
- IsBetween
- GetPrecision

## Boolean

- IsTrue
- IsFalse
- IsTruthy
- IsFalsy

## Object

- IsKeyExist
- IsEmptyObject
- IndexToProperty
- GetKey
- GetObjectType
- SetKey

## Array

- IsTypedArray
- IsEmptyArray
- IsMaxLength
- IsMinLength
- IsEqualLength

## Utils

- IsContains
- IsDefined
- IsEqual
- IsNullish
- IsEmpty
