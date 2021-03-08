import {renderHook} from "@testing-library/react-hooks"

import useCountdown from "../src"

test("shows initial time", () => {
    const {result} = renderHook(() => useCountdown({minutes: 1, seconds: 30}))
    expect(result.current).toEqual({minutes: 1, seconds: 30})
})

test("default minutes", () => {
    const {result} = renderHook(() => useCountdown({seconds: 30}))
    expect(result.current).toEqual({minutes: 0, seconds: 30})
})

test("default seconds", () => {
    const {result} = renderHook(() => useCountdown({minutes: 1}))
    expect(result.current).toEqual({minutes: 1, seconds: 0})
})

test("default minutes and seconds", () => {
    const {result} = renderHook(() => useCountdown())
    expect(result.current).toEqual({minutes: 0, seconds: 0})
})

test("counts down", async () => {
    const {result, waitForNextUpdate} = renderHook(() =>
        useCountdown({minutes: 1, seconds: 30}),
    )

    await waitForNextUpdate({timeout: 2000})
    expect(result.current).toEqual({minutes: 1, seconds: 29})
})

test("stops", async () => {
    const {result, waitForNextUpdate} = renderHook(() =>
        useCountdown({seconds: 1}),
    )

    await waitForNextUpdate({timeout: 2000})
    expect(result.current).toEqual({minutes: 0, seconds: 0})
})
