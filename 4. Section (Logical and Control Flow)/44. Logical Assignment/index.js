// ||= assigns the right side value only if the left is a falsy value

let a = false;

if (!a) {
  a = 20;
}

a = a || 20;

a ||= 20;

// &&= assigns the right side only if the right is a truthy value

let b = 20;
if (b) {
  b = 30;
}

b = b && 30;

b &&= 30;

// ??= assigns the right side value only if the left value is null or undefined

let c = null;

if (c === null || c === undefined) c = 10;

c = c ?? 20;
c ??= 20;
