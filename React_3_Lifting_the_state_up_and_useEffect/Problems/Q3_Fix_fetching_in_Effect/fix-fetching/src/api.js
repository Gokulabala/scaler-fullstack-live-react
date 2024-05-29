export async function fetchBio(person) {
    const delay = person === "Bob" ? 200 : 200;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("This is " + person + "âs bio.");
      }, delay);
    });
  }