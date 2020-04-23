import React from 'react';
import { render } from '@testing-library/react';

import Episodes from '../components/Episodes';

test('Episodes render', () => {
    // arrange act assert
    render(<Episodes episodes={[]} />)

});


test('Episodes renders valid data ', () => {
    const mockData = [
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
    ];

    const {queryAllByText, rerender} = render(<Episodes episodes={[]} />)

    let allEpisodes = queryAllByText(/chapter/i);
    expect(allEpisodes).toHaveLength(0);

    // these should fail
    // expect(allEpisodes).toHaveLength(1);
    // expect(allEpisodes).toStrictEqual([{}]);

    rerender(<Episodes episodes={mockData} />);

    allEpisodes = queryAllByText(/chapter/i);
    expect(allEpisodes).toHaveLength(1);

});