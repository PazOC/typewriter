const sentence = "hello there from lighthouse labs";

let time = 0;
for (const char of sentence) {
  setTimeout(() => {
    console.log(char), time;
  }, time += 50);
}
