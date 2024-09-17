export default function two_crystal_balls(breaks: boolean[]): number {
    // breaks: [ false, false ... false, true, true .... true]

    const offset = Math.floor(Math.sqrt(breaks.length));
    let i = offset;
    for (; i < breaks.length; i += offset) {
        if (breaks[i]) {
            break;
        }
    }

    i -= offset;

    for (let j = 0; j < offset && i < breaks.length; j++, i++) {
        if (breaks[j]) {
            return i;
        }
    }
    return -1;
}
