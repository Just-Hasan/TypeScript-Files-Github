"use strict";
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
        default:
            console.log(`Invalid type`);
    }
    console.log(`Moving with speed of : ${speed}`);
}
const bird1 = { flyingSpeed: 12, type: "bird" };
const horse1 = { type: "horse", runningSpeed: 120 };
moveAnimal(bird1);
//# sourceMappingURL=discriminate_union.js.map