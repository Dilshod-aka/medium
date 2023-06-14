CREATE DATABASE medium;

CREATE TABLE cards(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(500),
    text VARCHAR(500),
    image VARCHAR(500)
);
INSERT INTO cards(id, title, text, image) VALUES  (1, 'Will We Spend Much?', 'The answer to the question “Will Apple be able to succeed on Apple Vision Pro?” doesnt depend on micro cameras, sensors, or megapixels. To discuss it, we need to dive into the history of science for some time.', 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*wvOJ8MuhVXy1YhC9Sr5x4Q.jpeg');
                                          
                                        INSERT INTO cards(id, title, text, image) VALUES  (2, 'React 18 Component Optimization: Make Your Application Faster and Smoother', 'REACT 18', 'https://miro.medium.com/v2/resize:fill:112:112/1*O3LozSWtYAhsg-xJhqHwXg.jpeg');