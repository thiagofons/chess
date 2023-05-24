import pecas


class torre(pecas.Pecas):
    def __init__(self, nome):
        super().__init__(nome)

    def verifica(tabuleiro,x,y,xpos,ypos):
        if super().get_nome()[0] == "j":
            if(x==xpos and y != ypos)or(x!=xpos and y==ypos): #checa se o movimento está apenas em uma linha
                if(x!=xpos): #percorrer o eixo x
                    for i in range(x,xpos): # verificar cada casa em busca de alguma peça caso exista alguma peça no caminho, a jogada é invalida
                        if(tabuleiro[y][i] != tabuleiro[y][x]):
                            if tabuleiro[y][i] != "XX":
                                if y==ypos and x == xpos:
                                    return True
                                return False
                else: # percorrer o eixo y
                    for i in range(y, ypos): # verificar cada casa em busca de alguma peça caso exista alguma peça no caminho, a jogada é invalida