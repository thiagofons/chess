from json import dump

from flask import jsonify, request, Flask

import pecas
import tabuleiro
import json
import sys

TABULEIRO_JOGADOR, TABULEIRO = tabuleiro.inicia()
app = Flask(__name__)


@app.route('/inicia', methods=['GET'])
def retorno():
    imprime()
    return TABULEIRO_JOGADOR


@app.route('/moves/<int:y>and<int:x>')
def moves(y, x):
    verifica = TABULEIRO[y][x].verifica(TABULEIRO, y, x)
    return verifica


@app.route('/moves/<int:y>and<int:x>por<int:z>and<int:w>')
def troca(y, x, z, w):
    novo = [z, w]
    if TABULEIRO[y][x] != "XX":
        print(TABULEIRO[y][x].verifica(TABULEIRO, y, x))
        if novo in TABULEIRO[y][x].verifica(TABULEIRO, y, x):
            TABULEIRO[z][w] = TABULEIRO[y][x]
            TABULEIRO[y][x] = "XX"
            TABULEIRO_JOGADOR[z][w] = TABULEIRO_JOGADOR[y][x]
            TABULEIRO_JOGADOR[y][x] = "XX"
    imprime()
    return "teste"


def imprime():
    linha = ""
    print("  0   1   2   3   4   5   6   7")
    for i in range(8):
        for j in range(8):
            linha = linha + str(TABULEIRO_JOGADOR[i][j]) + "  "
        print(str(i) + " " + str(linha))
        linha = ""


app.run(port=5000, host='localhost', debug=True)
