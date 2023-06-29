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
                if len(str(tabuleiro[i][j])) > 1:
                    if str(tabuleiro[i][j])[1] != "p":
                        jogadas = tabuleiro[i][j].verifica(tabuleiro, i, j, False, [], mod-1)
                    else:
                        for k in range(-1, 2):
                            if quem == "j":
                                if i - 1 >= 0:
                                    if j + k >= 0 and j + k <= 7:
                                        jogadas = jogadas + [[i-1, j+k]]
                            else: 
                                if i + 1 <= 7:
                                    if j + k >= 0 and j + k <= 7:
                                        jogadas = jogadas + [[i+1, j+k]]

            if jogadas:
                checa = checa + jogadas

            jogadas = []
    return checa

def pecasIA(tabuleiro, quem, mod): #todas as possiveis casas que podem ser jogadas por "quem"
    checa = []
    jogadas =[]
    for i in range(8):
        for j in range(8):
            if str(tabuleiro[i][j])[0] == quem :
                if len(str(tabuleiro[i][j])) > 1:
                    jogadas = tabuleiro[i][j].verifica(tabuleiro, i, j, False, [], mod-1)
            if jogadas:
                checa.append([i,j])
            jogadas = []
    return checa

def check(tabuleiro, quem, mod):
    checa = []
    jogadas = []
    
    for i in range(8):
        for j in range(8):
            if str(tabuleiro[i][j])[0] == quem:
                if len(str(tabuleiro[i][j])) > 1:
                    jogadas = tabuleiro[i][j].verifica(tabuleiro, i, j, False, [], mod-1)
            if jogadas:
                checa = checa + jogadas
                
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
