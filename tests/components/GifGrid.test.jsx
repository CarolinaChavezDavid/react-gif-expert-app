import { fireEvent, render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');
const category = 'The office'


describe('Tests int <GifGrid />', () => { 
    useFetchGifs.mockReturnValue({
        images: [], 
        isLoading: true
    });

    test('should show loading initially', () => { 
        render(<GifGrid category= { category } />)
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
     });

     test('should show items when image are loaded with useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'The office',
                url: 'https://aws.amazon.com/what-is/batch-processing/'
            },
            {
                id: 'FBH',
                title: 'Velvet',
                url: 'https://aws.amazon.com/what-is/batch-processing/'
            },
            {
                id: 'FJH',
                title: 'Breaking bad',
                url: 'https://aws.amazon.com/what-is/batch-processing/'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs, 
            isLoading: true
        });
        render(<GifGrid category= { category } />)
        expect(screen.getAllByRole('img').length).toBe(3);

      });
 })