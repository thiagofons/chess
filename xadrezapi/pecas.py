def ocupada(tabuleiro, ypos, xpos):
    if str(tabuleiro[ypos][xpos]) == "XX":
        return " "
    elif str(tabuleiro[ypos][xpos])[0] == "i":
        return "i"
    else:
        return "a"

def todas_jogadas(tabuleiro, quem, mod): #todas as possiveis casas que podem ser jogadas por "quem"
    checa = []
    jogadas =[]
    for i in range(8):
        for j in range(8):
            if str(tabuleiro[i][j])[0] == quem :
                jogadas = tabuleiro[i][j].verifica(tabuleiro, i, j, False, [], mod-1)
            if jogadas:
                print(jogadas)
                print(str(tabuleiro[i][j]))
                checa = checa + jogadas
                jogadas = []
            else:
                jogadas = []
    return checa

class Pecas:
    def __init__(self,nome):
        self.__nome = nome
        self.__historico=[]

    def verifica(self,tabuleiro, y, x, check, qtd):
        pass

    def get_nome(self):
        return self.__nome

    def __str__(self):
        return self.get_nome()


def identificarei(tabuleiro, param):
    for i in range(7):
        for j in range(7):
            if(str(tabuleiro[i][j])==param):
                return [i,j]
