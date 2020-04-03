document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("text1").addEventListener("keyup", compareTags);
    document.getElementById("text2").addEventListener("keyup", compareTags);
});


const compareTags = () => {
    const delimeter = " ";
    const textOne = document.getElementById("text1").value;
    const textTwo = document.getElementById("text2").value;
    const textSplitOne = textOne.split(delimeter);
    const textSplitTwo = textTwo.split(delimeter);
    const uniqueUnion = difference(textSplitOne, textSplitTwo);
    document.getElementById("content").innerHTML = uniqueUnion.join(delimeter);
}

const difference = (arr1, arr2) => {
    return arr1
        .filter(x => arr2 != null && !arr2.includes(x))
        .concat(arr2.filter(x => !arr1.includes(x)));
}
