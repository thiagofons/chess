import pecas
import peao
# This is a sample Python script.

def imprime_tabuleiro(tabuleiro):
    linha =""
    for i in range(8):
        for j in range(8):
            linha=linha+str(tabuleiro[i][j])+"  "
        print(linha)
        linha =""


# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
# p = peao
# t = torre
# c = cavalo
# b = bispo
# r = rei
# s = rainha

def verifica_peao(tabuleiro, i, j):
    pass


def verifica_torre(tabuleiro, i, j):
    pass


def verifica_cavalor(tabuleiro, i, j):
    pass


def verifica_bispo(tabuleiro, i, j):
    pass


def verifica_rei(tabuleiro, i, j):
    pass


def verifica_rainha(tabuleiro, i, j):
    pass


def movimento(tabuleiro, x, y, prox, proy):
    match tabuleiro[x][y][1]:
        case 'p':
            verifica_peao(tabuleiro, prox,proy)

        case 't':
            verifica_torre(tabuleiro, prox,proy)

        case 'c':
            verifica_cavalor(tabuleiro, prox,proy)

        case 'b':
            verifica_bispo(tabuleiro, prox,proy)

        case 'r':
            verifica_rei(tabuleiro, prox,proy)

        case 's':
            verifica_rainha(tabuleiro, prox,proy)

if __name__ == '__main__':

    print(str("valor"))
    pecas_ia = ["it", "ic", "ib", "is", "ir", "ib", "ic", "it"]
    #pecas_peao_ia = ["ip", "ip", "ip", "ip", "ip", "ip", "ip", "ip"]
    #pecas_peao_j = ["jp", "jp", "jp", "jp", "jp", "jp", "jp", "jp"]
    pecas_peao_ia = [peao.Peao("ip"), peao.Peao("ip"), peao.Peao("ip"), peao.Peao("ip"), peao.Peao("ip"), peao.Peao("ip"), peao.Peao("ip"), peao.Peao("ip")]
    pecas_peao_j = [peao.Peao("jp"), peao.Peao("jp"), peao.Peao("jp"), peao.Peao("jp"), peao.Peao("jp"), peao.Peao("jp"), peao.Peao("jp"), peao.Peao("jp")]
    pecas_j = ["jt", "jc", "jb", "js", "jr", "jb", "jc", "jt"]
    tabuleiro = []
    tabuleiro.append(pecas_ia)
    tabuleiro.append(pecas_peao_ia)
    for i in range(4):
        tabuleiro.append(["XX","XX","XX","XX","XX","XX","XX","XX"])
        tabuleiro.append(["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "])
    tabuleiro.append(pecas_peao_j)
    tabuleiro.append(pecas_j)
    imprime_tabuleiro(tabuleiro)
