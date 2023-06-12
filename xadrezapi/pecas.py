def ocupada(tabuleiro, ypos, xpos):
    if str(tabuleiro[ypos][xpos]) == "XX":
        return " "
    elif str(tabuleiro[ypos][xpos])[0] == "i":
        return "i"
    else:
        return "a"


class Pecas:
    def __init__(self,nome):
        self.__nome = nome
        self.__historico=[]

    def verifica(self,tabuleiro, y, x):
        pass

    def get_nome(self):
        return self.__nome

    def __str__(self):
        return self.get_nome()