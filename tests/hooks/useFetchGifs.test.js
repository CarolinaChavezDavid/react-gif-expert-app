import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Tests in useFetchGifs', () => { 
    test('should return initial state', () => { 
        const {result} =renderHook(() => useFetchGifs('The office'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy;
     });

     test('should return an image array and isLoading in false', async() => { 
        const {result} =renderHook(() => useFetchGifs('The office'));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy;
     });


 })