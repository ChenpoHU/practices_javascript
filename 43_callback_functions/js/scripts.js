function exibir(num) {
  console.log("A operação resultou em: " + num);
}

function add(a, b, callback) {
  var op = a + b;
  callback(op);
}

function multiplicacao(a, b, cb) {
  var op = a * b;
  cb(op);
}

add(2, 2, exibir);

multiplicacao(2, 4, exibir);