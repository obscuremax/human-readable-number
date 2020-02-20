module.exports = function toReadable (number) {
    let num0_9 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
    let num11_19=["",'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let num10_90 = ["",'ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let num100_900 = ['hundred']

    let a = String(number).split("")

   if(a.length == 1) {
       return num0_9[a[0]]
   }

    if(a.length == 2){
        if (a[1] == 0) {
            return num10_90[a[0]]
        } else if(a[0]==1 && a[1] != 0) {
            return `${num11_19[Number(a[1])]}`
        } else {
            return `${num10_90[Number(a[0])]} ${num0_9[Number(a[1])]}`
        }
    }

    if (a.length == 3) {

        if (a[1] == 0 && a[2] == 0) {
            return `${num0_9[a[0]]} ${num100_900}`
        } else if(a[2] == 0) {
            return `${num0_9[a[0]]} ${num100_900} ${num10_90[Number(a[1])]}`
        } else if(a[1]==1 && a[2] != 0) {
            return `${num0_9[a[0]]} ${num100_900} ${num11_19[Number(a[2])]}`
        } else {
            return `${num0_9[a[0]]} ${num100_900}${a[1] != 0? ` ${num10_90[Number(a[1])]}`:""} ${num0_9[Number(a[2])]}`
        }
    }

}
