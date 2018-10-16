const message = 'Hello, world!';

const { log } = console;

function foo() {
  setTimeout(() => {
    log(message);
    log(this);
  });
}

new foo();
