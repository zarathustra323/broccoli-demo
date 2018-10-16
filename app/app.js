const message = 'Hello, world!';

const { log } = console;

function foo() {
  setTimeout(() => {
    debugger;
    log(message);
    log(this);
  });
}

new foo();
