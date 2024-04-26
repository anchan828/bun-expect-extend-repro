import { expect, test } from "bun:test";

expect.extend({
    toCustomEqual(actual, expected) {
        return {
            pass: this.equals(actual, expected),
        }
    }
})

declare module "bun:test" {
    interface Matchers<T> {
        toCustomEqual(expected: unknown): any;
    }
    interface AsymmetricMatchers {
        toCustomEqual(expected: unknown): any;
    }
}



test("should pass", () => {
    expect({ a: "test" }).toCustomEqual({ a: expect.anything() })
})