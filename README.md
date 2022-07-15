# ts-filters

This package provides a number of functions that can be passed into [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

## Contents

1. [compose](#compose)
1. [equality](#equality)
1. [number](#number)
1. [string](#string)
1. [unique](#unique)

## compose

These functions allow you to compose complex filters, where multiple predicates can be applied.

### passEvery

Using `passEvery`, each item in the array needs to pass every predicate supplied to be returned in the resulting array.

```ts
const list = [1, 2, 3, 4];
const result = list.filter(passEvery(greaterThan(2), multipleOf(2)));
// returns [4]
```

### passSome

`passSome` also accepts any number of predicates, but each item only needs to pass one of them to be returned in the resulting array.

```ts
const list = [1, 2, 3, 4];
const result = list.filter(passSome(greaterThan(3), multipleOf(2)));
// returns [2, 4]
```

## number

This includes simple declarative functions that can be used to filter lists of numbers, including:

- `equalTo`
- `greaterThan`
- `greaterThanOrEqualTo`
- `lessThan`
- `lessThanOrEqualTo`
- `multipleOf`

Each function uses currying to pass down a value to check against, making usage like this:

```ts
[1, 2, 3, 4].filter(lessThan(3));
// returns [1, 2]
```

## string

This includes simple declarative that can be used to filter lists of strings, including:

- `equalTo`
- `longerThan`
- `ofLength`
- `ofMaximumLength`
- `ofMinimumLength`
- `shorterThan`

Each function uses currying to pass down a value to check against, making usage like this:

```ts
['a', 'ab', 'abc'].filter(longerThan(2));
// returns ['abc']
```

## unique

This includes methods to remove duplicates from lists.

`unique` is suitable for de-duping lists of primitive values:
```ts
[1,1,1,1].filter(unique);
// returns [1]
```

`uniqueBy` is suitable for lists of more complex values like objects, where you can supply a comparer function to find duplicates. In your comparer function, you can perform as many checks as you like between two items in the list. The comparer should return true when a duplicate has been identified.

```ts
[{ x: 1, y: 2 }, { x: 1, y: 2 }].filter(uniqueBy((a,b) => a.x === b.x && a.y === b.y))
// returns [{ x: 1, y: 2 }]
```