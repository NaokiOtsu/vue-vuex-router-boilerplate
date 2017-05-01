export function fetchUser () {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve();
    }, 1000);
  }, reject);
}
