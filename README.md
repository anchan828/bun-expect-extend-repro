# bun-expect-extend-repro

To install dependencies:

```bash
bun install
```

To run:

```bash
bun test
```

You should see the following output:

```bash
➜  bun-expect-extend-repro bun test
bun test v1.1.5-canary.1 (b257a309)

test.spec.ts:
18 | }
19 | 
20 | 
21 | 
22 | test("should pass", () => {
23 |     expect({ a: "test" }).toCustomEqual({ a: expect.anything() })
         ^
error: expect(received).toCustomEqual(<green>expected<r>)

No message was specified for this matcher.
      at /repos/bun-expect-extend-repro/test.spec.ts:23:5
✗ should pass [0.19ms]

 0 pass
 1 fail
 1 expect() calls
Ran 1 tests across 1 files. [9.00ms]
```