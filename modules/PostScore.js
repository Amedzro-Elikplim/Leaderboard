import { baseURL, UniqueID } from './API.js';

const PostScore = async (user, score) => {
  const data = {
    user,
    score,
  };

  try {
    const response = await fetch(`${baseURL}games/${UniqueID}/scores/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log(response);
  } catch (error) {
    console.error(new Error(error));
  }
};

export default PostScore;