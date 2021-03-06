import {act, renderHook} from "@testing-library/react-hooks"

import useCountdown from "../src"

jest.useFakeTimers()

test("shows initial time", () => {
    const {result} = renderHook(() => useCountdown({minutes: 1, seconds: 30}))

    expect(result.current).toEqual({
        minutes: 1,
        seconds: 30,
        formatted: "01:30",
    })
})

test("formats time", () => {
    const {result} = renderHook(() =>
        useCountdown({minutes: 1, seconds: 30, format: "mm:ss:SS"}),
    )

    expect(result.current).toEqual({
        minutes: 1,
        seconds: 30,
        formatted: "01:30:00",
    })
})

test("default minutes", () => {
    const {result} = renderHook(() => useCountdown({seconds: 30}))

    expect(result.current).toEqual({
        minutes: 0,
        seconds: 30,
        formatted: "00:30",
    })
})

test("default seconds", () => {
    const {result} = renderHook(() => useCountdown({minutes: 1}))

    expect(result.current).toEqual({
        minutes: 1,
        seconds: 0,
        formatted: "01:00",
    })
})

test("default minutes and seconds", () => {
    const {result} = renderHook(() => useCountdown())

    expect(result.current).toEqual({
        minutes: 0,
        seconds: 0,
        formatted: "00:00",
    })
})

test("counts down", () => {
    const {result} = renderHook(() => useCountdown({minutes: 1, seconds: 30}))

    act(() => {
        jest.advanceTimersByTime(1000)
    })

    expect(result.current).toEqual({
        minutes: 1,
        seconds: 29,
        formatted: "01:29",
    })
})

test("stops", () => {
    const {result} = renderHook(() => useCountdown({minutes: 1, seconds: 30}))

    act(() => {
        jest.runAllTimers()
    })

    expect(result.current).toEqual({
        minutes: 0,
        seconds: 0,
        formatted: "00:00",
    })
})

test("runs on completed callback", () => {
    const onCompletedMock = jest.fn()

    renderHook(() =>
        useCountdown({minutes: 1, seconds: 30, onCompleted: onCompletedMock}),
    )

    act(() => {
        jest.runAllTimers()
    })

    expect(onCompletedMock).toHaveBeenCalledTimes(1)
})
