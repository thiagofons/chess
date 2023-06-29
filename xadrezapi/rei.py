import pecas

class Rei(pecas.Pecas):
    def __init__(self, nome):
        super().__init__(nome)

    def verifica(self, tabuleiro, y, x, check, qtd,mod):
        if super().get_nome()[0] == "j":
            if check:
                posicao_rei = pecas.identificarei(tabuleiro, "jr")  # identifico aonde o rei aliado está
                # casas_inimigas = TABULEIRO[y][x].verifica(TABULEIRO, qtd[0], qtd[1], FALSE , [] ) #pega todos os possiveis caminhos da peça dando check
                posibilidade = []
                posibilidade_final = []
                for i in range(-1, 2):
                    if i + y <= 7 or i + y >= 0:
                        for j in range(-1, 2):
                            if j + x <= 7 and j + x >= 0:
                                 if y + i <= 7 and y + i >= 0:
                                    verificado = pecas.ocupada(tabuleiro, y + i, x + j)
                                    if verificado != "a":
                                        posibilidade.append([y + i, j + x])
                for k in posibilidade:  # percorro a lista adicionando uma peça teste e verificando o caminho da peca dando check
                     # if(k in casas inimigas):
                    temp = tabuleiro[k[0]] [k[1]]
                    tabuleiro[k[0]] [k[1]] = "j"
                    todas_jogadas_inimigas = pecas.todas_jogadas(tabuleiro, "i",mod)
                    if (posicao_rei not in todas_jogadas_inimigas):
                        posibilidade_final.append(k)
                    tabuleiro[k[0]] [k[1]] = temp
                    return posibilidade_final
            else:
                posibilidades = []
                for i in range (-1,2):
                    if i+y <= 7 or i+y >= 0:
                        for j in range(-1,2):
                            if j + x <= 7 and j + x >= 0:
                                if y+i <=7 and y+i >=0:
                                    verificado = pecas.ocupada(tabuleiro,y+i, x+j)
                                    if verificado != "a":
                                        posibilidades.append([y+i, j+x])

                return posibilidades




        #IA
        else:
            if check:
                posicao_rei = pecas.identificarei(tabuleiro, "ir")  # identifico aonde o rei aliado está
                # casas_inimigas = TABULEIRO[y][x].verifica(TABULEIRO, qtd[0], qtd[1], FALSE , [] ) #pega todos os possiveis caminhos da peça dando check
                posibilidade = []
                posibilidade_final = []
                for i in range(-1, 2):
                    if i + y <= 7 or i + y >= 0:
                        for j in range(-1, 2):
                            if j + x <= 7 and j + x >= 0:
                                 if y + i <= 7 and y + i >= 0:
                                    verificado = pecas.ocupada(tabuleiro, y + i, x + j)
                                    if verificado != "i":
                                        posibilidade.append([y + i, j + x])
                for k in posibilidade:  # percorro a lista adicionando uma peça teste e verificando o caminho da peca dando check
                     # if(k in casas inimigas):
                    temp = tabuleiro[k[0]] [k[1]]
                    tabuleiro[k[0]] [k[1]] = "j"
                    todas_jogadas_inimigas = pecas.todas_jogadas(tabuleiro, "j",mod)
                    if (posicao_rei not in todas_jogadas_inimigas):
                        posibilidade_final.append(k)
                    tabuleiro[k[0]] [k[1]] = temp
                    return posibilidade_final
            else:
                posibilidades = []
                for i in range (-1,2):
                    if i+y <= 7 or i+y >= 0:
                        for j in range(-1,2):
                            if j + x <= 7 and j + x >= 0:
                                if y+i <=7 and y+i >=0:
                                    verificado = pecas.ocupada(tabuleiro,y+i, x+j)
                                    if verificado != "i":
                                        posibilidades.append([y+i, j+x])

                return posibilidades