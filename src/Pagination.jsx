import React, { useState, useEffect } from 'react';

const Pagination = () => {
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {

        fetchVideos();
    }, [page]);

    const fetchVideos = async () => {
        try {

            const response = await fetch(`https://reacttask.mkdlabs.com/v1/api/rest/video/PAGINATE`, {
                method: 'POST',
                headers: {
                    Authorization: 'x-project cmVhY3R0YXNrOmQ5aGVkeWN5djZwN3p3OHhpMzR0OWJtdHNqc2lneTV0Nw==',
                },
                body: {
                    payload: {},
                    page: 1,
                    limit: 10
                }
            });

            const data = await response.json();
            setVideos(data)
            setPage(data.page); // Update the videos state with the fetched data
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    const handleNextPage = () => {
        setPage(page + 1);
    };

    const handlePreviousPage = () => {
        setPage(page - 1);
    };


    return (
        <div>
            <h1>Video List</h1>
            <ul>
                {videos.map(video => (
                    <li key={video.id}>
                        {/* Render video details here */}
                        {video.title}
                    </li>
                ))}
            </ul>
            <button onClick={handlePreviousPage}>Previous Page</button>
            <button onClick={handleNextPage}>Next Page</button>
        </div>
    );
};

export default Pagination;