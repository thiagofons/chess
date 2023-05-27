import pecas


def ocupada(tabuleiro, xpos, ypox):
    pass


class Peao(pecas.Pecas):

    def __init__(self, nome):
        super().__init__(nome)

    def verifica(tabuleiro, x, y):
        if super().get_nome()[0] == "j":
            posibilidade = []
            for i in range(-1, 2):
                if x - i >= 0 and x - i <= 7:  # verifica se a casa está dentro do limite do tabuleiro
                    verifica = ocupada(tabuleiro, y + 1, x - i)  # inplementar função para caso esteja ocupada a casa
                    if (x - i != x):  # se a casa ocupada está na diagonal
                        if verifica == 'i':
                            posibilidade.append([y + 1, x - i])
                    else:
                        if verifica == " ":
                            posibilidade.append([y + 1, x])
                            if y == 6:  # verifica se peão do jogador já foi movido alguma vez
                                verifica = ocupada(tabuleiro, y + 2,x - i)  # inplementar função para caso esteja ocupada a casa
                                if (verifica == False):
                                    posibilidade.append([y + 2, x])
            return posibilidade

        else:
            pass
