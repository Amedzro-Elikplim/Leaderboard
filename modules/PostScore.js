import { BaseURL, UniqueID } from './API.js';

const PostScore = async (user, score) => {
  const data = {
    user,
    score,
  };

  try {
    const response = await fetch(`${BaseURL}games/${UniqueID}/scores/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response;
  } catch (error) {
    alert(new Error(error));
  }
};

export default PostScore;