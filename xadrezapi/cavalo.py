import pecas

class Cavalo(pecas.Pecas):
    def __init__(self, nome):
        super().__init__(nome)

    def verifica(self,tabuleiro, y, x):
        if super().get_nome()[0] == "j":
            posibilidades = []
            movimento_2 = 2
            movimento_1 = 1
            if y - movimento_2 >= 0:  # verificando altura l para cima
                if x + movimento_1 <= 7:  # verificando perna do l para direita
                    verificado = pecas.ocupada(tabuleiro, y - movimento_2, x + movimento_1)
                    if verificado == " " or verificado == "i":
                        posibilidades.append([y - movimento_2, x + movimento_1])
                if x - movimento_1 >= 0:  # verificando perna do l para esquerda
                    verificado = pecas.ocupada(tabuleiro, y - movimento_2, x - movimento_1)
                    if verificado == " " or verificado == "i":
                        posibilidades.append([y - movimento_2, x - movimento_1])

            if y + movimento_2 <= 7:  # verificando altura l para baixo
                if x + movimento_1 <= 7:  # verificando perna do l para direita
                    verificado = pecas.ocupada(tabuleiro, y + movimento_2, x + movimento_1)
                    if verificado == " " or verificado == "i":
                        posibilidades.append([y + movimento_2, x + movimento_1])
                if x - movimento_1 >= 0:  # verificando perna do l para esquerda
                    verificado = pecas.ocupada(tabuleiro, y + movimento_2, x - movimento_1)
                    if verificado == " " or verificado == "i":
                        posibilidades.append([y + movimento_2, x - movimento_1])

            if x + movimento_2 <= 7:  # verificando altura l para direita
                if y - movimento_1 >= 0:  # verificando perna do l para cima
                    verificado = pecas.ocupada(tabuleiro, y - movimento_1, x + movimento_2)
                    if verificado == " " or verificado == "i":
                        posibilidades.append([y - movimento_1, x + movimento_2])
                if y + movimento_1 <= 7:  # verificando perna do l para  baixo
                    verificado = pecas.ocupada(tabuleiro, y + movimento_1, x + movimento_2)
                    if verificado == " " or verificado == "i":
                        posibilidades.append([y + movimento_1, x + movimento_2])

            if x - movimento_2 >= 0:  # verificando altura l para esquerda
                if y - movimento_1 >= 0:  # verificando perna do l para cima
                    verificado = pecas.ocupada(tabuleiro, y - movimento_1, x - movimento_2)
                    if verificado == " " or verificado == "i":
                        posibilidades.append([y - movimento_1, x - movimento_2])
                if y + movimento_1 <= 7:  # verificando perna do l para  baixo
                    verificado = pecas.ocupada(tabuleiro, y + movimento_1, x - movimento_2)
                    if verificado == " " or verificado == "i":
                        posibilidades.append([y + movimento_1, x - movimento_2])
            print(posibilidades)
            return posibilidades
