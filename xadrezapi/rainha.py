import pecas


class Rainha(pecas.Pecas):
    def __init__(self, nome):
        super().__init__(nome)

    def verifica(self, tabuleiro, y, x, check, qtd):
        if super().get_nome()[0] == "j":
            if check:  # verifica se está em chek caso sim
                if len(qtd) == 1:  # verifica a quantidade de peças dando check
                    posicao_rei = pecas.identificarei(tabuleiro, "jr")  # identifico aonde o rei aliado está
                    # casas_inimigas = TABULEIRO[y][x].verifica(TABULEIRO, qtd[0], qtd[1], FALSE , [] ) #pega todos os possiveis caminhos da peça dando check
                    posibilidades = []
                    posibilidade_final = []
                    x_temp = x
                    y_temp = y
                    verificado = " "
                    while verificado == " ":  # while para verificar jogadas do centro para diagonal direita superior
                        x_temp += 1  # não é possível entrelaçar o código de torre e bispo, visto que caso um
                        y_temp += 1  # dos caminhos esteja o ocupado por uma peça aliado irá interromper
                        if x_temp <= 7 and y_temp <= 7:  # antecipadamente
                            verificado = pecas.ocupada(tabuleiro, y_temp, x_temp)
                            if verificado == "i" or verificado == " ":
                                posibilidades.append([y_temp, x_temp])
                        else:
                            verificado = "l"
                    verificado = " "
                    x_temp = x
                    y_temp = y
                    while verificado == " ":  # while para verificar jogadas do centro para diagonal esquerda superior
                        x_temp -= 1
                        y_temp += 1
                        if x_temp >= 0 and y_temp <= 7:
                            verificado = pecas.ocupada(tabuleiro, y_temp, x_temp)
                            if verificado == "i" or verificado == " ":
                                posibilidades.append([y_temp, x_temp])
                        else:
                            verificado = "l"
                    verificado = " "
                    x_temp = x
                    y_temp = y

                    while verificado == " ":  # while para verificar jogadas do centro para diagonal direita inferior
                        x_temp += 1
                        y_temp -= 1
                        if x_temp <= 7 and y_temp >= 0:
                            verificado = pecas.ocupada(tabuleiro, y_temp, x_temp)
                            if verificado == "i" or verificado == " ":
                                posibilidades.append([y_temp, x_temp])
                        else:
                            verificado = "l"
                    verificado = " "
                    x_temp = x
                    y_temp = y

                    while verificado == " ":  # while para verificar jogadas do centro para diagonal esquerda inferior
                        x_temp -= 1
                        y_temp -= 1
                        if x_temp >= 0 and y_temp >= 0:
                            verificado = pecas.ocupada(tabuleiro, y_temp, x_temp)
                            if verificado == "i" or verificado == " ":
                                posibilidades.append([y_temp, x_temp])
                        else:
                            verificado = "l"
                    verificado = " "
                    x_temp = x
                    y_temp = y
                    verificado = " "
                    while verificado == " ":  # while para verificar jogadas do centro para direita
                        x_temp += 1
                        if (x_temp <= 7):
                            verificado = pecas.ocupada(tabuleiro, y, x_temp)
                            if verificado == "i" or verificado == " ":
                                posibilidades.append([y, x_temp])
                        else:
                            verificado = "l"
                    verificado = " "
                    x_temp = x
                    while verificado == " ":  # while para verificar jogadas do centro para esquerda
                        x_temp -= 1
                        if (x_temp >= 0):
                            verificado = pecas.ocupada(tabuleiro, y, x_temp)
                            if verificado == "i" or verificado == " ":
                                posibilidades.append([y, x_temp])
                        else:
                            verificado = "l"
                    verificado = " "
                    x_temp = x
                    while verificado == " ":  # while para verificar jogadas do centro para cima
                        y_temp += 1
                        if (y_temp <= 7):
                            verificado = pecas.ocupada(tabuleiro, y_temp, x)
                            if verificado == "i" or verificado == " ":
                                posibilidades.append([y_temp, x])
                        else:
                            verificado = "l"

                        verificado = " "
                        y_temp = y
                        while verificado == " ":  # while para verificar jogadas do centro para baixo
                            y_temp -= 1
                            if (y_temp >= 0):
                                verificado = pecas.ocupada(tabuleiro, y_temp, x)
                                if verificado == "i" or verificado == " ":
                                    posibilidades.append([y_temp, x])
                            else:
                                verificado = "l"
                    for k in posibilidades:  # percorro a lista adicionando uma peça teste e verificando o caminho da peca dando check
                        # if(k in casas inimigas):
                        temp = tabuleiro[k[0], k[1]]
                        tabuleiro[k[0], k[1]] = "j"
                        todas_jogadas_inimigas = pecas.todas_jogadas(tabuleiro, "i")
                        if (posicao_rei not in todas_jogadas_inimigas):
                            posibilidade_final.append(k)
                        tabuleiro[k[0], k[1]] = temp
                    return posibilidade_final
                else:
                    return []
            else:
                posibilidades = []
                x_temp = x
                y_temp = y
                verificado = " "
                while verificado == " ":  # while para verificar jogadas do centro para diagonal direita superior
                    x_temp += 1           # não é possível entrelaçar o código de torre e bispo, visto que caso um
                    y_temp += 1           # dos caminhos esteja o ocupado por uma peça aliado irá interromper
                    if x_temp <= 7 and y_temp <= 7: # antecipadamente
                        verificado = pecas.ocupada(tabuleiro, y_temp, x_temp)
                        if verificado == "i" or verificado == " ":
                            posibilidades.append([y_temp, x_temp])
                    else:
                        verificado = "l"
                verificado = " "
                x_temp = x
                y_temp = y
                while verificado == " ":  # while para verificar jogadas do centro para diagonal esquerda superior
                    x_temp -= 1
                    y_temp += 1
                    if x_temp >= 0 and y_temp <= 7:
                        verificado = pecas.ocupada(tabuleiro, y_temp, x_temp)
                        if verificado == "i" or verificado == " ":
                            posibilidades.append([y_temp, x_temp])
                    else:
                        verificado = "l"
                verificado = " "
                x_temp = x
                y_temp = y

                while verificado == " ":  # while para verificar jogadas do centro para diagonal direita inferior
                    x_temp += 1
                    y_temp -= 1
                    if x_temp <= 7 and y_temp >= 0:
                        verificado = pecas.ocupada(tabuleiro, y_temp, x_temp)
                        if verificado == "i" or verificado == " ":
                            posibilidades.append([y_temp, x_temp])
                    else:
                        verificado = "l"
                verificado = " "
                x_temp = x
                y_temp = y

                while verificado == " ":  # while para verificar jogadas do centro para diagonal esquerda inferior
                    x_temp -= 1
                    y_temp -= 1
                    if x_temp >= 0 and y_temp >= 0:
                        verificado = pecas.ocupada(tabuleiro, y_temp, x_temp)
                        if verificado == "i" or verificado == " ":
                            posibilidades.append([y_temp, x_temp])
                    else:
                        verificado = "l"
                verificado = " "
                x_temp = x
                y_temp = y
                verificado = " "
                while verificado == " ":  # while para verificar jogadas do centro para direita
                    x_temp += 1
                    if (x_temp <= 7):
                        verificado = pecas.ocupada(tabuleiro, y, x_temp)
                        if verificado == "i" or verificado == " ":
                            posibilidades.append([y, x_temp])
                    else:
                        verificado = "l"
                verificado = " "
                x_temp = x
                while verificado == " ":  # while para verificar jogadas do centro para esquerda
                    x_temp -= 1
                    if (x_temp >= 0):
                        verificado = pecas.ocupada(tabuleiro, y, x_temp)
                        if verificado == "i" or verificado == " ":
                            posibilidades.append([y, x_temp])
                    else:
                        verificado = "l"
                verificado = " "
                x_temp = x
                while verificado == " ":  # while para verificar jogadas do centro para cima
                    y_temp += 1
                    if (y_temp <= 7):
                        verificado = pecas.ocupada(tabuleiro, y_temp, x)
                        if verificado == "i" or verificado == " ":
                            posibilidades.append([y_temp, x])
                    else:
                        verificado = "l"

                    verificado = " "
                    y_temp = y
                    while verificado == " ":  # while para verificar jogadas do centro para baixo
                        y_temp -= 1
                        if (y_temp >= 0):
                            verificado = pecas.ocupada(tabuleiro, y_temp, x)
                            if verificado == "i" or verificado == " ":
                                posibilidades.append([y_temp, x])
                        else:
                            verificado = "l"
                return posibilidades


            #IA
        else:
            if check:  # verifica se está em chek caso sim
                if len(qtd) == 1:  # verifica a quantidade de peças dando check
                    posicao_rei = pecas.identificarei(tabuleiro, "ir")  # identifico aonde o rei aliado está
                    # casas_inimigas = TABULEIRO[y][x].verifica(TABULEIRO, qtd[0], qtd[1], FALSE , [] ) #pega todos os possiveis caminhos da peça dando check
                    posibilidades = []
                    posibilidade_final = []
                    x_temp = x
                    y_temp = y
                    verificado = " "
                    while verificado == " ":  # while para verificar jogadas do centro para diagonal direita superior
                        x_temp += 1  # não é possível entrelaçar o código de torre e bispo, visto que caso um
                        y_temp += 1  # dos caminhos esteja o ocupado por uma peça aliado irá interromper
                        if x_temp <= 7 and y_temp <= 7:  # antecipadamente
                            verificado = pecas.ocupada(tabuleiro, y_temp, x_temp)
                            if verificado == "j" or verificado == " ":
                                posibilidades.append([y_temp, x_temp])
                        else:
                            verificado = "l"
                    verificado = " "
                    x_temp = x
                    y_temp = y
                    while verificado == " ":  # while para verificar jogadas do centro para diagonal esquerda superior
                        x_temp -= 1
                        y_temp += 1
                        if x_temp >= 0 and y_temp <= 7:
                            verificado = pecas.ocupada(tabuleiro, y_temp, x_temp)
                            if verificado == "j" or verificado == " ":
                                posibilidades.append([y_temp, x_temp])
                        else:
                            verificado = "l"
                    verificado = " "
                    x_temp = x
                    y_temp = y

                    while verificado == " ":  # while para verificar jogadas do centro para diagonal direita inferior
                        x_temp += 1
                        y_temp -= 1
                        if x_temp <= 7 and y_temp >= 0:
                            verificado = pecas.ocupada(tabuleiro, y_temp, x_temp)
                            if verificado == "j" or verificado == " ":
                                posibilidades.append([y_temp, x_temp])
                        else:
                            verificado = "l"
                    verificado = " "
                    x_temp = x
                    y_temp = y

                    while verificado == " ":  # while para verificar jogadas do centro para diagonal esquerda inferior
                        x_temp -= 1
                        y_temp -= 1
                        if x_temp >= 0 and y_temp >= 0:
                            verificado = pecas.ocupada(tabuleiro, y_temp, x_temp)
                            if verificado == "j" or verificado == " ":
                                posibilidades.append([y_temp, x_temp])
                        else:
                            verificado = "l"
                    verificado = " "
                    x_temp = x
                    y_temp = y
                    verificado = " "
                    while verificado == " ":  # while para verificar jogadas do centro para direita
                        x_temp += 1
                        if (x_temp <= 7):
                            verificado = pecas.ocupada(tabuleiro, y, x_temp)
                            if verificado == "j" or verificado == " ":
                                posibilidades.append([y, x_temp])
                        else:
                            verificado = "l"
                    verificado = " "
                    x_temp = x
                    while verificado == " ":  # while para verificar jogadas do centro para esquerda
                        x_temp -= 1
                        if (x_temp >= 0):
                            verificado = pecas.ocupada(tabuleiro, y, x_temp)
                            if verificado == "j" or verificado == " ":
                                posibilidades.append([y, x_temp])
                        else:
                            verificado = "l"
                    verificado = " "
                    x_temp = x
                    while verificado == " ":  # while para verificar jogadas do centro para cima
                        y_temp += 1
                        if (y_temp <= 7):
                            verificado = pecas.ocupada(tabuleiro, y_temp, x)
                            if verificado == "j" or verificado == " ":
                                posibilidades.append([y_temp, x])
                        else:
                            verificado = "l"

                        verificado = " "
                        y_temp = y
                        while verificado == " ":  # while para verificar jogadas do centro para baixo
                            y_temp -= 1
                            if (y_temp >= 0):
                                verificado = pecas.ocupada(tabuleiro, y_temp, x)
                                if verificado == "j" or verificado == " ":
                                    posibilidades.append([y_temp, x])
                            else:
                                verificado = "l"
                    for k in posibilidades:  # percorro a lista adicionando uma peça teste e verificando o caminho da peca dando check
                        # if(k in casas inimigas):
                        temp = tabuleiro[k[0], k[1]]
                        tabuleiro[k[0], k[1]] = "i"
                        todas_jogadas_inimigas = pecas.todas_jogadas(tabuleiro, "j")
                        if (posicao_rei not in todas_jogadas_inimigas):
                            posibilidade_final.append(k)
                        tabuleiro[k[0], k[1]] = temp
                    return posibilidade_final
                else:
                    return []
            else:
                posibilidades = []
                x_temp = x
                y_temp = y
                verificado = " "
                while verificado == " ":  # while para verificar jogadas do centro para diagonal direita superior
                    x_temp += 1           # não é possível entrelaçar o código de torre e bispo, visto que caso um
                    y_temp += 1           # dos caminhos esteja o ocupado por uma peça aliado irá interromper
                    if x_temp <= 7 and y_temp <= 7: # antecipadamente
                        verificado = pecas.ocupada(tabuleiro, y_temp, x_temp)
                        if verificado == "j" or verificado == " ":
                            posibilidades.append([y_temp, x_temp])
                    else:
                        verificado = "l"
                verificado = " "
                x_temp = x
                y_temp = y
                while verificado == " ":  # while para verificar jogadas do centro para diagonal esquerda superior
                    x_temp -= 1
                    y_temp += 1
                    if x_temp >= 0 and y_temp <= 7:
                        verificado = pecas.ocupada(tabuleiro, y_temp, x_temp)
                        if verificado == "j" or verificado == " ":
                            posibilidades.append([y_temp, x_temp])
                    else:
                        verificado = "l"
                verificado = " "
                x_temp = x
                y_temp = y

                while verificado == " ":  # while para verificar jogadas do centro para diagonal direita inferior
                    x_temp += 1
                    y_temp -= 1
                    if x_temp <= 7 and y_temp >= 0:
                        verificado = pecas.ocupada(tabuleiro, y_temp, x_temp)
                        if verificado == "j" or verificado == " ":
                            posibilidades.append([y_temp, x_temp])
                    else:
                        verificado = "l"
                verificado = " "
                x_temp = x
                y_temp = y

                while verificado == " ":  # while para verificar jogadas do centro para diagonal esquerda inferior
                    x_temp -= 1
                    y_temp -= 1
                    if x_temp >= 0 and y_temp >= 0:
                        verificado = pecas.ocupada(tabuleiro, y_temp, x_temp)
                        if verificado == "j" or verificado == " ":
                            posibilidades.append([y_temp, x_temp])
                    else:
                        verificado = "l"
                verificado = " "
                x_temp = x
                y_temp = y
                verificado = " "
                while verificado == " ":  # while para verificar jogadas do centro para direita
                    x_temp += 1
                    if (x_temp <= 7):
                        verificado = pecas.ocupada(tabuleiro, y, x_temp)
                        if verificado == "j" or verificado == " ":
                            posibilidades.append([y, x_temp])
                    else:
                        verificado = "l"
                verificado = " "
                x_temp = x
                while verificado == " ":  # while para verificar jogadas do centro para esquerda
                    x_temp -= 1
                    if (x_temp >= 0):
                        verificado = pecas.ocupada(tabuleiro, y, x_temp)
                        if verificado == "j" or verificado == " ":
                            posibilidades.append([y, x_temp])
                    else:
                        verificado = "l"
                verificado = " "
                x_temp = x
                while verificado == " ":  # while para verificar jogadas do centro para cima
                    y_temp += 1
                    if (y_temp <= 7):
                        verificado = pecas.ocupada(tabuleiro, y_temp, x)
                        if verificado == "j" or verificado == " ":
                            posibilidades.append([y_temp, x])
                    else:
                        verificado = "l"

                    verificado = " "
                    y_temp = y
                    while verificado == " ":  # while para verificar jogadas do centro para baixo
                        y_temp -= 1
                        if (y_temp >= 0):
                            verificado = pecas.ocupada(tabuleiro, y_temp, x)
                            if verificado == "j" or verificado == " ":
                                posibilidades.append([y_temp, x])
                        else:
                            verificado = "l"
            return posibilidades