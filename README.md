# ts-filters

This package provides a number of functions that can be passed into [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

## Contents

1. [Compose](#compose)
1. [Equality](#equality)
1. [Number](#number)
1. [String](#string)
1. [Deduplication](#deduplication)

## Compose

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

## Equality

Equality functions are provided to compare values.

### equalTo

`equalTo` can be used with primitive values (string, number, boolean) and uses currying to pass down a value use for a strict `===` equality check.

```ts
[1,2,3].filter(equalTo(1));
// returns [1]
```

### deepEqual

`deepEqual` is designed to be used with [uniqueBy](#uniqueBy) to remove duplicate objects or arrays from an array. It recursively checks to account for nested properties, returning true if the two values passed in have the same number of identical keys, all with identical values.


## Number

This includes simple declarative functions that can be used to filter lists of numbers, including:

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

## String

This includes simple declarative functions that can be used to filter lists of strings, including:

- `equalTo`
- `longerThan`
- `ofLength`
- `ofMaximumLength`
- `ofMinimumLength`
- `shorterThan`
- `startsWith`
- `usingRegEx`

Each function uses currying to pass down a value to check against, making usage like this:

```ts
['a', 'ab', 'abc'].filter(longerThan(2));
// returns ['abc']
```

## Deduplication

This includes methods to remove duplicates from lists.

### unique

`unique` is suitable for de-duping lists of primitive values:
```ts
[1,1,1,1].filter(unique);
// returns [1]
```

### uniqueBy

`uniqueBy` is suitable for lists of more complex values like objects, where you can supply a comparer function to find duplicates. In your comparer function, you can perform as many checks as you like between two items in the list. The comparer should return true when a duplicate has been identified.

```ts
[{ x: 1, y: 2 }, { x: 1, y: 2 }].filter(uniqueBy((a,b) => a.x === b.x && a.y === b.y))
// returns [{ x: 1, y: 2 }]
```