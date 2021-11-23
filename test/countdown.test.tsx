import {act, renderHook} from "@testing-library/react-hooks"

import useCountdown from "../src"

jest.useFakeTimers()

describe("countdown", () => {
    test("shows initial time", () => {
        const {result} = renderHook(() =>
            useCountdown({minutes: 1, seconds: 30}),
        )

        expect(result.current).toMatchObject({
            minutes: 1,
            seconds: 30,
            formatted: "01:30",
            isActive: true,
            isInactive: false,
            isRunning: true,
            isPaused: false,
        })
    })

    test("formats time", () => {
        const {result} = renderHook(() =>
            useCountdown({minutes: 1, seconds: 30, format: "mm:ss:SS"}),
        )

        expect(result.current).toMatchObject({
            minutes: 1,
            seconds: 30,
            formatted: "01:30:00",
            isActive: true,
            isInactive: false,
            isRunning: true,
            isPaused: false,
        })
    })

    test("default minutes", () => {
        const {result} = renderHook(() => useCountdown({seconds: 30}))

        expect(result.current).toMatchObject({
            minutes: 0,
            seconds: 30,
            formatted: "00:30",
            isActive: true,
            isInactive: false,
            isRunning: true,
            isPaused: false,
        })
    })

    test("default seconds", () => {
        const {result} = renderHook(() => useCountdown({minutes: 1}))

        expect(result.current).toMatchObject({
            minutes: 1,
            seconds: 0,
            formatted: "01:00",
            isActive: true,
            isInactive: false,
            isRunning: true,
            isPaused: false,
        })
    })

    test("default minutes and seconds", () => {
        const {result} = renderHook(() => useCountdown())

        expect(result.current).toMatchObject({
            minutes: 0,
            seconds: 0,
            formatted: "00:00",
            isActive: true,
            isInactive: false,
            isRunning: true,
            isPaused: false,
        })
    })

    test("counts down", () => {
        const {result} = renderHook(() =>
            useCountdown({minutes: 1, seconds: 30}),
        )

        act(() => {
            jest.advanceTimersByTime(1000)
        })

        expect(result.current).toMatchObject({
            minutes: 1,
            seconds: 29,
            formatted: "01:29",
            isActive: true,
            isInactive: false,
            isRunning: true,
            isPaused: false,
        })
    })
})

describe("pause", () => {
    test("pauses", () => {
        const {result} = renderHook(() =>
            useCountdown({minutes: 1, seconds: 30}),
        )

        act(() => {
            jest.advanceTimersByTime(1000)
        })

        expect(result.current).toMatchObject({
            minutes: 1,
            seconds: 29,
            formatted: "01:29",
            isActive: true,
            isInactive: false,
            isRunning: true,
            isPaused: false,
        })

        act(() => {
            result.current.pause()
            jest.advanceTimersByTime(1000)
        })

        expect(result.current).toMatchObject({
            minutes: 1,
            seconds: 29,
            formatted: "01:29",
            isActive: true,
            isInactive: false,
            isRunning: false,
            isPaused: true,
        })
    })

    test("does not pause when paused", () => {
        const {result} = renderHook(() =>
            useCountdown({minutes: 1, seconds: 30}),
        )

        act(() => {
            jest.advanceTimersByTime(1000)
        })

        act(() => {
            result.current.pause()
            result.current.pause()
        })

        expect(result.current).toMatchObject({
            minutes: 1,
            seconds: 29,
            formatted: "01:29",
            isActive: true,
            isInactive: false,
            isRunning: false,
            isPaused: true,
        })
    })

    test("does not pause when inactive", () => {
        const {result} = renderHook(() =>
            useCountdown({minutes: 1, seconds: 30}),
        )

        act(() => {
            jest.runAllTimers()
            result.current.pause()
        })

        expect(result.current).toMatchObject({
            minutes: 0,
            seconds: 0,
            formatted: "00:00",
            isActive: false,
            isInactive: true,
            isRunning: false,
            isPaused: false,
        })
    })
})

describe("resume", () => {
    test("resumes", () => {
        const {result} = renderHook(() =>
            useCountdown({minutes: 1, seconds: 30}),
        )

        act(() => {
            jest.advanceTimersByTime(1000)
            result.current.pause()
        })

        act(() => {
            result.current.resume()
            jest.advanceTimersByTime(1000)
        })

        expect(result.current).toMatchObject({
            minutes: 1,
            seconds: 28,
            formatted: "01:28",
            isActive: true,
            isInactive: false,
            isRunning: true,
            isPaused: false,
        })
    })

    test("does not resume when running", () => {
        const {result} = renderHook(() =>
            useCountdown({minutes: 1, seconds: 30}),
        )

        act(() => {
            jest.advanceTimersByTime(1000)
            result.current.resume()
            jest.advanceTimersByTime(1000)
        })

        expect(result.current).toMatchObject({
            minutes: 1,
            seconds: 28,
            formatted: "01:28",
            isActive: true,
            isInactive: false,
            isRunning: true,
            isPaused: false,
        })
    })
})

describe("reset", () => {
    test("resets", () => {
        const {result} = renderHook(() =>
            useCountdown({minutes: 1, seconds: 30}),
        )

        act(() => {
            jest.advanceTimersByTime(1000)
            result.current.reset()
        })

        expect(result.current).toMatchObject({
            minutes: 1,
            seconds: 30,
            formatted: "01:30",
            isActive: true,
            isInactive: false,
            isRunning: true,
            isPaused: false,
        })

        act(() => {
            jest.advanceTimersByTime(1000)
        })

        expect(result.current).toMatchObject({
            minutes: 1,
            seconds: 29,
            formatted: "01:29",
            isActive: true,
            isInactive: false,
            isRunning: true,
            isPaused: false,
        })
    })
})

describe("stop", () => {
    test("stops", () => {
        const {result} = renderHook(() =>
            useCountdown({minutes: 1, seconds: 30}),
        )

        act(() => {
            jest.runAllTimers()
        })

        expect(result.current).toMatchObject({
            minutes: 0,
            seconds: 0,
            formatted: "00:00",
            isActive: false,
            isInactive: true,
            isRunning: false,
            isPaused: false,
        })
    })
})

describe("onCompleted", () => {
    test("runs on completed callback", () => {
        const onCompletedMock = jest.fn()

        renderHook(() =>
            useCountdown({
                minutes: 1,
                seconds: 30,
                onCompleted: onCompletedMock,
            }),
        )

        act(() => {
            jest.runAllTimers()
        })

        expect(onCompletedMock).toHaveBeenCalledTimes(1)
    })
})
