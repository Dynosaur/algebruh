export const round = (n: number, base: number): number => {
    return Math.round(n / base) * base;
}