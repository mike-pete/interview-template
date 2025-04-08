import { expect, test } from "bun:test"
import { default as solution } from "./main"

function verify(input: Parameters<typeof solution>) {
	return solution(...input)
}

test("example test", () => {
	const result = verify([1, 2])
	const expected = 3
	expect(result).toEqual(expected)
})
