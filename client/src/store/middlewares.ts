import thunk from 'redux-thunk';

const middlewares: any[] = [thunk];

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
}

export default middlewares;
