import pecas

class Peao(pecas.Pecas):

    def __init__(self, nome):
        super().__init__(nome)

    def verifica(self, tabuleiro, y, x, check, qtd):  # check = True, False, qtd = lista de peças dando check
        if super().get_nome()[0] == "j":
            if check:  # verifica se está em chek caso sim
                if len(qtd) == 1:  # verifica a quantidade de peças dando check
                    posicao_rei = pecas.identificarei(tabuleiro, "jr")  # identifico aonde o rei aliado está
                    # casas_inimigas = TABULEIRO[y][x].verifica(TABULEIRO, qtd[0], qtd[1], FALSE , [] ) #pega todos os possiveis caminhos da peça dando check
                    posibilidade = []
                    posibilidade_final=[] # local que ira armazenar apenas as possibilidade que impeçam o check
                    for i in range(-1, 2): # povoa possibilidade para todas a possiveis jogadas das peças, incluindo as que não detem o check
                        if x - i >= 0 and x - i <= 7:  # verifica se a casa está dentro do limite do tabuleiro
                            verifica = pecas.ocupada(tabuleiro, y - 1,
                                                     x - i)  # inplementar função para caso esteja ocupada a casa
                            if (x - i != x):  # se a casa ocupada está na diagonal
                                if verifica == 'i':
                                    posibilidade.append([y - 1, x - i])
                            else:
                                if verifica == " ":
                                    posibilidade.append([y - 1, x])
                                    if y == 6:  # verifica se peão do jogador já foi movido alguma vez
                                        verifica = pecas.ocupada(tabuleiro, y - 2,
                                                                 x - i)  # inplementar função para caso esteja ocupada a casa
                                        if (verifica == " "):
                                            posibilidade.append([y - 2, x])
                    print(posibilidade)
                    for k in posibilidade: #percorro a lista adicionando uma peça teste e verificando o caminho da peca dando check
                        #if(k in casas inimigas):
                            temp = tabuleiro[k[0],k[1]]
                            tabuleiro[k[0], k[1]] = "j"
                            todas_jogadas_inimigas= pecas.todas_jogadas(tabuleiro,"i")
                            if(posicao_rei not in todas_jogadas_inimigas):
                                posibilidade_final.append(k)
                            tabuleiro[k[0], k[1]] = temp
                    return posibilidade_final
                else:
                    return []

            else:
                posibilidade = []
                for i in range(-1, 2):
                    if x - i >= 0 and x - i <= 7:  # verifica se a casa está dentro do limite do tabuleiro
                        verifica = pecas.ocupada(tabuleiro, y - 1, x - i)  # inplementar função para caso esteja ocupada a casa
                        if (x - i != x):  # se a casa ocupada está na diagonal
                            if verifica == 'i':
                                posibilidade.append([y - 1, x - i])
                        else:
                            if verifica == " ":
                                posibilidade.append([y - 1, x])
                                if y == 6:  # verifica se peão do jogador já foi movido alguma vez
                                    verifica = pecas.ocupada(tabuleiro, y - 2,x - i)  # inplementar função para caso esteja ocupada a casa
                                    if (verifica == " "):
                                        posibilidade.append([y - 2, x])
                print(posibilidade)
                return posibilidade

        else:
            if check:  # verifica se está em chek caso sim
                if len(qtd) == 1:  # verifica a quantidade de peças dando check
                    posicao_rei = pecas.identificarei(tabuleiro, "ir")  # identifico aonde o rei aliado está
                    # casas_inimigas = TABULEIRO[y][x].verifica(TABULEIRO, qtd[0], qtd[1], FALSE , [] ) #pega todos os possiveis caminhos da peça dando check
                    posibilidade = []
                    posibilidade_final = []  # local que ira armazenar apenas as possibilidade que impeçam o check
                    for i in range(-1,2):  # povoa possibilidade para todas a possiveis jogadas das peças, incluindo as que não detem o check
                        if x - i >= 0 and x - i <= 7:  # verifica se a casa está dentro do limite do tabuleiro
                            verifica = pecas.ocupada(tabuleiro, y - 1,x - i)  # inplementar função para caso esteja ocupada a casa
                            if (x - i != x):  # se a casa ocupada está na diagonal
                                if verifica == 'i':
                                    posibilidade.append([y - 1, x - i])
                            else:
                                if verifica == " ":
                                    posibilidade.append([y - 1, x])
                                    if y == 6:  # verifica se peão do jogador já foi movido alguma vez
                                        verifica = pecas.ocupada(tabuleiro, y - 2,
                                                                 x - i)  # inplementar função para caso esteja ocupada a casa
                                        if (verifica == " "):
                                            posibilidade.append([y - 2, x])
                    print(posibilidade)
                    for k in posibilidade:  # percorro a lista adicionando uma peça teste e verificando o caminho da peca dando check
                        # if(k in casas inimigas):
                        temp = tabuleiro[k[0], k[1]]
                        tabuleiro[k[0], k[1]] = "i"
                        todas_jogadas_inimigas = pecas.todas_jogadas(tabuleiro, "j")
                        if (posicao_rei not in todas_jogadas_inimigas): #verifica se existe peças dando check
                            posibilidade_final.append(k)
                        tabuleiro[k[0], k[1]] = temp
                    return posibilidade_final
                else:
                    return []


            #IA
            else:
                posibilidade = []
                for i in range(-1, 2):
                    if x - i >= 0 and x - i <= 7:  # verifica se a casa está dentro do limite do tabuleiro
                        verifica = pecas.ocupada(tabuleiro, y - 1,
                                                 x - i)  # inplementar função para caso esteja ocupada a casa
                        if (x - i != x):  # se a casa ocupada está na diagonal
                            if verifica == 'i':
                                posibilidade.append([y - 1, x - i])
                        else:
                            if verifica == " ":
                                posibilidade.append([y - 1, x])
                                if y == 6:  # verifica se peão do jogador já foi movido alguma vez
                                    verifica = pecas.ocupada(tabuleiro, y - 2,x - i)  # inplementar função para caso esteja ocupada a casa
                                    if (verifica == " "):
                                        posibilidade.append([y - 2, x])
                print("/////////////////////////////////////////////////")
                print(posibilidade)
                return posibilidade
