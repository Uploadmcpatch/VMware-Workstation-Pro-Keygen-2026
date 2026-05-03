function isPalindrome(str: string): boolean {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}
function factorial(n: number): number {
  if (n < 0) return -1;
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
function fibonacci(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
function debounce(func: Function, delay: number): Function {
  let timeout: NodeJS.Timeout;
  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}
function throttle(func: Function, limit: number): Function {
  let lastFunc: NodeJS.Timeout;
  let lastRan: number;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    }
    clearTimeout(lastFunc);
    lastFunc = setTimeout(function () {
      if ((Date.now() - lastRan) >= limit) {
        func.apply(context, args);
        lastRan = Date.now();
      }
    }, limit - (Date.now() - lastRan));
  };
}
function sumArray(arr: number[]): number {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
function averageArray(arr: number[]): number {
  return sumArray(arr) / arr.length;
}
function flattenArray(arr: any[]): any[] {
  return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
}
