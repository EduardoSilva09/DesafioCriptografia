function nextCode(AChr, Salt) {
  let code = AChr.charCodeAt(0);
  return String.fromCharCode(code + Number(Salt));
}
/**
 * Os caracteres que sejam letras minúsculas e
 * maiúsculas serão deslocadas 3 posições
 * para a direita, segundo a tabela ASCII.
 *
 * @param {String} AText
 */
function firstLayer(AText) {
  let newText = "";
  for (let index = 0; index < AText.length; index++) {
    let element = AText[index];

    if (/[A-Za-z]/g.test(element)) {
      element = nextCode(element, 3);
    }
    newText += element;
  }
  return newText;
}

/**
 * Os caracteres do texto serão invertidos.
 *
 * @param {String} AText
 */
function secondLayer(AText) {
  return AText.split("").reverse().join("");
}

/**
 * Os caracteres a partir da metade em diante (truncada)
 * serão deslocados uma posição para a esquerda na
 * tabela ASCII.
 *
 * @param {String} AText
 */
function thirdLayer(AText) {
  const newText = AText.split("");
  const position = Math.trunc(AText.length / 2.0);
  for (let index = AText.length - 1; index >= position; index--) {
    newText[index] = nextCode(AText[index], -1);
  }
  return newText.join("");
}

/**
 *  Criptografa o texto passado por parâmetro.
 *
 * @param {String} AText
 * @returns
 *  Texto com as camadas de criptografia aplicadas.
 */
function encrypt(AText) {
  let newText = firstLayer(AText);
  newText = secondLayer(newText);
  newText = thirdLayer(newText);
  return newText;
}

console.log(encrypt("Texto #3"));
console.log(encrypt("abcABC1"));
console.log(encrypt("vxpdylY .ph"));
console.log(encrypt("vv.xwfxo.fd"));
