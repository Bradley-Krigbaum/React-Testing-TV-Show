import React from 'react';
import {render, waitFor} from '@testing-library/react';
import {fetchShow as mockFetchShow} from '../api/fetchShow';

import App from '../App';


jest.mock('../api/fetchShow');
console.log('MOCK 1: ', mockFetchShow);


test('App fetches data and renders that data', async () => {
    const mockData = { 
        data: { 
            id: 1, 
            url: "test_url", 
            name: "Chapter ...", 
            season: 1, 
            number: 1, 
            runtime: 60, 
            summary: 'summary...', 
            image: { medium: "test_med", original: "test_org" },
            airdate: "2016-07-15",
            airstamp: "STAMP",
            airtime: "",
            _embedded: {
                episodes: [ 
                    {
                        airdate: "2016-07-15",
                        airstamp: "EPI_STAMP",
                        airtime: "",
                        id: 553946, 
                        url: "episode_url", 
                        name: "Chapter ...", 
                        season: 1, 
                        number: 1,
                        image: { medium: "epi_med_img", original: "epi_org_img" },
                        runtime: 60,
                        summary: "episode summary"
                    } 
                ]
            }
        }
    };

    mockFetchShow.mockResolvedValueOnce(mockData);

    const {getByText, queryAllByText} = render(<App />)

    await waitFor(() => {
        expect(getByText(/chapter/i)).toBeInTheDocument;
      });

    expect(queryAllByText(/chapter/i)).toHaveLength(1);
});