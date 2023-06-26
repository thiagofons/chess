import pecas

class Cavalo(pecas.Pecas):
    def __init__(self, nome):
        super().__init__(nome)

    def verifica(self, tabuleiro, y, x, check, qtd,mod):
        if super().get_nome()[0] == "j":

                if len(qtd) <= 1:  # verifica a quantidade de peças dando check
                    posicao_rei = pecas.identificarei(tabuleiro, "jr")  # identifico aonde o rei aliado está
                    # casas_inimigas = TABULEIRO[y][x].verifica(TABULEIRO, qtd[0], qtd[1], FALSE , [] ) #pega todos os possiveis caminhos da peça dando check
                    posibilidade = []
                    posibilidade_final = []
                    movimento_2 = 2
                    movimento_1 = 1
                    if y - movimento_2 >= 0:  # verificando altura l para cima
                        if x + movimento_1 <= 7:  # verificando perna do l para direita
                            verificado = pecas.ocupada(tabuleiro, y - movimento_2, x + movimento_1)
                            if verificado == " " or verificado == "i":
                                posibilidade.append([y - movimento_2, x + movimento_1])
                        if x - movimento_1 >= 0:  # verificando perna do l para esquerda
                            verificado = pecas.ocupada(tabuleiro, y - movimento_2, x - movimento_1)
                            if verificado == " " or verificado == "i":
                                posibilidade.append([y - movimento_2, x - movimento_1])

                    if y + movimento_2 <= 7:  # verificando altura l para baixo
                        if x + movimento_1 <= 7:  # verificando perna do l para direita
                            verificado = pecas.ocupada(tabuleiro, y + movimento_2, x + movimento_1)
                            if verificado == " " or verificado == "i":
                                posibilidade.append([y + movimento_2, x + movimento_1])
                        if x - movimento_1 >= 0:  # verificando perna do l para esquerda
                            verificado = pecas.ocupada(tabuleiro, y + movimento_2, x - movimento_1)
                            if verificado == " " or verificado == "i":
                                posibilidade.append([y + movimento_2, x - movimento_1])

                    if x + movimento_2 <= 7:  # verificando altura l para direita
                        if y - movimento_1 >= 0:  # verificando perna do l para cima
                            verificado = pecas.ocupada(tabuleiro, y - movimento_1, x + movimento_2)
                            if verificado == " " or verificado == "i":
                                posibilidade.append([y - movimento_1, x + movimento_2])
                        if y + movimento_1 <= 7:  # verificando perna do l para  baixo
                            verificado = pecas.ocupada(tabuleiro, y + movimento_1, x + movimento_2)
                            if verificado == " " or verificado == "i":
                                posibilidade.append([y + movimento_1, x + movimento_2])

                    if x - movimento_2 >= 0:  # verificando altura l para esquerda
                        if y - movimento_1 >= 0:  # verificando perna do l para cima
                            verificado = pecas.ocupada(tabuleiro, y - movimento_1, x - movimento_2)
                            if verificado == " " or verificado == "i":
                                posibilidade.append([y - movimento_1, x - movimento_2])
                        if y + movimento_1 <= 7:  # verificando perna do l para  baixo
                            verificado = pecas.ocupada(tabuleiro, y + movimento_1, x - movimento_2)
                            if verificado == " " or verificado == "i":
                                posibilidade.append([y + movimento_1, x - movimento_2])
                    for k in posibilidade:  # percorro a lista adicionando uma peça teste e verificando o caminho da peca dando check
                        # if(k in casas inimigas):
                        temp = tabuleiro[k[0]] [k[1]]
                        tabuleiro[k[0]] [k[1]] = "j"
                        if (mod > 0):
                            todas_jogadas_inimigas = pecas.todas_jogadas(tabuleiro, "i",mod)
                            if (posicao_rei not in todas_jogadas_inimigas):
                                posibilidade_final.append(k)
                        tabuleiro[k[0]] [k[1]] = temp
                    return posibilidade_final
                else:
                    return []



        #IA
        else:

                if len(qtd) <= 1:  # verifica a quantidade de peças dando check
                    posicao_rei = pecas.identificarei(tabuleiro, "ir")  # identifico aonde o rei aliado está
                    # casas_inimigas = TABULEIRO[y][x].verifica(TABULEIRO, qtd[0], qtd[1], FALSE , [] ) #pega todos os possiveis caminhos da peça dando check
                    posibilidade = []
                    posibilidade_final = []
                    movimento_2 = 2
                    movimento_1 = 1
                    if y - movimento_2 >= 0:  # verificando altura l para cima
                        if x + movimento_1 <= 7:  # verificando perna do l para direita
                            verificado = pecas.ocupada(tabuleiro, y - movimento_2, x + movimento_1)
                            if verificado == " " or verificado == "j":
                                posibilidade.append([y - movimento_2, x + movimento_1])
                        if x - movimento_1 >= 0:  # verificando perna do l para esquerda
                            verificado = pecas.ocupada(tabuleiro, y - movimento_2, x - movimento_1)
                            if verificado == " " or verificado == "j":
                                posibilidade.append([y - movimento_2, x - movimento_1])

                    if y + movimento_2 <= 7:  # verificando altura l para baixo
                        if x + movimento_1 <= 7:  # verificando perna do l para direita
                            verificado = pecas.ocupada(tabuleiro, y + movimento_2, x + movimento_1)
                            if verificado == " " or verificado == "j":
                                posibilidade.append([y + movimento_2, x + movimento_1])
                        if x - movimento_1 >= 0:  # verificando perna do l para esquerda
                            verificado = pecas.ocupada(tabuleiro, y + movimento_2, x - movimento_1)
                            if verificado == " " or verificado == "j":
                                posibilidade.append([y + movimento_2, x - movimento_1])

                    if x + movimento_2 <= 7:  # verificando altura l para direita
                        if y - movimento_1 >= 0:  # verificando perna do l para cima
                            verificado = pecas.ocupada(tabuleiro, y - movimento_1, x + movimento_2)
                            if verificado == " " or verificado == "j":
                                posibilidade.append([y - movimento_1, x + movimento_2])
                        if y + movimento_1 <= 7:  # verificando perna do l para  baixo
                            verificado = pecas.ocupada(tabuleiro, y + movimento_1, x + movimento_2)
                            if verificado == " " or verificado == "j":
                                posibilidade.append([y + movimento_1, x + movimento_2])

                    if x - movimento_2 >= 0:  # verificando altura l para esquerda
                        if y - movimento_1 >= 0:  # verificando perna do l para cima
                            verificado = pecas.ocupada(tabuleiro, y - movimento_1, x - movimento_2)
                            if verificado == " " or verificado == "j":
                                posibilidade.append([y - movimento_1, x - movimento_2])
                        if y + movimento_1 <= 7:  # verificando perna do l para  baixo
                            verificado = pecas.ocupada(tabuleiro, y + movimento_1, x - movimento_2)
                            if verificado == " " or verificado == "j":
                                posibilidade.append([y + movimento_1, x - movimento_2])
                    for k in posibilidade:  # percorro a lista adicionando uma peça teste e verificando o caminho da peca dando check
                        # if(k in casas inimigas):
                        temp = tabuleiro[k[0]] [k[1]]
                        tabuleiro[k[0]] [k[1]] = "i"

                        if (mod > 0):
                            todas_jogadas_inimigas = pecas.todas_jogadas(tabuleiro, "j",mod)
                            if (posicao_rei not in todas_jogadas_inimigas):
                                posibilidade_final.append(k)
                        tabuleiro[k[0]] [k[1]] = temp
                    return posibilidade_final
                else:
                    return []

