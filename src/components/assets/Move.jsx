export default class Move {
    isCapture = false;
    capturePiece = null;
    srcSquare = null;
    srcPiece = null;
    destSquare = null;

    constructor(srcSquare, srcPiece, destSquare) {
        this.srcSquare = srcSquare;
        this.srcPiece = srcPiece;
        this.destSquare = destSquare
    }
}