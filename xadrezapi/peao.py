import pecas


def ocupada(tabuleiro, xpos, ypox):
    pass


class Peao(pecas.Pecas):

    def __init__(self, nome):
        super().__init__(nome)
        self.__primeiro_movimento = False #implemntar posteiormente o movimento de 2 casas

    def verifica(tabuleiro, x, y, xpos, ypos):
        if super().get_nome()[0] == "j":
            if y + 1 == ypos: # verifica se o movimento está em 1 casa ainda falta implementar o salto de 2 casas
                for i in range(-1, 2): #percorre as 3 casas da frente
                    if x - i >= 0 and x - i <= 7: #verifica se a casa está dentro do limite do tabuleiro
                        if x - i == xpos: # verifica se a posião x é referente ao xpos
                            verifica = ocupada(tabuleiro, xpos, ypos) # inplementar função para caso esteja ocupada a casa
                            if verifica == True:
                                if(x!=xpos): # está comendo peça na diagonal
                                    tabuleiro[ypos][xpos] = tabuleiro[y][x]
                                    tabuleiro[y][x] = "  "
                                    return True
                                else: return False
                            else: # casa ta livre sem peça
                                tabuleiro[ypos][xpos] = tabuleiro[y][x]
                                tabuleiro[y][x] = "  "
                                return True
        else:
            pass

