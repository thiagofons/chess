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


@app.route('/moves/<int:y>and<int:x>', methods=['GET'])
def moves(y, x):
    if VEZ == "j":
        verifica = TABULEIRO[y][x].verifica(TABULEIRO, y, x, JREI, QTD_JREI, 1)
        return verifica
    else:
        verifica = TABULEIRO[y][x].verifica(TABULEIRO, y, x, IREI, QTD_IREI, 1)
        return verifica


@app.route('/moves/<int:y>and<int:x>por<int:z>and<int:w>', methods=['GET'])
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
def jogaIA(dificuldade):
    if dificuldade == 0:
        PECASIA = pecas.pecasIA(TABULEIRO, "i", 2)
        tam = len(PECASIA)
        rand_move = random.randint(0, tam)
        k = PECASIA[rand_move]
        movimento = TABULEIRO[k[0]][k[1]].verifica(
            TABULEIRO, k[0], k[1], False, [], 1)
        return movimento
    
    elif dificuldade == 1:
        pecas_ia = pecas.pecasIA(TABULEIRO, "i", 2)
        maior = -1
        pos_peca = []
        pos_casa = []

        if pecas_ia:
            for k in pecas_ia:
                for h in TABULEIRO[k[0]][k[1]].verifica(TABULEIRO, k[0], k[1], False, [], 1):
                    match str(TABULEIRO[h[0]][h[1]])[1]:
                        case "X":
                            if maior < 0:
                                maior = 0
                                pos_peca = []
                                pos_casa = []

                                pos_peca = pos_peca + [h[0], h[1]]
                                pos_casa = pos_casa + [k[0], k[1]]
                            elif maior == 0:
                                pos_peca = pos_peca + [h[0], h[1]]
                                pos_casa = pos_casa + [k[0], k[1]]
                        case "p":
                            if maior < 1:
                                maior = 1
                                pos_peca = []
                                pos_casa = []

                                pos_peca = pos_peca + [h[0], h[1]]
                                pos_casa = pos_casa + [k[0], k[1]]
                            elif maior == 1:
                                pos_peca = pos_peca + [h[0], h[1]]
                                pos_casa = pos_casa + [k[0], k[1]]
                        case "c":
                            if maior < 2:
                                maior = 2
                                pos_peca = []
                                pos_casa = []

                                pos_peca = pos_peca + [h[0], h[1]]
                                pos_casa = pos_casa + [k[0], k[1]]
                            elif maior == 2:
                                pos_peca = pos_peca + [h[0], h[1]]
                                pos_casa = pos_casa + [k[0], k[1]]
                        case "t":
                            if maior < 3:
                                maior = 3
                                pos_peca = []
                                pos_casa = []

                                pos_peca = pos_peca + [h[0], h[1]]
                                pos_casa = pos_casa + [k[0], k[1]]
                            elif maior == 3:
                                pos_peca = pos_peca + [h[0], h[1]]
                                pos_casa = pos_casa + [k[0], k[1]]
                        case "b":
                            if maior < 4:
                                maior = 4
                                pos_peca = []
                                pos_casa = []

                                pos_peca = pos_peca + [h[0], h[1]]
                                pos_casa = pos_casa + [k[0], k[1]]
                            elif maior == 4:
                                pos_peca = pos_peca + [h[0], h[1]]
                                pos_casa = pos_casa + [k[0], k[1]]
                        case "s":
                            if maior < 5:
                                maior = 5
                                pos_peca = []
                                pos_casa = []

                                pos_peca = pos_peca + [h[0], h[1]]
                                pos_casa = pos_casa + [k[0], k[1]]
                            elif maior == 5:
                                pos_peca = pos_peca + [h[0], h[1]]
                                pos_casa = pos_casa + [k[0], k[1]]
                        case "r":
                            if maior < 10:
                                maior = 10
                                pos_peca = []
                                pos_casa = []

                                pos_peca = pos_peca + [h[0], h[1]]
                                pos_casa = pos_casa + [k[0], k[1]]
                            elif maior == 10:
                                pos_peca = pos_peca + [h[0], h[1]]
                                pos_casa = pos_casa + [k[0], k[1]]
            valor = random.randint(0, len(pos_peca))        
            return troca(pos_peca[valor][0], pos_peca[valor][1], pos_casa[valor][0], pos_casa[valor][1])

        else:
            return []




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

#todas_jogadas_ia = pecas.todas_jogadas(TABULEIRO, "i", 2)
#print("Todas as jogadas: ", todas_jogadas_ia)
#print("=============================")

teste = pecas.todas_jogadas(TABULEIRO, "j", 2)
print(teste)

app.run(port=5000, host='localhost', debug=True)
