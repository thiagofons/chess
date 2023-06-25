import App from "./App";

//para instalar:
//npm install --save-dev jest
//npm i --D babel-jest @babel/core @babel/preset-env
//json: //"test": "jest --coverage"

//para rodar:
//npm test

//exemplo de função de soma

const {sum} = math(); //nome da função: sum; nome do arq: math

test('testname', () => {
    
    //resultado do teste esperado:
    expect(sum(1,2)).toBe(3);

})