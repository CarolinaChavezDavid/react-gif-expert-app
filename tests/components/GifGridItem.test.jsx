import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe('Test in <GifGridItem />', () => { 
    const title = 'Naruto';
    const url = 'https://aws.amazon.com/what-is/batch-processing/';

    test('must match with snapshot', () => { 
        const { container } = render(<GifGridItem title={ title } url= { url } />)
        expect( container ).toMatchSnapshot();

     });

     test('should show the img with right URL and ALT', () => { 
        render(<GifGridItem title={ title } url= { url } />);
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );
        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url);
        expect(alt).toBe(title);
     });

     test('should show the title in the component', () => { 
        render(<GifGridItem title={ title } url= { url } />);
        expect(screen.getByText(title)).toBeTruthy();
      })

 });