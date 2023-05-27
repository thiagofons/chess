import pecas


def verifica(tabuleiro, y, x_temp):
    pass


class torre(pecas.Pecas):
    def __init__(self, nome):
        super().__init__(nome)

    def verifica(tabuleiro , x , y):
        if super().get_nome()[0] == "j":
            posibilidades = []
            x_temp = x
            y_temp = y
            verificado = " "
            while verificado == " ": # while para verificar jogadas do centro para direita
                x_temp+=1
                if(x_temp<=7):
                    verificado = verifica(tabuleiro,y, x_temp)
                    if verificado == "i" or verificado ==" ":
                        posibilidades.append([y,x_temp])
                else:
                    verificado = "l"
            verificado = " "
            x_temp = x
            while verificado == " ":  # while para verificar jogadas do centro para esquerda
                x_temp -= 1
                if (x_temp >= 0 ):
                    verificado = verifica(tabuleiro, y, x_temp)
                    if verificado == "i" or verificado == " ":
                        posibilidades.append([y, x_temp])
                else:
                    verificado = "l"
            verificado = " "
            x_temp = x
            while verificado == " ":  # while para verificar jogadas do centro para cima
                y_temp += 1
                if (y_temp <= 7):
                    verificado = verifica(tabuleiro, y_temp, x)
                    if verificado == "i" or verificado == " ":
                        posibilidades.append([y_temp, x])
                else:
                    verificado = "l"

                verificado = " "
                y_temp = y
                while verificado == " ":  # while para verificar jogadas do centro para baixo
                    y_temp -= 1
                    if (y_temp >= 0):
                        verificado = verifica(tabuleiro, y_temp, x)
                        if verificado == "i" or verificado == " ":
                            posibilidades.append([y_temp, x])
                    else:
                        verificado = "l"
            return posibilidades
