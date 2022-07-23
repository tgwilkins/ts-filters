# ts-filters

This package provides a number of functions that can be passed into [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

## Contents

1. [Compose](#compose)
1. [Equality](#equality)
1. [Number](#number)
1. [Object](#object)
1. [String](#string)
1. [Deduplication](#deduplication)

## Compose

These functions allow you to compose complex filters, where multiple predicates can be applied.

### and

Using `and`, each item in the array needs to pass every predicate supplied to be returned in the resulting array.

```ts
const list = [1, 2, 3, 4];
const result = list.filter(and(greaterThan(2), multipleOf(2)));
// returns [4]
```

### or

`or` also accepts any number of predicates, but each item only needs to pass one of them to be returned in the resulting array.

```ts
const list = [1, 2, 3, 4];
const result = list.filter(or(greaterThan(3), multipleOf(2)));
// returns [2, 4]
```

You can even use both in conjunction with each other to compose complex predicates.

```ts
const list = [1, 2, 3, 4];
const result = list.filter(and(or(equalTo(1), equalTo(3)), greaterThan(1)));
// returns [3]
```

## Equality

Equality functions are provided to compare values.

### equalTo

`equalTo` can be used with primitive values (string, number, boolean) and uses currying to pass down a value use for a strict `===` equality check.

```ts
[1, 2, 3].filter(equalTo(1));
// returns [1]
```

### deepEqual

`deepEqual` is designed to be used with [uniqueBy](#uniqueBy) to remove duplicate objects or arrays from an array. It recursively checks to account for nested properties, returning true if the two values passed in have the same number of identical keys, all with identical values.

```ts
[a, a, someObjectLookingLikeA, b].filter(uniqueBy(deepEqual));
// returns [a, b]
```

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

## Object

This includes filters for lists of objects or data structures.

### where

`where` allows you to pass a partial representation of the objects contained in the array, much like a query. Expected values can either be defined literally, or a predicate function can be used to for the property to pass. The predicate can be defined at any level of nesting, allowing you to go as deep into the object structure as you need to.

```ts
const a = { x: 1, y: { nested: { property: 'hello' } } };
const b = { x: 1, y: { nested: { property: 'goodbye' } } };

// Literal query
[a, b].filter(where({ x: 1 }));
// returns [a, b]

[a, b].filter(where({ y: { nested: { property: 'goodbye' } } }));
// returns [b]

// Query with predicate function
[a, b].filter(where({ x: (x) => x > 0 }));
// returns [a, b]

// Mix of literal and predicate function query
[a, b].filter(
  where({
    x: 1,
    y: { nested: { property: (property) => property.startsWith('good') } },
  })
);
// returns [b]
```

## String

This includes simple declarative functions that can be used to filter lists of strings, including:

- `endsWith`
- `includes`
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
[1, 1, 1, 1].filter(unique);
// returns [1]
```

### uniqueBy

`uniqueBy` is suitable for lists of more complex values like objects, where you can supply a comparer function to find duplicates. In your comparer function, you can perform as many checks as you like between two items in the list. The comparer should return true when a duplicate has been identified.

```ts
[
  { x: 1, y: 2 },
  { x: 1, y: 2 },
].filter(uniqueBy((a, b) => a.x === b.x && a.y === b.y));
// returns [{ x: 1, y: 2 }]
```
