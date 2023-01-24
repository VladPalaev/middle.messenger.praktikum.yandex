/**
 *
 * @param checkValue проверочное значение
 * @param min от(невключительно)
 * @param max до(включительно)
 */
export function inRange(checkValue, min, max): boolean {
	return checkValue > min && checkValue <= max;
}
