from json import dump

from flask import jsonify, request, Flask

import pecas
import rainha
import tabuleiro
import random


TABULEIRO_JOGADOR, TABULEIRO = tabuleiro.inicia()
IREI = False  # se o rei Ia está em check
QTD_IREI = []  # pocisão das peças dando check no rei IA
JREI = False  # se os reis jogador está em check
QTD_JREI = []  # pocisão das peças dando check no rei jogador
I_JOGADAS = pecas.todas_jogadas(TABULEIRO, "i", 2)
J_JOGADAS = pecas.todas_jogadas(TABULEIRO, "j", 2)
PECASIA = pecas.pecasIA(TABULEIRO, "i", 2)
VEZ = "j"
app = Flask(__name__)


@app.route('/inicia', methods=['GET'])
def retorno():
    imprime()
    return TABULEIRO_JOGADOR


@app.route('/moves/<int:y>and<int:x>')
def moves(y, x):
    if VEZ == "j":
        verifica = TABULEIRO[y][x].verifica(TABULEIRO, y, x, JREI, QTD_JREI)
        return verifica
    else:
        verifica = TABULEIRO[y][x].verifica(TABULEIRO, y, x, IREI, QTD_IREI)
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
            if z == 7 or z == 0:
                if (str(TABULEIRO[z][w])[0] == "p"):
                    if (str(TABULEIRO[z][w])[0] == "j"):
                        TABULEIRO[z][w] = rainha.Rainha("js")
                    else:
                        TABULEIRO[z][w] = rainha.Rainha("is")
            if (str(TABULEIRO[z][w])[0] == "j"):  # Testar
                pos_rei = pecas.identificarei(TABULEIRO, "ir")
                QTD_IREI = pecas.check(TABULEIRO, pos_rei[0], pos_rei[1], "j")
            else:  # Testar
                pos_rei = pecas.identificarei(TABULEIRO, "jr")
                QTD_JREI = pecas.check(TABULEIRO, pos_rei[0], pos_rei[1], "i")
            return True

    imprime()
    return False


@app.route('/moves/IA')
def jogaIA():
    if len(PECASIA) == 0:
        return []
    k = random.choice(PECASIA)
    movimento = TABULEIRO[k[0]][k[1]].verifica(TABULEIRO, k[0], k[1], False, [], 1)
    return [k, random.choice(movimento)]


def imprime():
    linha = ""
    print("  0   1   2   3   4   5   6   7")
    for i in range(8):
        for j in range(8):
            linha = linha + str(TABULEIRO_JOGADOR[i][j]) + "  "
        print(str(i) + " " + str(linha))
        linha = ""


for k in PECASIA:
    print("posição da peça")
    print(k)
    print("nome da peça")
    print(TABULEIRO_JOGADOR[k[0]][k[1]])
    print("onde a peça pode andar")
    print(TABULEIRO[k[0]][k[1]].verifica(TABULEIRO, k[0], k[1], False, [], 1))


app.run(port=5000, host='localhost', debug=True)
