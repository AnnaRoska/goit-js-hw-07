const ulElems = document.querySelector("#categories");
const liElems = [...ulElems.querySelectorAll(".item")];

console.log(`Number of catehgories: ${liElems.length}`);
for (const liElem of liElems) {
    const nameCtg = liElem.querySelector("h2").textContent;
    const numbCtg = liElem.querySelectorAll("li").length;
    console.log(`Category: ${nameCtg}`);
    console.log(`Elements: ${numbCtg}`);
}
