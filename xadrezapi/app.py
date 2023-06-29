from json import dump

from flask import jsonify, request, Flask
from flask_cors import CORS, cross_origin

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
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/inicia', methods=['GET'])
@cross_origin()
def retorno():
    return TABULEIRO_JOGADOR


@app.route("/xeque-mate-ia", methods=['GET'])
@cross_origin()
def verifica_xeque_mate_ia():
    if pecas.check(TABULEIRO, "i", 2):
        return "true"
    return "false"


@app.route("/xeque-mate-jogador", methods=['GET'])
@cross_origin()
def verifica_xeque_mate_jogador():
    if pecas.check(TABULEIRO, "j", 2):
        return "true"
    return "false"


@app.route('/moves/<int:y>and<int:x>', methods=['GET'])
@cross_origin()
def moves(y, x):
    if VEZ == "j":
        verifica = TABULEIRO[y][x].verifica(TABULEIRO, y, x, JREI, QTD_JREI, 1)
        return verifica
    else:
        verifica = TABULEIRO[y][x].verifica(TABULEIRO, y, x, IREI, QTD_IREI, 1)
        return verifica


@app.route('/moves/<int:y>and<int:x>por<int:z>and<int:w>', methods=['GET'])
@cross_origin()
def troca(y, x, z, w):
    novo = [z, w]
    if str(TABULEIRO[y][x])[0] != "j":       
        if novo in TABULEIRO[y][x].verifica(TABULEIRO, y, x, False, QTD_JREI, 2):
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
            
            return "True"
        
    if TABULEIRO[y][x] != "i":
        if novo in TABULEIRO[y][x].verifica(TABULEIRO, y, x, False, QTD_IREI, 2):
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
            
            return "True"

    imprime()
    return "False"


@app.route('/moves/IA/<int:dificuldade>')
@cross_origin()
def jogaIA(dificuldade):
    if dificuldade == 0:
        PECASIA = pecas.pecasIA(TABULEIRO, "i", 2)
        tam = len(PECASIA)
        rand_move = random.randint(0, tam - 1)
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
                for h in TABULEIRO[k[0]][k[1]].verifica(TABULEIRO, k[0], k[1], False, [], 2):
                    teste = str(TABULEIRO[h[0]][h[1]])[1]


                    match teste:

                        case "X":
                            if maior < 0:
                                maior = 0
                                pos_peca = []
                                pos_casa = []

                                pos_peca = pos_peca + [[k[0], k[1]]]
                                pos_casa = pos_casa + [[h[0], h[1]]]
                            elif maior == 0:
                                pos_peca = pos_peca + [[k[0], k[1]]]
                                pos_casa = pos_casa + [[h[0], h[1]]]
                        case "p":
                            if maior < 1:
                                maior = 1
                                pos_peca = []
                                pos_casa = []

                                pos_peca = pos_peca + [[k[0], k[1]]]
                                pos_casa = pos_casa + [[h[0], h[1]]]
                            elif maior == 1:
                                pos_peca = pos_peca + [[k[0], k[1]]]
                                pos_casa = pos_casa + [[h[0], h[1]]]
                        case "c":
                            if maior < 2:
                                maior = 2
                                pos_peca = []
                                pos_casa = []

                                pos_peca = pos_peca + [[k[0], k[1]]]
                                pos_casa = pos_casa + [[h[0], h[1]]]
                            elif maior == 2:
                                pos_peca = pos_peca + [[k[0], k[1]]]
                                pos_casa = pos_casa + [[h[0], h[1]]]
                        case "t":
                            if maior < 3:
                                maior = 3
                                pos_peca = []
                                pos_casa = []

                                pos_peca = pos_peca + [[k[0], k[1]]]
                                pos_casa = pos_casa + [[h[0], h[1]]]
                            elif maior == 3:
                                pos_peca = pos_peca + [[k[0], k[1]]]
                                pos_casa = pos_casa + [[h[0], h[1]]]
                        case "b":
                            if maior < 4:
                                maior = 4
                                pos_peca = []
                                pos_casa = []

                                pos_peca = pos_peca + [[k[0], k[1]]]
                                pos_casa = pos_casa + [[h[0], h[1]]]
                            elif maior == 4:
                                pos_peca = pos_peca + [[k[0], k[1]]]
                                pos_casa = pos_casa + [[h[0], h[1]]]
                        case "s":
                            if maior < 5:
                                maior = 5
                                pos_peca = []
                                pos_casa = []

                                pos_peca = pos_peca + [[k[0], k[1]]]
                                pos_casa = pos_casa + [[h[0], h[1]]]
                            elif maior == 5:
                                pos_peca = pos_peca + [[k[0], k[1]]]
                                pos_casa = pos_casa + [[h[0], h[1]]]
                        case "r":
                            if maior < 10:
                                maior = 10
                                pos_peca = []
                                pos_casa = []

                                pos_peca = pos_peca + [[k[0], k[1]]]
                                pos_casa = pos_casa + [[h[0], h[1]]]
                            elif maior == 10:
                                pos_peca = pos_peca + [[k[0], k[1]]]
                                pos_casa = pos_casa + [[h[0], h[1]]]
            valor = random.randint(0, len(pos_peca) - 1)  

            # print(pos_peca[valor][0])
            # print(pos_peca[valor][1])

            resultado = troca(pos_peca[valor][0], pos_peca[valor][1], pos_casa[valor][0], pos_casa[valor][1])
            
            # print([pos_peca[valor][0], pos_peca[valor][1]] + [pos_casa[valor][0], pos_casa[valor][1]])
            return [[pos_peca[valor][0], pos_peca[valor][1]], [pos_casa[valor][0], pos_casa[valor][1]]]
            
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



app.run(port=5000, host='localhost', debug=True)
