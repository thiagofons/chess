import pecas

class Rei(pecas.Pecas):
    def __init__(self, nome):
        super().__init__(nome)

    def verifica(tabuleiro, x, y):
        if super().get_nome()[0] == "j":
            posibilidades = []
            for i in range (-1,2):
                if i+y <= 7 or i+y >= 0:
                    for j in range(-1,2):
                        if j + x <= 7 or j + x >= 0:
                            verificado = pecas.ocupada(tabuleiro,y, x)
                            if verificado != "a":
                                posibilidades.append([y+i, j+x])

            return posibilidades