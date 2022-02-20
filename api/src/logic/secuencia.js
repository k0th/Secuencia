function getSequenceNumber(cadena) {

    let countLetterA = 0
    let countLetterT = 0
    let countLetterC = 0
    let countLetterG = 0

    let countSequenceA = 0
    let countSequenceT = 0
    let countSequenceC = 0
    let countSequenceG = 0

    let findSequence

    for(i=0; i<cadena.length; i++){
        let letterCadena = cadena[i]
        switch (letterCadena) {
            case "A":
                countLetterA = countLetterA + 1
                countLetterC = 0
                countLetterT = 0
                countLetterG = 0
                if(countLetterA === 4){
                    countSequenceA = countSequenceA + 1
                    countLetterA = 0
                }
                break;
            case "T":
                countLetterT = countLetterT+ 1
                countLetterA = 0
                countLetterC = 0
                countLetterG = 0
                if(countLetterT === 4){
                    countSequenceT = countSequenceT + 1
                    countLetterT = 0
                }
                break;
            case "C":
                countLetterC = countLetterC + 1
                countLetterA = 0
                countLetterT = 0
                countLetterG = 0
                if(countLetterC === 4){
                    countSequenceC = countSequenceC + 1
                    countLetterC = 0
                }
                break;
            case "G":
                countLetterG = countLetterG + 1
                countLetterA = 0
                countLetterT = 0
                countLetterC = 0
                if(countLetterG === 4){
                    countSequenceG = countSequenceG + 1
                    countLetterG = 0
                }
                break;
            default:
                break;
        }
    } 

    findSequence =  countSequenceA  + countSequenceT + countSequenceC + countSequenceG 

    return findSequence
}
 
module.exports = {
    getSequenceNumber
}
// function getSequenceNumber(cadena) {

//     let countLetterA = 0
//     let countLetterT = 0
//     let countLetterC = 0
//     let countLetterG = 0

//     let countSequenceA = 0
//     let countSequenceT = 0
//     let countSequenceC = 0
//     let countSequenceG = 0

//     let findSequence

//     for(i=0; i<cadena.length; i++){
//         let letterCadena = cadena[i]
//         switch (letterCadena) {
//             case "A":
//                 countLetterA = countLetterA + 1
//                 countLetterC = 0
//                 countLetterT = 0
//                 countLetterG = 0
//                 if(countLetterA === 4){
//                     countSequenceA = countSequenceA + 1
//                     countLetterA = 0
//                 }
//                 break;
//             case "T":
//                 countLetterT = countLetterT+ 1
//                 countLetterA = 0
//                 countLetterC = 0
//                 countLetterG = 0
//                 if(countLetterT === 4){
//                     countSequenceT = countSequenceT + 1
//                     countLetterT = 0
//                 }
//                 break;
//             case "C":
//                 countLetterC = countLetterC + 1
//                 countLetterA = 0
//                 countLetterT = 0
//                 countLetterG = 0
//                 if(countLetterC === 4){
//                     countSequenceC = countSequenceC + 1
//                     countLetterC = 0
//                 }
//                 break;
//             case "G":
//                 countLetterG = countLetterG + 1
//                 countLetterA = 0
//                 countLetterT = 0
//                 countLetterC = 0
//                 if(countLetterG === 4){
//                     countSequenceG = countSequenceG + 1
//                     countLetterG = 0
//                 }
//                 break;
//             default:
//                 break;
//         }
//     } 

//     findSequence = "Secuencie A:" + countSequenceA +"|"+ "Secuencie T:" + countSequenceT +"|" + "Secuencie C:" + countSequenceC +"|" + "Secuencie G:" + countSequenceG +"|"    

//     return console.log(findSequence)
// }
 
//getSequenceNumber("ATGCGACAGTGCTTATGTGAGAAGAACACCCCTGCAA")
